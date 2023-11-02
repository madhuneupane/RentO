import React from "react";

const ImageReducer = (images, action) => {
  // console.log("action:" + action.type);
  // console.log("action value:" + action.value);

  switch (action.type) {
    case "image1":
      return { ...images, image1: action.value };
    case "image2":
      return { ...images, image2: action.value };
    case "image3":
      return { ...images, image3: action.value };
    case "image4":
      return { ...images, image4: action.value };
    case "image5":
      return { ...images, image5: action.value };
    case "image6":
      return { ...images, image6: action.value };
    default:
      return images;
  }
};

export default ImageReducer;
