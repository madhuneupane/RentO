import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { imageUploadOptions } from "../static/RoomImages";
import List from "../list/List";
import { Card } from "@rneui/themed";
import ButtonUI from "../UI/button/ButtonUI";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const SelectImageOption = ({ navigation, route }) => {
  const data = route.params;
  const selectedItems = (value) => {
    console.log("data from select:" + JSON.stringify(data));
    if (value == "Upload from Gallery") navigation.navigate("image_select", data);
    if (value == "Take a photo") navigation.navigate("camera_select", data);
  };
  var [isSubmitPress, setIsSubmitPress] = useState(false);
  var [isCameraPress, setIsCamerasPress] = useState(false);

  var touchPropsSubmit = {
    underlayColor: "#B1D4D2",
    style: isSubmitPress ? styles.submitButtonClicked : styles.submitButton,
    onHideUnderlay: () => setIsSubmitPress(false),
    onShowUnderlay: () => setIsSubmitPress(true),
  };
  var touchPropsCamera = {
    underlayColor: "#FBEDEA",
    style: isCameraPress ? styles.CameraButtonClicked : styles.CameraButton,
    onHideUnderlay: () => setIsCamerasPress(false),
    onShowUnderlay: () => setIsCamerasPress(true),
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.bulb}>
          <MaterialCommunityIcons
            name={"lightbulb-on"}
            size={35}
            color={"#ED7861"}
          />
        </View>
        <Text style={styles.text1}>
          Hold your phone upright in portrait mode for all pictures
        </Text>
        <Text style={styles.text2}>
          Hold your phone upright in portrait mode for all pictures. Begin by
          capturing one picture each of four walls followed by one picture of
          ceiling and one picture of the floor
        </Text>
      </View>
      <ButtonUI
        // numColumns={imageUploadOptions.uploadOptions.length / 2}
        item={{ value: "Upload from Gallery" }}
        selectedItems={selectedItems}
        customStyle={styles.customStyle}
        touchProps={touchPropsSubmit}
      ></ButtonUI>
      <ButtonUI
        // numColumns={imageUploadOptions.uploadOptions.length / 2}
        item={{ value: "Take a photo" }}
        selectedItems={selectedItems}
        customStyle={styles.customStyleCamera}
        touchProps={touchPropsCamera}
      ></ButtonUI>
    </View>
  );
};

export default SelectImageOption;
var styles = StyleSheet.create({
  container: {
    backgroundColor: "#413855",
    height: "100%",
  },
  card: {
    margin: 20,
    backgroundColor: "white",
    height: "60%",
    // width: "50%",
    // alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  bulb: {
    position: "absolute",
    top: 40,
    left: 155,
  },
  text1: {
    textAlign: "center",
    fontWeight: "300",
    fontSize: 18,
    color: "#413855",
    backgroundColor: "#E9E7EE",
    margin:15,
    padding:15,
    fontFamily: "Mulish_400Regular"
  },
  text2: {
    textAlign: "center",
    fontWeight: "300",
    fontSize: 18,
    color: "#413855",
    backgroundColor: "#E9E7EE",
    margin:15,
    padding:15,
    fontFamily: "Mulish_400Regular"
  },
  customStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Mulish_700Bold"
  },
  customStyleCamera: {
    color: "#413855",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Mulish_700Bold"
  },
  submitButton: {
    backgroundColor: "#3B6665",
    borderColor: "#3B6665",
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  submitButtonClicked: {
    backgroundColor: "#B1D4D2",
    borderColor: "#B1D4D2",
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  CameraButton: {
    backgroundColor: "#ED7861",
    borderColor: "#ED7861",
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  CameraButtonClicked: {
    backgroundColor: "#FBEDEA",
    borderColor: "#ED7861",
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
});
