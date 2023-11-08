import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import ButtonUI from "../UI/button/ButtonUI";
const PostCreated = ({ navigation }) => {
  const done = () => {
    navigation.navigate("owner_welcome");
  };
  var [isSubmitPress, setIsSubmitPress] = useState(false);
  var touchPropsSubmit = {
    underlayColor: "#B1D4D2",
    style: isSubmitPress ? styles.submitButtonClicked : styles.submitButton,
    onHideUnderlay: () => setIsSubmitPress(false),
    onShowUnderlay: () => setIsSubmitPress(true),
  };
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={{
          // width: "0%",
          height: "80%",
          backgroundColor: "white",
          padding: 2,
          // marginRight: 40,
          // borderWidth: 1,
        }}
        source={require("../../../assets/done.json")}
        // source={{
        //   uri: "https://lottie.host/e8627ca1-c06e-4eb9-b515-27314dbe5739/P4kSJCFxoV.json",
        // }}
      />
      <View style={styles.buttonContainer}>
        <ButtonUI
          item={{ value: "View Listing" }}
          selectedItems={done}
          customStyle={styles.customStyle}
          touchProps={touchPropsSubmit}
        ></ButtonUI>
      </View>
    </View>
  );
};

export default PostCreated;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  buttonContainer: {
    marginLeft: 30,
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
});
