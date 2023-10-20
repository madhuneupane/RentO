//Init Data
import config from "./web_config.js";
// import "./dotenv/config";
//require("dotenv").config();

tt.setProductInfo("RentO_Map", "0.5");
const locations = [];
const markerCoordinates = [];
var markerInstances = [];

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
  zoom: 10,
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
  const url = "http://localhost:3000/locations";
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (Array.isArray(data)) {
        locations.push(...data);
      } else if (Array.isArray(data.locations)) {
        locations.push(...data.locations);
      } else {
        throw new Error('Invalid data format: No "locations" array found.');
      }
      //console.log('Locations data loaded:', locations);
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
  locations.forEach((location, index) => {
    console.log("getting locations");
    // Extract the coordinates from each location
    const [longitude, latitude] = location.coordinates;

    // Add the coordinates to the markerCoordinates array
    markerCoordinates.push([longitude, latitude]);

    const { price, city, bedrooms, bathrooms, area } = location;

    const swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");

    const detailsPanel = document.createElement("div");
    detailsPanel.classList.add("details-panel");

    detailsPanel.innerHTML = `
     <div class="detail">Price: <span class="price">${price}</span></div>
     <div class="detail">City: <span class="city">${city}</span></div>
     <div class="detail">Bedrooms: <span class="bedrooms">${bedrooms}</span></div>
     <div class="detail">Bathrooms: <span class="bathrooms">${bathrooms}</span></div>
     <div class="detail">Area: <span class="area">${area}</span> sq ft</div>
 `;
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

swiper.on("click", function () {
  let activeIndex = swiper.activeIndex;
  console.log("Swiper " + activeIndex + " is clicked");
  window.postMessage("Hello");
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
  console.log("map element clicked"); // Debugging statement
  // Send a message to the native code when clicked
  window.postMessage("Hello");
  console.log("Message sent to native code"); // Debugging statement
});
