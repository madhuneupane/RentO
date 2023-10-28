import React, { useEffect, useState } from "react";
import List from "../list/List";
import { roomsImages } from "../static/RoomImages";
import Postdata from "../hooks/postdata";
import ButtonUI from "../UI/button/ButtonUI";
const OwnerOnBoarding5 = ({ navigation, route }) => {
  const data = route.params;
  const [response, setResponse] = useState();
  const [check, setCheck] = useState();
  // console.log("on5:" + JSON.stringify(data));
  const selectedItems = () => {
    setCheck(true);
    navigation.navigate("upload_options", data);
  };

  Postdata(data, setResponse);
  submitData = () => {
    console.log("res::" + response);
    navigation.navigate("ower_new_post", response);
  };
  return (
    <>
      <ButtonUI
        item={{ value: "Living Area" }}
        selectedItems={selectedItems}
        check={data.imageUploaded ? check : false}
      ></ButtonUI>
      <List
        numColumns={roomsImages.rooms.length / 5}
        items={roomsImages.rooms}
        selectedItems={selectedItems}
      ></List>
      <ButtonUI
        item={{ value: "submit" }}
        selectedItems={submitData}
      ></ButtonUI>
    </>
  );
};

export default OwnerOnBoarding5;
