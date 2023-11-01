import React from "react";

const AmenitiesReducer = (state, action) => {
  console.log("type:" + action.value);
  switch (action.value) {
    case "Wi-fi":
      return { ...state, wifi: true };
    case "Heating":
      return { ...state, heating: true };
    case "Air Conditioning":
      return { ...state, air_conditioning: true };
    case "parking":
      return { ...state, parking: true };
    case "Washer/Dryer":
      return { ...state, washer_dryer: true };
    case "Pet friendly":
      return { ...state, petfriendly: true };
  }
};

export default AmenitiesReducer;
