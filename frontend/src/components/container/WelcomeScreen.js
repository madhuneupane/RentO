import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import ButtonUI from "../UI/button/ButtonUI";
import { InputUI } from "../UI/input/InputUI";
import { rentorCredentials } from "../static/constants";
const WelcomeScreen = ({ navigation }) => {

  const showListView = () => {
    navigation.navigate("rentor");
  };
  const logo = require("../../../assets/favicon.png");
  // remove back button
  var [isSubmitPress, setIsSubmitPress] = useState(false);

  var touchPropsSubmit = {
    underlayColor: "#B1D4D2",
    style: isSubmitPress ? styles.submitButtonClicked : styles.submitButton,
    onHideUnderlay: () => setIsSubmitPress(false),
    onShowUnderlay: () => setIsSubmitPress(true),
  };
  const saveCity = (value, type) => {};
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.image}></Image>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Search your city</Text>
      </View>
      <InputUI
        placeholder=" search city"
        coustomStyle={styles}
        selectedItems={saveCity}
      />
      <ButtonUI
        item={{ value: "Show" }}
        customStyle={styles.customStyle}
        selectedItems={showListView}
        touchProps={touchPropsSubmit}
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: "10%",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  container: {
    height: "70%",
    justifyContent: "center",
    // margin: 10,
    padding: 10,
    backgroundColor: "white",
  },
  subContainer: {
    alignItems: "center",
  },
  textInput: {
    fontSize: 20,
    height: 30,
    width: "90%",
    borderRadius: 15,
    textAlign: "justify",
    height: 50,
  },
  button: {
    borderWidth: 1.5,
    borderRadius: 15,
    fontSize: 20,
    textAlign: "center",
    marginTop: 30,
    height: 35,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "20",
  },
  textContainer: {
    // margin: 30,
    height: "20%",
    justifyContent: "center",
  },
  title: {
    fontWeight: 300,
    fontSize: 25,
    marginLeft: 10,
    fontSize: 20,
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: "#36827F",
    // borderWidth: 1,
    borderColor: "#36827F",
    height: "20%",
    width: "80%",
    marginLeft: 40,
    marginTop: "20%",
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  submitButtonClicked: {
    borderColor: "#B1D4D2",
    height: "20%",
    width: "80%",
    marginLeft: 40,
    marginTop: "20%",
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  buttonContainer: {
    marginTop: 50,
  },
  customStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    borderColor: "#5C5D8D",
  },
});
