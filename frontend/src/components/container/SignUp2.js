import { Image } from "@rneui/themed";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonUI from "../UI/button/ButtonUI";
import addUser from "../hooks/addUser";
const SingUp = ({ navigation, route }) => {
  const [userValues, setUserValues] = useState();
  const saveData = () => {
    console.log("userValues:" + JSON.stringify(userValues));
    navigation.navigate("signup3", userValues);
  };
  const saveUserOptions = (value, type) => {
    setUserValues({ ...route.params, owner: value });
  };
  var [isSubmitPress, setIsSubmitPress] = useState(false);

  var touchPropsSubmit = {
    underlayColor: "#B1D4D2",
    style: isSubmitPress ? styles.submitButtonClicked : styles.submitButton,
    onHideUnderlay: () => setIsSubmitPress(false),
    onShowUnderlay: () => setIsSubmitPress(true),
  };

  var touchPropsOption = {
    underlayColor: "#FBEDEA",
  };
  const logo = require("../../../assets/login-screen-logo.png");
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.image}></Image>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Create your account!</Text>
      </View>
      {/* <Image source={{ uri:}}></Image> */}
      <View style={styles.optionTitle}>
        <Text style={styles.text}>Are you Owner?</Text>
      </View>

      <View style={styles.optionContainer}>
        <ButtonUI
          item={{ value: "Yes" }}
          selectedItems={saveUserOptions}
          customStyle={styles.customStyleOptions}
          touchProps={touchPropsOption}
        />
        <ButtonUI
          item={{ value: "No" }}
          selectedItems={saveUserOptions}
          customStyle={styles.customStyleOptions}
          touchProps={touchPropsOption}
        />
      </View>
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

export default SingUp;

const styles = StyleSheet.create({
  haveAccount: {
    marginTop: 10,
    marginLeft: 80,
  },
  imageContainer: {
    marginTop: "40%",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 110,
  },
  container: {
    height: "70%",
    justifyContent: "center",
    // margin: 10,
    // padding: 5,
    backgroundColor: "white",
  },
  subContainer: {
    alignItems: "center",
    height: 60,
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
    fontWeight: "light",
    fontSize: 20,
  },
  textContainer: {
    // margin: 10,
    height: "10%",
    justifyContent: "center",
  },
  title: {
    fontWeight: "300",
    fontSize: 25,
    textAlign: "center",
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
  buttonContainer: {
    marginTop: 50,
  },
  customStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  customStyleOptions: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "#FBEDEA",
    borderColor: "#ED7861",
    borderWidth: 2,
    borderRadius: 10,
  },
  optionContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  optionTitle: {
    marginTop: "20%",
  },
});
