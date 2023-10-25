import React from "react";
import { imageUploadOptions } from "../static/RoomImages";
import List from "../list/List";
const SelectImageOption = ({ navigation }) => {
  const selectedItems = (value) => {
    if (value == "Gallery") navigation.navigate("image_select");
    if (value == "Camera") navigation.navigate("camera_select");
  };
  return (
    <List
      numColumns={imageUploadOptions.uploadOptions.length / 2}
      items={imageUploadOptions.uploadOptions}
      selectedItems={selectedItems}
    ></List>
  );
};

export default SelectImageOption;
