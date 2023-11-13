import React from "react";

const CoverImageReducer = (images, action) => {
  // console.log("action:" + action.type);
  // console.log("action value:" + action.value);

  switch (action.type) {
    case "image1":
      return { ...images, image1: action.value };
    case "image2":
      return { ...images, image2: action.value };
    case "image3":
      return { ...images, image3: action.value };
    default:
      return images;
  }
};

export default CoverImageReducer;
