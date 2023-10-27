import React from "react";

const AmenitiesReducer = (state, action) => {
  console.log("type:" + action.value);
  switch (action.value) {
    case "wifi":
      return { ...state, wifi: true };
    case "heating":
      return { ...state, heating: true };
    case "air_conditioning":
      return { ...state, air_conditioning: true };
    case "parking":
      return { ...state, parking: true };
    case "washer_dryer":
      return { ...state, washer_dryer: true };
    case "petfriendly":
      return { ...state, petfriendly: true };
  }
};

export default AmenitiesReducer;
