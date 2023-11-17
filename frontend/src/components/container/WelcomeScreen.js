import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import ButtonUI from "../UI/button/ButtonUI";
import { InputUI } from "../UI/input/InputUI";
import { rentorCredentials } from "../static/constants";
import { WebView } from "react-native-webview";

const WelcomeScreen = ({ navigation }) => {

  const [parsedAddress, setParsedAddress] = useState({
    address: "N/A",
    city: "N/A",
    province: "N/A",
    country: "N/A",
    postalcode: "N/A",
    longitude: "N/A",
    latitude: "N/A",
  });

  const showListView = () => {
    navigation.navigate("rentor");
  };
  const logo = require("../../../assets/login-screen-logo.png");
  // remove back button
  var [isSubmitPress, setIsSubmitPress] = useState(false);

  const url = `http://127.0.0.1:5500/SearchWebview/index.html`;

  function onMessage(data) {
    const addressData = JSON.parse(data.nativeEvent.data);

    const parsedAddress = {
      address: `${addressData.address.streetNumber || "N/A"} ${
        addressData.address.streetName || "N/A"
      }`,
      city: addressData.address.municipality || "N/A",
      province: addressData.address.countrySubdivision || "N/A",
      country: addressData.address.countryCode || "N/A",
      postalcode: addressData.address.postalCode || "N/A",
      longitude: addressData.position.lng || "N/A",
      latitude: addressData.position.lat || "N/A",
    };

    console.log(parsedAddress);
    // setParsedAddress(parsedAddress);
    //setOnBoardData({ ...route.params, address: parsedAddress });

    //TODO
    //navigation.navigate("owner_onboarding4", onBoardData);
  }

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
        <Image source={logo} style={styles.image} resizeMode="contain"></Image>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>What’s your address?</Text>
      </View>
      <View style={styles.webviewContainer}>
        <WebView
          source={{ uri: url }}
          javaScriptEnabled={true}
          onError={(error) => {
            console.error("WebView Error:", error);
          }}
          onMessage={onMessage}
          style={styles.webview}
        />
      </View>
      {/* <InputUI
        style={styles.input}
        placeholder="  Search by location  "
        coustomStyle={styles}
        selectedItems={saveCity}
      /> */}
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
    // marginTop: "5%",
    alignItems: "center",
    // backgroundColor: "pink",
    height: "10%",
  },
  image: {
    marginTop: 3,
    width: "30%",
    height: "90%",
  },
  container: {
    height: "100%",
    justifyContent: "center",
    // margin: 10,
    padding: 0,
    backgroundColor: "white",
  },
  subContainer: {
    alignItems: "center",
  },
  textInput: {
    fontSize: 20,
    height: 30,
    width: "90%",
    borderRadius: 30,
    textAlign: "justify",
    height: 50,
    paddingLeft: 20,
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
    height: "10%",
    justifyContent: "center",
  },
  webviewContainer: {
    height: 300,
  },
  webview: {
    height: 300,
  },
  title: {
    fontWeight: 300,
    fontSize: 25,
    marginLeft: 10,
    fontSize: 20,
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: "#3B6665",
    // borderWidth: 1,
    borderColor: "#3B6665",
    height: "10%",
    width: "80%",
    marginLeft: 40,
    marginTop: "30%",
    padding: 5,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  submitButtonClicked: {
    borderColor: "#B1D4D2",
    height: "10%",
    width: "80%",
    marginLeft: 40,
    marginTop: "30%",
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
