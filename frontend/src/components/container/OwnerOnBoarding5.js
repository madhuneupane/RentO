import React, { useEffect } from "react";
import List from "../list/List";
import { roomsImages } from "../static/RoomImages";
import Postdata from "../hooks/postdata";
const OwnerOnBoarding5 = ({ navigation, route }) => {
  const data = route.params;
  console.log("on5:" + JSON.stringify(data));
  const selectedItems = () => {
    navigation.navigate("upload_options", data);
  };

  if (data.imageUploaded) {
    console.log("data.ownerData :" + data.ownerData);
    console.log("data.imageUploaded :" + data.imageUploaded);
    Postdata(data.ownerData);
  }

  return (
    <List
      numColumns={roomsImages.rooms.length / 5}
      items={roomsImages.rooms}
      selectedItems={selectedItems}
    ></List>
  );
};

export default OwnerOnBoarding5;
