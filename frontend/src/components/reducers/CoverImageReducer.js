import React from "react";

const CoverImageReducer = (images, action) => {
  // console.log("action:" + action.type);
  // console.log("action value:" + action.value);
  return [...images, action.value];
  // switch (action.type) {
  //   case "image1":
  //     return [...images,action.value ];
  //   case "image2":
  //     return [...images,action.value];
  //   case "image3":
  //     return { ...images, image3: action.value };
  //   case "image4":
  //     return { ...images, image4: action.value };
  //   default:
  //     return images;
  // }
};

export default CoverImageReducer;
