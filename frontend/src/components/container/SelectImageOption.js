import React from "react";
import { imageUploadOptions } from "../static/RoomImages";
import List from "../list/List";
const SelectImageOption = ({ navigation, route }) => {
  const data = route.params;
  const selectedItems = (value) => {
    console.log("data from select:" + JSON.stringify(data));
    if (value == "Gallery") navigation.navigate("image_select", data);
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
