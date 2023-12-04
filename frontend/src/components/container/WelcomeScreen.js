import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import ButtonUI from "../UI/button/ButtonUI";
import { InputUI } from "../UI/input/InputUI";
import { rentorCredentials } from "../static/constants";
import { WebView } from "react-native-webview";
import RentoBack from "../../../assets/rentoBack.svg";

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
      <ButtonUI
        item={{ value: "Show" }}
        customStyle={
          isSubmitPress
            ? { ...styles.customStyle, color: "#02696A" }
            : styles.customStyle
        }
        selectedItems={showListView}
        touchProps={touchPropsSubmit}
      />
      <RentoBack
        style={{ zIndex: -1 }}
        width={460}
        height={290}
        marginTop={-40}
        marginLeft={-1}
        opacity={0.7}
      />
      {/* <InputUI
        style={styles.input}
        placeholder="  Search by location  "
        coustomStyle={styles}
        selectedItems={saveCity}
      /> */}
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  imageContainer: {
    // marginTop: "15%",
    alignItems: "center",
    // marginTop: -10,
    // backgroundColor: "pink",
    height: "15%",
  },
  image: {
    marginTop: 8,
    width: "35%",
    height: "95%",
  },
  container: {
    height: "95%",
    justifyContent: "center",
    marginTop: 100,
    padding: 10,
    backgroundColor: "white",
  },
  subContainer: {
    alignItems: "center",
    height: 70,
  },
  textInput: {
    fontSize: 18,
    height: 30,
    width: "87%",
    borderRadius: 24,
    textAlign: "justify",
    height: 50,
    color: "#5C5D8D",
    //marginTop: 10,
    paddingLeft: 15,
    fontFamily: "Mulish_400Regular",
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
    fontSize: 20,
    fontFamily: "Mulish_400Regular",
  },
  textContainer: {
    marginTop: -10,
    height: "12%",
    justifyContent: "center",
  },
  webviewContainer: {
    marginTop: -30,
    height: 400,
  },
  webview: {
    height: 400,
  },
  title: {
    marginTop: "30",
    width: "70%",
    marginLeft: 60,
    fontSize: 22,
    color: "#413855",
    textAlign: "center",
    fontFamily: "Mulish_700Bold",
  },
  submitButton: {
    backgroundColor: "#3B6665",
    borderColor: "#3B6665",
    height: "50",
    width: "80%",
    marginLeft: 40,
    //marginTop: 5,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
    marginTop: 30,
  },
  submitButtonClicked: {
    backgroundColor: "#B1D4D2",
    borderColor: "#B1D4D2",
    height: "50",
    width: "80%",
    marginLeft: 40,
    //marginTop: 10,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
    marginTop: 30,
  },
  buttonContainer: {
    marginTop: 0,
  },
  customStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Mulish_400Regular",
    borderColor: "#5C5D8D",
  },
});
