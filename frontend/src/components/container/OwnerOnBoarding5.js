import React, { useEffect, useState } from "react";
import List from "../list/List";
import { roomsImages } from "../static/RoomImages";
import Postdata from "../hooks/postdata";
import ButtonUI from "../UI/button/ButtonUI";
import { Text, View, StyleSheet } from "react-native";

const OwnerOnBoarding5 = ({ navigation, route }) => {
  const data = route.params;
  const [response, setResponse] = useState();
  const [check, setCheck] = useState();
  var [isSubmitPress, setIsSubmitPress] = useState(false);
  const selectedItems = () => {
    setCheck(true);
    navigation.navigate("upload_options", data);
  };
  var [isPress, setIsPress] = useState(false);
  var touchProps = {
    activeOpacity: 1,
    underlayColor: "#B1D4D2", // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    // onPress: () => console.log("HELLO"), // <-- "onPress" is apparently required
  };
  var touchPropsSubmit = {
    underlayColor: "#ffffff00",
    style: isSubmitPress ? styles.submitButtonClicked : styles.submitButton,
    onHideUnderlay: () => setIsSubmitPress(false),
    onShowUnderlay: () => setIsSubmitPress(true),
  };
  Postdata(data, setResponse);
  submitData = () => {
    console.log("res::" + response);
    navigation.navigate("ower_new_post", response);
  };
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Time to showcase your property with 360 panoramic pictures!
        </Text>
      </View>
      <ButtonUI
        item={{ value: "Living Area" }}
        selectedItems={selectedItems}
        check={data.imageUploaded ? check : false}
        touchProps={touchProps}
        customStyle={styles.customStyle}
      ></ButtonUI>
      <List
        numColumns={roomsImages.rooms.length / 5}
        items={roomsImages.rooms}
        selectedItems={selectedItems}
        touchProps={touchProps}
        customStyle={styles.customStyle}
      ></List>
      <View style={styles.submitContainer}>
        <ButtonUI
          item={{ value: "submit" }}
          selectedItems={submitData}
          touchProps={touchPropsSubmit}
          customStyle={styles.customStyleSubmit}
        ></ButtonUI>
      </View>
    </View>
  );
};

export default OwnerOnBoarding5;
var styles = StyleSheet.create({
  customStyle: {
    color: "#413855",
    fontSize: 15,
  },
  customStyleSubmit: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  btnNormal: {
    borderColor: "#36827F",
    // borderWidth: 1,
    // backgroundColor: "#FBEDEA",
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 25,
  },
  btnPress: {
    borderColor: "#36827F",
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 25,
  },
  textContainer: {
    margin: 5,
    height: "20%",
    justifyContent: "center",
    // backgroundColor: "pink",
  },
  listContainer: {
    // marginTop: ,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 10,
    fontSize: 20,
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: "#36827F",
    borderColor: "#36827F",

    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 2,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 30,
  },
  submitButtonClicked: {
    // backgroundColor: "#36827F",
    // borderWidth: 1,
    borderColor: "#36827F",
    height: 50,
    width: "80%",
    marginLeft: 40,
    marginTop: 2,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 30,
  },
  submitContainer: {
    marginTop: 20,
    // backgroundColor: 20,
  },
});
