import React, { useState } from "react";
import ButtonUI from "../UI/button/ButtonUI";
import { Text, View, StyleSheet, Image } from "react-native";
const Login = ({ navigation }) => {
  const selectedItems = (value, type) => {
    navigation.navigate(type);
  };
  const logo = require("../../../assets/login-screen-logo.png");
  var [isPress, setIsPress] = useState(false);
  var [isSubmitPress, setIsSubmitPress] = useState(false);
  var touchPropsSubmit = {
    underlayColor: "#B1D4D2", // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isSubmitPress ? styles.submitButtonClicked : styles.submitButton,
    onHideUnderlay: () => setIsSubmitPress(false),
    onShowUnderlay: () => setIsSubmitPress(true),
  };

  var touchProps = {
    underlayColor: "#FBEDEA",
    style: isPress ? styles.postButtonClicked : styles.postButton,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.image}></Image>
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.title}>What brings you here?</Text>

        <View style={styles.buttonView}>
          <ButtonUI
            item={{ value: `I’m looking for a new place` }}
            customStyle={styles.customStyle}
            selectedItems={selectedItems}
            touchProps={touchPropsSubmit}
            type="welcome"
          />

          <ButtonUI
            item={{ value: `I want to list my property` }}
            customStyle={styles.customStyleOrange}
            selectedItems={selectedItems}
            touchProps={touchProps}
            type="owner"
          />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  title: {
    // marginLeft: 10,
    color: "#413855",
    fontFamily: "Mulish_700Bold",
    fontSize: 20,
  },
  container: {
    backgroundColor: "white",
  },
  imageContainer: {
    marginTop: "15%",
    alignItems: "center",
    // backgroundColor: "yellow",
    height: "30%",
  },
  image: {
    marginTop: 20,
    width: "35%",
    height: "63%",
    // backgroundColor: "Pink",
  },
  subContainer: {
    // marginBottom: 20,
    justifyContent: "space-around",
    alignItems: "center",
    // height: "65%",
    // marginBottom: 45,
    // backgroundColor: "pink",
  },
  button: {
    borderWidth: 5,
    borderRadius: 15,
    fontSize: 22,
    // margin: 10,
    // justifyContent:'center'
  },

  buttonView: {
    width: "100%",
    margin: 5,
    padding: 4,
    alignItems: "center",
    textAlign: "center",
    marginBottom: 100,
    // marginTop: 100,
    // backgroundColor: "pink",
    justifyContent: "space-around",
    height: "50%",
  },

  submitButton: {
    backgroundColor: "#36827F",
    borderColor: "#36827F",
    height: "25%",
    width: "88%",
    marginLeft: 20,
    // marginTop: 20,
    //padding: 10,
    borderWidth: 0.5,
    borderRadius: 30,
  },
  submitButtonClicked: {
    borderColor: "#B1D4D2",
    height: "25%",
    width: "88%",
    marginLeft: 20,
    // marginTop: 20,
    //padding: 10,
    borderWidth: 0.5,
    borderRadius: 30,
  },
  customStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    margin: 10,
    textAlign: "center",
    fontFamily: "Mulish_700Bold",
  },
  customStyleOrange: {
    color: "#413855",
    fontWeight: "bold",
    fontSize: 22,
    margin: 10,
    textAlign: "center",
    fontFamily: "Mulish_700Bold",
  },

  postButton: {
    backgroundColor: "#ED7861",
    borderColor: "#ED7861",
    height: "25%",
    width: "88%",
    marginLeft: 20,
    marginTop: -80,
    //padding: 10,
    borderWidth: 0.5,
    borderRadius: 30,
  },
  postButtonClicked: {
    borderColor: "#ED7861",
    height: "25%",
    width: "88%",
    marginLeft: 20,
    marginTop: -80,
    //padding: 10,
    borderWidth: 0.5,
    borderRadius: 30,
  },
});
