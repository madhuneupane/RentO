import { View, StyleSheet, Text } from "react-native";
import { InputUI } from "../UI/input/InputUI";
import ButtonUI from "../UI/button/ButtonUI";
import { CheckBox } from "@rneui/themed";
import { useState } from "react";
import { WebView } from "react-native-webview";

const OwnerOnboarding3 = ({ navigation, route }) => {
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
    const location = JSON.stringify(parsedAddress);
    setOnBoardData({ ...route.params, address: location });
  }

  const [onBoardData, setOnBoardData] = useState(route.params);
  var [isSubmitPress, setIsSubmitPress] = useState(false);
  const [parsedAddress, setParsedAddress] = useState({
    address: "N/A",
    city: "N/A",
    province: "N/A",
    country: "N/A",
    postalcode: "N/A",
    longitude: "N/A",
    latitude: "N/A",
  });

  var touchPropsSubmit = {
    underlayColor: "#B1D4D2",
    style: isSubmitPress ? styles.submitButtonClicked : styles.submitButton,
    onHideUnderlay: () => setIsSubmitPress(false),
    onShowUnderlay: () => setIsSubmitPress(true),
  };
  const setData = (value, type) => {
    setOnBoardData({ ...route.params, address: value });
  };
  const navigateToNext = () => {
    console.log("on 3:" + JSON.stringify(onBoardData));
    navigation.navigate("owner_onboarding4", onBoardData);
  };

  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>What's the address?</Text>
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

      <View style={styles.buttonContainer}>
        <ButtonUI
          item={{ value: "Continue" }}
          selectedItems={navigateToNext}
          customStyle={styles.customStyle}
          touchProps={touchPropsSubmit}
        />
      </View>
      <View style={styles.progressBar}>
        <View style={styles.progressBarGreen}></View>
      </View>
    </View>
  );
};
export default OwnerOnboarding3;

const styles = StyleSheet.create({
  progressBar: {
    borderColor: "#B1D4D2",
    height: 10,
    width: "70%",
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: "#B1D4D2",
    // marginTop: 30,
    marginLeft: 55,
  },
  progressBarGreen: {
    backgroundColor: "#36827F",
    height: 10,
    width: 110,
    borderRadius: 20,
  },
  container: {
    height: "70%",
    justifyContent: "center",
    margin: 10,
    padding: 10,
  },
  subContainer: {
    alignItems: "center",
    height: 60,
    // backgroundColor: "pink",
  },
  textInput: {
    fontSize: 20,
    height: 30,
    width: "90%",
    borderRadius: 30,
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
    backgroundColor: "white",
    height: "10%",
    justifyContent: "center",
  },
  webviewContainer: {
    height: 500,
  },
  webview: {
    height: 500,
  },
  title: {
    fontWeight: 300,
    fontSize: 15,
    marginLeft: 10,
    fontSize: 20,
    textAlign: "center",
  },
  customStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  submitButton: {
    backgroundColor: "#36827F",
    borderColor: "#36827F",
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
  buttonContainer: {
    marginBottom: 120,
  },
});
