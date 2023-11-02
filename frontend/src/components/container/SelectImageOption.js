import React from "react";
import { View, Text } from "react-native";
import { imageUploadOptions } from "../static/RoomImages";
import List from "../list/List";
import { Card } from "@rneui/base";
const SelectImageOption = ({ navigation, route }) => {
  const data = route.params;
  const selectedItems = (value) => {
    console.log("data from select:" + JSON.stringify(data));
    if (value == "Gallery") navigation.navigate("image_select", data);
    if (value == "Camera") navigation.navigate("camera_select");
  };
  return (
    <View>
      <Card>
        <Text>Hold your phone upright in portrait mode for all pictures</Text>
        <Text>
          Begin by capturing one picture each of four walls followed by one
          picture of ceiling and one picture of the floor
        </Text>
      </Card>
      <List
        numColumns={imageUploadOptions.uploadOptions.length / 2}
        items={imageUploadOptions.uploadOptions}
        selectedItems={selectedItems}
      ></List>
    </View>
  );
};

export default SelectImageOption;
