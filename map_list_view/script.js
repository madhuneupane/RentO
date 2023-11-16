document.addEventListener("DOMContentLoaded", function () {
  var sumSort = document.querySelector(".sum_sort");
  var sortOptions = document.querySelector("#sortOptions");
  var sortOption = document.querySelector("#sortOption");

  sumSort.addEventListener("click", function (e) {
    sortOptions.style.display =
      sortOptions.style.display === "block" ? "none" : "block";
    e.stopPropagation();
  });

  sortOptions.addEventListener("click", function (e) {
    var newSortOption = e.target.textContent;
    sortOption.textContent = newSortOption;
    sortOptions.style.display = "none";
    selectedSortOption = newSortOption;
    sortAndRenderList();
    e.stopPropagation();
  });

  document.addEventListener("click", function () {
    sortOptions.style.display = "none";
  });

  //Sort the location array and re-render
  sortAndRenderList();
});

function sortAndRenderList() {
  switch (selectedSortOption) {
    case "Relevance":
      //TODO
      break;
    case "Time":
      locations.sort((a, b) => {
        return new Date(a.availableDate) - new Date(b.availableDate);
      });
      break;
    case "Price: High to Low":
      locations.sort((a, b) => {
        return b.rent - a.rent;
      });
      break;
    case "Price: Low to High":
      locations.sort((a, b) => {
        return a.rent - b.rent;
      });
      break;
    default:
      break;
  }

  // Clear swiperSlides
  const swiperWrapper = swiperContainer.querySelector(".swiper-wrapper");
  swiperWrapper.innerHTML = "";

  RenderListForBoth();
}

//Init Data
import config from "./web_config.js";

tt.setProductInfo("RentO_Map", "0.6");

//Global var
let locations = [];
const markerCoordinates = [];
var markerInstances = [];
const IDArray = [];
let selectedSortOption = "Relevance";

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
// map.addControl(new tt.NavigationControl());
new SidePanel(".tt-side-panel", map);

var geolocateControl = new tt.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: false,
  },
});

// geolocateControl.on("geolocate", function (event) {
//   var coordinates = event.coords;
//   state.userLocation = [coordinates.longitude, coordinates.latitude];
//   ttSearchBox.updateOptions(
//     Object.assign({}, ttSearchBox.getOptions(), {
//       distanceFromPoint: state.userLocation,
//     })
//   );
// });

const geolocateButton = document.getElementById("custom-geolocate-button");

map.addControl(geolocateControl);

geolocateButton.addEventListener("click", function () {
  geolocateControl.trigger();

  geolocateControl.on("geolocate", function (event) {
    var coordinates = event.coords;
    state.userLocation = [coordinates.longitude, coordinates.latitude];

    ttSearchBox.updateOptions(
      Object.assign({}, ttSearchBox.getOptions(), {
        distanceFromPoint: state.userLocation,
      })
    );

    //alert("Your location: " + state.userLocation.join(", "));
  });
});

var resultsManager = new ResultsManager();
var searchMarkersManager = new SearchMarkersManager(map);

map.on("load", handleMapEvent);
map.on("moveend", handleMapEvent);

ttSearchBox.on("tomtom.searchbox.resultscleared", handleResultsCleared);
ttSearchBox.on("tomtom.searchbox.resultsfound", handleResultsFound);
ttSearchBox.on("tomtom.searchbox.resultfocused", handleResultSelection);
ttSearchBox.on("tomtom.searchbox.resultselected", handleResultSelection);

//Getting data from the API
async function fetchDataFromBothAPIs() {
  const rentOUrl = "https://api.rent-o.com/api/fetchAllProperty";
  const craigslistUrl = "https://api.rent-o.com/api/craigExtract";

  const rentOPromise = fetch(rentOUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Rent-O API Network response was not ok: ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      if (Array.isArray(data)) {
        return data;
      } else {
        throw new Error(
          "Rent-O API Invalid data format: Data should be an array."
        );
      }
    })
    .catch((error) => {
      console.error("Rent-O API Error fetching data:", error);
      return [];
    });

  const craigslistPromise = fetch(craigslistUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Craigslist API Network response was not ok: ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      if (Array.isArray(data)) {
        return data;
      } else {
        throw new Error(
          "Craigslist API Invalid data format: Data should be an array."
        );
      }
    })
    .catch((error) => {
      console.error("Craigslist API Error fetching data:", error);
      return [];
    });
  return Promise.all([rentOPromise, craigslistPromise]).then((results) => {
    // Concatenate RentO data (results[0]) and Craigslist data (results[1])
    const concatenatedData = results[0].concat(results[1]);
    locations = concatenatedData;

    //optional
    return concatenatedData;
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
  const resultsCount = locations.length;
  //Update the result sum label
  const resultsCountElement = document.getElementById("resultsCount");
  if (resultsCountElement) {
    resultsCountElement.textContent = `${resultsCount} results in view`;
  }

  RenderListForBoth();
}

function RenderListForBoth() {
  locations.forEach((property, index) => {
    const {
      _id,
      title,
      type,
      location,
      roomNumbers,
      bathRoomNumbers,
      rent,
      photoUrl,
      coverImage,
      availableDate,
    } = property;

    IDArray.push(_id);

    const isRentOProperty = Boolean(property.images);

    const swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");

    if (isRentOProperty) {
      const locationData = JSON.parse(location);
      const { longitude, latitude, city, province } = locationData;

      markerCoordinates.push([parseFloat(longitude), parseFloat(latitude)]);

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

      const imageDiv = document.createElement("div");
      imageDiv.classList.add("image-div");
      imageDiv.style.height = "55%";

      const verifiedLabel = document.createElement("div");
      verifiedLabel.classList.add("verified-label");
      verifiedLabel.style.position = "absolute";
      verifiedLabel.style.top = "15px";
      verifiedLabel.style.left = "25px";
      verifiedLabel.style.fontFamily = "Mulish";
      verifiedLabel.style.padding = "10px";
      verifiedLabel.style.borderRadius = "20px";
      verifiedLabel.style.backgroundColor = "#36827F";
      verifiedLabel.style.color = "white";

      const checkMarkCircle = document.createElement("div");
      checkMarkCircle.style.backgroundColor = "white";
      checkMarkCircle.style.width = "20px";
      checkMarkCircle.style.height = "20px";
      checkMarkCircle.style.borderRadius = "50%";
      checkMarkCircle.style.display = "inline-block";
      checkMarkCircle.style.marginRight = "5px";
      checkMarkCircle.style.textAlign = "center";
      checkMarkCircle.style.lineHeight = "20px";

      const checkMarkIcon = document.createElement("i");
      checkMarkIcon.classList.add("fa", "fa-check");
      checkMarkIcon.style.color = "#36827F";

      checkMarkCircle.appendChild(checkMarkIcon);

      verifiedLabel.appendChild(checkMarkCircle);

      verifiedLabel.innerHTML += " Verified";

      imageDiv.appendChild(verifiedLabel);

      imageDiv.style.backgroundImage = `url(${coverImage[0]})`;

      imageDiv.style.backgroundSize = "cover";

      imageDiv.style.backgroundPosition = "center";

      const detailsPanel = document.createElement("div");
      detailsPanel.classList.add("details-panel");
      detailsPanel.style.height = "45%";

      detailsPanel.innerHTML = `
    <div class="left-column">
    <div class="detail rent"><span class="rent">$${rent}</span></div>
    <div class="detail location"><span class="location">${city}, ${province}</span></div>
    <div class="detail rooms"><span class="roomNumbers">${roomNumbers} bd</span> | <span class="bathRoomNumbers">${bathRoomNumbers} ba</span></div>
    </div>
    <div class="right-column">
    <i class="far fa-heart"></i>
    <div class="detail time">${
      availableDate ? daysDifference + " days ago" : "0 day"
    }</div>
    </div>
    `;
      swiperSlide.appendChild(imageDiv);
      swiperSlide.appendChild(detailsPanel);
      swiperContainer.querySelector(".swiper-wrapper").appendChild(swiperSlide);
    } else {
      //Crag data-> slider
      const { link, metaData, body, imageList } = property;
      console.log("Crag Link=" + link);
      console.log("Crag meta=" + metaData.longitude);
      console.log("Crag imageList=" + imageList);

      //Get Rent
      const rentMatch = body.match(/Monthly Rent: \$([\d,.]+)/);
      let cargRent = 0;

      if (rentMatch && rentMatch[1]) {
        const rentString = rentMatch[1];
        cargRent = parseFloat(rentString.replace(/,/g, ""));
      } else {
        cargRent = "N/A";
      }

      console.log("current index=" + index + ", and rent =" + cargRent);
      locations[index].rent = cargRent;

      markerCoordinates.push([
        parseFloat(metaData.longitude),
        parseFloat(metaData.latitude),
      ]);

      const imageDiv = document.createElement("div");
      imageDiv.classList.add("image-div");
      imageDiv.style.height = "55%";
      imageDiv.style.backgroundImage = `url(${imageList})`;
      imageDiv.style.backgroundSize = "cover";
      imageDiv.style.backgroundPosition = "center";

      const detailsPanel = document.createElement("div");
      detailsPanel.classList.add("details-panel");
      detailsPanel.style.height = "45%";

      detailsPanel.innerHTML = `
    <div class="left-column">
    <div class="detail rent"><span class="rent">${cargRent}</span></div>
    <div class="detail location"><span class="location">${metaData.address.addressLocality}, ${metaData.address.addressCountry}</span></div>
    <div class="detail link"><a href="${link}" target="_blank">Link to Craigslist</a></div>
    </div>
    <div class="right-column">
    <i class="far fa-heart"></i>
    </div>
    `;
      swiperSlide.appendChild(imageDiv);
      swiperSlide.appendChild(detailsPanel);
      swiperContainer.querySelector(".swiper-wrapper").appendChild(swiperSlide);
    }
  });
}

async function initializeApp() {
  try {
    await fetchDataFromBothAPIs();
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

function updateNormalMarkersRentText() {
  markerInstances.forEach(function (marker, index) {
    var rentValue = locations[index].rent;
    var rentText;

    if (rentValue < 100) {
      rentText = "$";
    } else if (rentValue >= 100 && rentValue <= 1000) {
      rentText = "$$";
    } else if (rentValue > 1000) {
      rentText = "$$$";
    } else {
      rentText = "(N/A)";
    }

    var messageBody = marker.getElement().querySelector(".message-body");

    // Only update the text if the marker has the .marker-normal class
    if (marker.getElement().classList.contains("marker-normal")) {
      console.log("normal marker detected");
      messageBody.textContent = rentText;
    }
  });
}

var messageBodies = [];
function initMarkers() {
  // Array to store marker instances
  markerCoordinates.forEach(function (coord, index) {
    var markerElement = document.createElement("div");
    markerElement.className = "marker-icon";

    var rentText;
    var rentValue = locations[index].rent;

    if (rentValue < 100) {
      rentText = "$";
    } else if (rentValue >= 100 && rentValue <= 1000) {
      rentText = "$$";
    } else if (rentValue > 1000) {
      rentText = "$$$";
    } else {
      rentText = "(N/A)";
    }

    var messageIcon = document.createElement("div");
    messageIcon.className = "message-icon";

    var messageBody = document.createElement("div");
    messageBody.className = "message-body";
    messageBody.textContent = rentText;
    messageBodies.push(messageBody);

    var messageTail = document.createElement("div");
    messageTail.className = "message-tail";

    messageIcon.appendChild(messageBody);
    messageIcon.appendChild(messageTail);

    markerElement.appendChild(messageIcon);

    var marker = new tt.Marker({ element: markerElement }).setLngLat(coord);
    marker.getElement().classList.add("marker-normal");
    //   marker.getElement().classList.add("marker-active");

    markerInstances.push(marker);

    // Focus on the default marker
    if (index === 0) {
      map.setCenter(coord);
    }

    marker.getElement().addEventListener("click", () => {
      // Clear all status
      deactivateMarkers();

      marker.getElement().classList.remove("marker-normal");
      marker.getElement().classList.add("marker-active");

      marker.togglePopup();

      map.easeTo({
        center: coord,
      });

      updateNormalMarkersRentText();

      // Update the messageBody.textContent of the current marker with the rent value
      var rentValue = locations[index].rent;
      if (typeof rentValue !== "undefined") {
        messageBody.textContent = "$" + rentValue;
      } else {
        messageBody.textContent = "N/A";
      }

      // Sync with swiper
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

  updateNormalMarkersRentText();

  //update the rate
  var rentValue = locations[activeIndex].rent;
  console.log("current swiper's rent=" + rentValue);
  var messageBody = activeMarker.getElement().querySelector(".message-body");
  messageBody.textContent = "$" + rentValue;

  map.easeTo({
    center: activeCoord,
  });
});

swiper.on("click", function () {
  let activeIndex = swiper.activeIndex;
  console.log("Swiper " + activeIndex + " is clicked");

  // this is sentind the data
  // window.ReactNativeWebView.postMessage(activeIndex);
  // window.addEventListener("message", (message) => {
  // alert(check);
  // });

  let clickedId = IDArray[activeIndex];
  //console.log("Clicked ID=" + clickedId);

  let activeMarker = markerInstances[activeIndex];
  var rentValue = locations[activeIndex].rent;
  var messageBody = activeMarker.getElement().querySelector(".message-body");
  messageBody.textContent = "$" + rentValue;

  //console.log("activeMarker="+activeMarker)
  let activeCoord = activeMarker.getLngLat();
  deactivateMarkers();
  activeMarker.getElement().classList.remove("marker-normal");
  activeMarker.getElement().classList.add("marker-active");
  activeMarker.togglePopup();

  map.easeTo({
    center: activeCoord,
  });

  // Post the ID to the parent window
  window.ReactNativeWebView.postMessage(clickedId);
});

const clickableElement = document.getElementById("map");
clickableElement.addEventListener("click", () => {
  console.log("map element clicked");

  window.postMessage("Hello");
  console.log("Message sent to native code");
});
