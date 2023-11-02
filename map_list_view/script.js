//Init Data
import config from "./web_config.js";

tt.setProductInfo("RentO_Map", "0.6");
const locations = [];
const markerCoordinates = [];
var markerInstances = [];
const IDArray = [];

//Init Swiper
const swiperContainer = document.querySelector(".swiper-container");

var swiper = new Swiper(".swiper-container", {
  loop: false,
  autoplay: false,
  pagination: {
    el: ".swiper-pagination",
  },
});

initializeApp();

// console.log(process.env.APP_MAP_KEY);

//Init the Map
var map = tt.map({
  key: config.MAP_KEY,
  container: "map",
  center: [-123.1247356438283, 49.28004330952876],
  zoom: 13,
  dragPan: !isMobileOrTablet(),
});

var infoHint = new InfoHint("info", "bottom-center", 5000).addTo(
  document.getElementById("map")
);
var errorHint = new InfoHint("error", "bottom-center", 5000).addTo(
  document.getElementById("map")
);

// Options for the fuzzySearch service
var searchOptions = {
  key: config.MAP_KEY,
  language: "en-GB",
  limit: 5,
};

// Options for the autocomplete service
var autocompleteOptions = {
  key: config.MAP_KEY,
  language: "en-GB",
};

var searchBoxOptions = {
  minNumberOfCharacters: 0,
  searchOptions: searchOptions,
  autocompleteOptions: autocompleteOptions,
  distanceFromPoint: [15.4, 53.0],
};
var ttSearchBox = new tt.plugins.SearchBox(tt.services, searchBoxOptions);
document
  .querySelector(".tt-side-panel__header")
  .appendChild(ttSearchBox.getSearchBoxHTML());

var state = {
  previousOptions: {
    query: null,
    center: null,
  },
  callbackId: null,
  userLocation: null,
};

map.addControl(
  new tt.FullscreenControl({ container: document.querySelector("body") })
);
map.addControl(new tt.NavigationControl());
new SidePanel(".tt-side-panel", map);

var geolocateControl = new tt.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: false,
  },
});

geolocateControl.on("geolocate", function (event) {
  var coordinates = event.coords;
  state.userLocation = [coordinates.longitude, coordinates.latitude];
  ttSearchBox.updateOptions(
    Object.assign({}, ttSearchBox.getOptions(), {
      distanceFromPoint: state.userLocation,
    })
  );
});

map.addControl(geolocateControl);

var resultsManager = new ResultsManager();
var searchMarkersManager = new SearchMarkersManager(map);

map.on("load", handleMapEvent);
map.on("moveend", handleMapEvent);

ttSearchBox.on("tomtom.searchbox.resultscleared", handleResultsCleared);
ttSearchBox.on("tomtom.searchbox.resultsfound", handleResultsFound);
ttSearchBox.on("tomtom.searchbox.resultfocused", handleResultSelection);
ttSearchBox.on("tomtom.searchbox.resultselected", handleResultSelection);

//Getting data from the API
function fetchData() {
  const url = "http://localhost:5001/fetchAllProperty"; // Modify the URL to the new API endpoint
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (Array.isArray(data)) {
        locations.push(...data);
      } else {
        throw new Error("Invalid data format: Data should be an array.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// Update search options to provide geobiasing based on current map center
function handleMapEvent() {
  var oldSearchOptions = ttSearchBox.getOptions().searchOptions;
  var oldautocompleteOptions = ttSearchBox.getOptions().autocompleteOptions;
  var newSearchOptions = Object.assign({}, oldSearchOptions, {
    center: map.getCenter(),
  });
  var newAutocompleteOptions = Object.assign({}, oldautocompleteOptions, {
    center: map.getCenter(),
  });
  ttSearchBox.updateOptions(
    Object.assign({}, searchBoxOptions, {
      placeholder: "Query e.g. Rogers Arena",
      searchOptions: newSearchOptions,
      autocompleteOptions: newAutocompleteOptions,
      distanceFromPoint: state.userLocation,
    })
  );
}

function handleResultsCleared() {
  searchMarkersManager.clear();
  //resultsManager.clear();
}

function handleResultsFound(event) {
  // Display fuzzySearch results if request was triggered by pressing enter
  if (
    event.data.results &&
    event.data.results.fuzzySearch &&
    event.data.metadata.triggeredBy === "submit"
  ) {
    var results = event.data.results.fuzzySearch.results;

    if (results.length === 0) {
      handleNoResults();
    }
    searchMarkersManager.draw(results);
    resultsManager.success();
    fitToViewport(results);
  }

  if (event.data.errors) {
    errorHint.setMessage("There was an error returned by the service.");
  }
}

function handleResultSelection(event) {
  if (isFuzzySearchResult(event)) {
    var result = event.data.result;
    searchMarkersManager.draw([result]);
    searchMarkersManager.openPopup(result.id);
    fitToViewport(result);
    state.callbackId = null;
    infoHint.hide();
  } else if (stateChangedSinceLastCall(event)) {
    var currentCallbackId = Math.random().toString(36).substring(2, 9);
    state.callbackId = currentCallbackId;
    // Make fuzzySearch call with selected autocomplete result as filter
    handleFuzzyCallForSegment(event, currentCallbackId);
  }
}

function isFuzzySearchResult(event) {
  return !("matches" in event.data.result);
}

function stateChangedSinceLastCall(event) {
  return (
    Object.keys(searchMarkersManager.getMarkers()).length === 0 ||
    !(
      state.previousOptions.query === event.data.result.value &&
      state.previousOptions.center.toString() === map.getCenter().toString()
    )
  );
}

function getBounds(data) {
  var southWest;
  var northEast;
  if (data.viewport) {
    southWest = [
      data.viewport.topLeftPoint.lng,
      data.viewport.btmRightPoint.lat,
    ];
    northEast = [
      data.viewport.btmRightPoint.lng,
      data.viewport.topLeftPoint.lat,
    ];
  }
  return [southWest, northEast];
}

function fitToViewport(markerData) {
  if (!markerData || (markerData instanceof Array && !markerData.length)) {
    return;
  }
  var bounds = new tt.LngLatBounds();
  if (markerData instanceof Array) {
    markerData.forEach(function (marker) {
      bounds.extend(getBounds(marker));
    });
  } else {
    bounds.extend(getBounds(markerData));
  }
  map.fitBounds(bounds, { padding: 100, linear: true });
}

function handleFuzzyCallForSegment(event, currentCallbackId) {
  var query = ttSearchBox.getValue();
  var segmentType = event.data.result.type;

  var commonOptions = Object.assign({}, searchOptions, {
    query: query,
    limit: 15,
    center: map.getCenter(),
    typeahead: true,
    language: "en-GB",
  });

  var filter;
  if (segmentType === "category") {
    filter = { categorySet: event.data.result.id };
  }
  if (segmentType === "brand") {
    filter = { brandSet: event.data.result.value };
  }
  var options = Object.assign({}, commonOptions, filter);

  infoHint.setMessage("Loading results...");
  errorHint.hide();
  resultsManager.loading();
  tt.services
    .fuzzySearch(options)
    .then(function (response) {
      if (state.callbackId !== currentCallbackId) {
        return;
      }
      if (response.results.length === 0) {
        handleNoResults();
        return;
      }
      resultsManager.success();
      searchMarkersManager.draw(response.results);
      fillResultsList(response.results);
      map.once("moveend", function () {
        state.previousOptions = {
          query: query,
          center: map.getCenter(),
        };
      });
      fitToViewport(response.results);
    })
    .catch(function (error) {
      if (error.data && error.data.errorText) {
        errorHint.setMessage(error.data.errorText);
      }
      resultsManager.resultsNotFound();
    })
    .finally(function () {
      infoHint.hide();
    });
}

function handleNoResults() {
  resultsManager.clear();
  resultsManager.resultsNotFound();
  searchMarkersManager.clear();
  infoHint.setMessage(
    'No results for "' +
      ttSearchBox.getValue() +
      '" found nearby. Try changing the viewport.'
  );
}

function fillResultsList(results) {
  resultsManager.clear();
  var resultList = DomHelpers.createResultList();
  results.forEach(function (result) {
    var distance = state.userLocation
      ? SearchResultsParser.getResultDistance(result)
      : undefined;
    var addressLines = SearchResultsParser.getAddressLines(result);
    var searchResult = this.DomHelpers.createSearchResult(
      addressLines[0],
      addressLines[1],
      distance ? Formatters.formatAsMetricDistance(distance) : ""
    );
    var resultItem = DomHelpers.createResultItem();
    resultItem.appendChild(searchResult);
    resultItem.setAttribute("data-id", result.id);
    resultItem.onclick = function (event) {
      var id = event.currentTarget.getAttribute("data-id");
      searchMarkersManager.openPopup(id);
      searchMarkersManager.jumpToMarker(id);
    };
    resultList.appendChild(resultItem);
  });
  resultsManager.append(resultList);
}

function loadList() {
  //Randomly generate coordinates
  const minLongitude = -123.178899;
  const maxLongitude = -123.099158;
  const minLatitude = 49.223433;
  const maxLatitude = 49.299;

  locations.forEach((property, index) => {
    const {
      _id,
      title,
      type,
      location,
      // longitude,
      // latitude,
      roomNumbers,
      bathRoomNumbers,
      rent,
      photoUrl,
      availableDate,
    } = property;

    IDArray.push(_id);

    const randomLongitude =
      Math.random() * (maxLongitude - minLongitude) + minLongitude;
    const randomLatitude =
      Math.random() * (maxLatitude - minLatitude) + minLatitude;
    console.log("log=" + randomLongitude + ", and lat=" + randomLatitude);

    markerCoordinates.push([
      parseFloat(randomLongitude),
      parseFloat(randomLatitude),
    ]);

    const customerReview = Math.random() * 2 + 2;

    let daysDifference = 0;
    if (availableDate) {
      const currentDate = new Date();
      const availableDateTime = new Date(availableDate);
      const timeDifference =
        availableDateTime.getTime() - currentDate.getTime();
      daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    }

    let starIcons = "";
    for (let i = 0; i < Math.floor(customerReview); i++) {
      starIcons += '<i class="fa fa-star"></i>';
    }

    const swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image-div");
    imageDiv.style.height = "55%";

    // const imageElement = document.createElement("img");
    // imageElement.src = "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    // imageDiv.appendChild(imageElement);

    imageDiv.style.backgroundImage = `url("https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`;

    imageDiv.style.backgroundSize = "cover";

    imageDiv.style.backgroundPosition = "center";

    const detailsPanel = document.createElement("div");
    detailsPanel.classList.add("details-panel");
    detailsPanel.style.height = "45%";

    detailsPanel.innerHTML = `
    <div class="left-column">
      <div class="detail rent"><span class="rent">$${rent}</span></div>
      <div class="detail location"><span class="location">Vancouver, BC</span></div>
      <div class="detail rooms"><span class="roomNumbers">${roomNumbers} bd</span> | <span class="bathRoomNumbers">${bathRoomNumbers} ba</span></div>
    
    </div>
    <div class="right-column">
      <i class="far fa-heart"></i>
      <div class="detail time">${
        availableDate ? daysDifference + " days ago" : "0 day"
      }</div>
    
      </div>
  `;

    //  <div class="detail star">${starIcons}</div>

    swiperSlide.appendChild(imageDiv);
    swiperSlide.appendChild(detailsPanel);

    swiperContainer.querySelector(".swiper-wrapper").appendChild(swiperSlide);
  });
}

async function initializeApp() {
  try {
    await fetchData();
    loadList();
    initMarkers();
  } catch (error) {
    console.error("Error initializing app:", error);
  }
}

function deactivateMarkers() {
  markerInstances.forEach(function (marker) {
    marker.getElement().classList.remove("marker-active");
    marker.getElement().classList.add("marker-normal");
    if (marker.getPopup()) {
      marker.setPopup(null);

      //TODO Pop up bug
      marker.togglePopup();
    }
  });
}

function initMarkers() {
  // Array to store marker instances

  markerCoordinates.forEach(function (coord, index) {
    var markerElement = document.createElement("div");
    markerElement.className = "marker-normal";

    var marker = new tt.Marker({ element: markerElement }).setLngLat(coord);
    markerInstances.push(marker);

    //focus on the default marker
    if (index === 0) {
      map.setCenter(coord);
    }

    marker.getElement().addEventListener("click", () => {
      //Clear all status
      deactivateMarkers();

      marker.getElement().classList.remove("marker-normal");
      marker.getElement().classList.add("marker-active");

      marker.togglePopup();

      map.easeTo({
        center: coord,
      });

      //sync
      swiper.slideTo(index);
    });
  });

  markerInstances.forEach(function (marker) {
    marker.addTo(map);
    marker.setPopup(
      new tt.Popup({ offset: 30 }).setText(
        "Marker " + (markerInstances.indexOf(marker) + 1)
      )
    );
  });
}

swiper.on("slideChange", function () {
  var activeIndex = swiper.activeIndex;
  var activeMarker = markerInstances[activeIndex];
  var activeCoord = activeMarker.getLngLat();

  deactivateMarkers();

  activeMarker.getElement().classList.remove("marker-normal");
  activeMarker.getElement().classList.add("marker-active");

  activeMarker.togglePopup();

  // Set the map's center to match the active slide's marker
  map.easeTo({
    center: activeCoord,
  });
});

 const sendDataToReactNativeApp = async () => {
                window.ReactNativeWebView.postMessage('Data from WebView / Website');
              };
              window.addEventListener("message", message => {
                alert(message.data) 
              });

swiper.on("click", function () {
  let activeIndex = swiper.activeIndex;
  console.log("Swiper " + activeIndex + " is clicked");

  // this is sentind the data
  // window.ReactNativeWebView.postMessage(activeIndex);
  // window.addEventListener("message", (message) => {
  //   alert(check);
  // });

  let clickedId = IDArray[activeIndex];
  console.log("Clicked ID=" + clickedId);

  // Post the ID to the parent window
  window.ReactNativeWebView.postMessage(clickedId);


  let activeMarker = markerInstances[activeIndex];
  let activeCoord = activeMarker.getLngLat();
  deactivateMarkers();
  activeMarker.getElement().classList.remove("marker-normal");
  activeMarker.getElement().classList.add("marker-active");
  activeMarker.togglePopup();
  // Set the map's center to match the active slide's marker
  map.easeTo({
    center: activeCoord,
  });
});

const clickableElement = document.getElementById("map");
clickableElement.addEventListener("click", () => {
  console.log("map element clicked");

  window.postMessage("Hello");
  console.log("Message sent to native code");
});
