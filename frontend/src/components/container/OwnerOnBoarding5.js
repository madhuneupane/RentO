import React, { useEffect, useState } from "react";
import List from "../list/List";
import { roomsImages } from "../static/RoomImages";
import Postdata from "../hooks/postdata";
import ButtonUI from "../UI/button/ButtonUI";
import { Text, View, StyleSheet } from "react-native";
import RentoBack from "../../../assets/rentoBack.svg";

const OwnerOnBoarding5 = ({ navigation, route }) => {
  const data = route.params;
  const [loading, setLoading] = useState(false);
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
    underlayColor: "#B1D4D2",
    style: isSubmitPress ? styles.submitButtonClicked : styles.submitButton,
    onHideUnderlay: () => setIsSubmitPress(false),
    onShowUnderlay: () => setIsSubmitPress(true),
  };
  // Postdata(data, setResponse, setLoading);
  submitData = () => {
    // console.log("res::" + response);
    // navigation.navigate("ower_new_post", response);
    navigation.navigate("cover_images", data);
  };
  return (
    <View style={styles.container}>
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
          item={{ value: "+ Add a Room" }}
          selectedItems={submitData}
          touchProps={touchPropsSubmit}
          customStyle={
            isSubmitPress
              ? { ...styles.customStyle, color: "#02696A" }
              : styles.customStyleSubmit
          }
        ></ButtonUI>
      </View>
      <View style={styles.progressBar}>
        <View style={styles.progressBarGreen}></View>
        <RentoBack
          style={{ zIndex: -1 }}
          width={840}
          height={910}
          marginTop={-350}
          marginLeft={-555}
          opacity={0.7}
        />
      </View>
    </View>
  );
};

export default OwnerOnBoarding5;
var styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  customStyle: {
    color: "#413855",
    fontSize: 18,
    fontFamily: "Mulish_400Regular",
  },
  customStyleSubmit: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "Mulish_700Bold",
  },
  btnNormal: {
    color: "#413855",
    borderColor: "#3B6665",
    height: "50",
    width: "90%",
    marginLeft: 20,
    marginTop: 15,
    padding: 8,
    borderWidth: 0.5,
    borderRadius: 35,
  },
  btnPress: {
    color: "#413855",
    borderColor: "#3B6665",
    height: "50",
    width: "90%",
    marginLeft: 20,
    marginTop: 15,
    padding: 8,
    borderWidth: 0.5,
    borderRadius: 35,
  },
  textContainer: {
    margin: 5,
    height: "20%",
    justifyContent: "center",
  },
  listContainer: {
    // marginTop: ,
  },
  title: {
    width: "90%",
    marginLeft: 20,
    marginTop: 20,
    color: "#413855",
    //marginLeft: 10,
    fontSize: 19,
    textAlign: "center",
    fontFamily: "Mulish_700Bold",
  },
  submitButton: {
    backgroundColor: "#3B6665",
    borderColor: "#3B6665",
    height: "30",
    width: "80%",
    marginLeft: 40,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  submitButtonClicked: {
    borderColor: "#3B6665",
    height: "30",
    width: "80%",
    marginLeft: 40,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  submitContainer: {
    marginTop: 35,
    backgroundColor: "white",
  },
  textContainer: {
    margin: 2,
    height: "20%",
    justifyContent: "center",
    backgroundColor: "white",
  },
  progressBar: {
    borderColor: "#3B6665",
    height: 10,
    width: "80%",
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: "#3B6665",
    //marginTop: 50,
    marginLeft: 50,
    position: "absolute",
    bottom: -87,
  },
  progressBarGreen: {
    borderWidth: 2,
    borderColor: "#3B6665",
    backgroundColor: "#B1D4D2",
    height: 10,
    width: 220,
    borderRadius: 20,
  },
});
