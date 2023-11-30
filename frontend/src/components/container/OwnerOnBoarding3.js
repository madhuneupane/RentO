import { View, StyleSheet, Text } from "react-native";
import { InputUI } from "../UI/input/InputUI";
import ButtonUI from "../UI/button/ButtonUI";
import { CheckBox } from "@rneui/themed";
import { useState } from "react";
import { WebView } from "react-native-webview";
import RentoBack from "../../../assets/rentoBack.svg";

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
          customStyle={
            isSubmitPress
              ? { ...styles.customStyle, color: "#02696A" }
              : styles.customStyle
          }
          touchProps={touchPropsSubmit}
        />
      </View>
      <View style={styles.progressBar}>
        <View style={styles.progressBarGreen}></View>
      </View>
      <RentoBack
        width={540}
        height={820}
        marginTop={-350}
        marginLeft={-30}
        opacity={0.2}
      />
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
    marginTop: 42,
    marginLeft: 65,
  },
  progressBarGreen: {
    backgroundColor: "#3B6665",
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
    margin: 10,
    height: "8%",
    justifyContent: "center",
  },
  webviewContainer: {
    height: 480,
  },
  webview: {
    height: 480,
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
  customStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Mulish_400Regular",
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
  },
  buttonContainer: {
    marginTop: 0,
  },
});
