import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import addUser from "../hooks/addUser";
import ButtonUI from "../UI/button/ButtonUI";
import LottieView from "lottie-react-native";

const SignUp3 = ({ navigation, route }) => {
  const userValues = route.params;
  var [isSubmitPress, setIsSubmitPress] = useState(false);
  const saveData = () => {
    navigation.navigate("login_rentor");
  };
  addUser(userValues);
  var touchPropsSubmit = {
    underlayColor: "#B1D4D2",
    style: isSubmitPress ? styles.submitButtonClicked : styles.submitButton,
    onHideUnderlay: () => setIsSubmitPress(false),
    onShowUnderlay: () => setIsSubmitPress(true),
  };
  console.log("userValues:" + JSON.stringify(userValues));
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={{
          width: "100%",
          height: "75%",
          backgroundColor: "white",
          // marginLeft: 10,
        }}
        source={require("../../../assets/hello.json")}
        // source={{
        //   uri: "https://lottie.host/06d1c1df-eda1-47ab-aa01-385125607c54/o1lzwIUBD8.json",
        // }}
      />
      <View style={styles.buttonContainer}>
        <ButtonUI
          item={{ value: "Continue" }}
          selectedItems={saveData}
          customStyle={styles.customStyle}
          touchProps={touchPropsSubmit}
        />
      </View>
    </View>
  );
};

export default SignUp3;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  submitButton: {
    backgroundColor: "#36827F",
    borderColor: "#36827F",
    height: "30",
    width: "80%",
    marginLeft: 40,
    // marginTop: 10,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  submitButtonClicked: {
    borderColor: "#B1D4D2",
    height: "30",
    width: "80%",
    marginLeft: 40,
    // marginTop: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  customStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
