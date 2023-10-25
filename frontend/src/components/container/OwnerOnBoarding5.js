import React from "react";
import List from "../list/List";
import { roomsImages } from "../static/RoomImages";
const OwnerOnBoarding5 = ({ navigation }) => {
  const selectedItems = () => {
    navigation.navigate("upload_options");
  };
  return (
    <List
      numColumns={roomsImages.rooms.length / 5}
      items={roomsImages.rooms}
      selectedItems={selectedItems}
    ></List>
  );
};

export default OwnerOnBoarding5;
