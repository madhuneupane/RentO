import React, { useState } from "react";
import ButtonUI from "../UI/button/ButtonUI";
import { Text, View, StyleSheet, Image } from "react-native";
import RentoBack from "../../../assets/rentoBack.svg";

const Login = ({ navigation }) => {
  const selectedItems = (value, type) => {
    navigation.navigate(type);
  };
  const logo = require("../../../assets/login-screen-logo.png");
  var [isPress, setIsPress] = useState(false);
  var [isSubmitPress, setIsSubmitPress] = useState(false);
  var touchPropsSubmit = {
    underlayColor: "#B1D4D2",
    // <-- "backgroundColor" will be always overwritten by "underlayColor"
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
            customStyle={
              isSubmitPress
                ? { ...styles.customStyle, color: "#02696A" }
                : styles.customStyle
            }
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
      <RentoBack
        width={800}
        height={300}
        marginTop={-130}
        marginLeft={-220}
        opacity={0.7}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  title: {
    // marginLeft: 10,
    marginTop: -10,
    marginBottom: -28,
    color: "#413855",
    fontFamily: "Mulish_700Bold",
    fontSize: 24,
  },
  container: {
    // backgroundColor: "rgb(229 231 235)",
    backgroundColor: "rgba(0, 0, 0)",
  },
  // imageContainer: {
  //   marginTop: "20%",
  //   alignItems: "center",
  //   // backgroundColor: "yellow",
  //   height: "32%",
  // },
  // image: {
  //   marginTop: 20,
  //   width: "35%",
  //   height: "63%",
  //   // backgroundColor: "Pink",
  // },
  imageContainer: {
    marginTop: "35%",
    alignItems: "center",
  },
  image: {
    width: 125,
    height: 137,
  },
  subContainer: {
    marginTop: 40,
    // marginBottom: 20,
    justifyContent: "space-around",
    alignItems: "center",
    // height: "65%",
    // marginBottom: 45,
    // backgroundColor: "pink",
  },
  button: {
    color: "white",
    borderWidth: 5,
    borderRadius: 15,
    fontSize: 22,
    // margin: 10,
    // justifyContent:'center'
  },

  buttonView: {
    width: "100%",
    margin: -55,
    padding: 4,
    alignItems: "center",
    textAlign: "center",
    marginBottom: 100,
    //marginTop: 1,
    // backgroundColor: "pink",
    justifyContent: "space-around",
    height: "50%",
  },

  submitButton: {
    color: "white",
    backgroundColor: "#3B6665",
    borderColor: "#3B6665",
    height: "30%",
    width: "85%",
    marginLeft: 20,
    // marginTop: 20,
    //padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  submitButtonClicked: {
    color: "#02696A",
    backgroundColor: "#B1D4D2",
    borderColor: "#B1D4D2",
    height: "30%",
    width: "85%",
    marginLeft: 20,
    // marginTop: 20,
    //padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  customStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    margin: 15,
    textAlign: "center",
    fontFamily: "Mulish_700Bold",
  },
  customStyleOrange: {
    color: "#413855",
    fontWeight: "bold",
    fontSize: 20,
    margin: 15,
    textAlign: "center",
    fontFamily: "Mulish_700Bold",
  },

  postButton: {
    backgroundColor: "#ED7861",
    borderColor: "#ED7861",
    height: "30%",
    width: "85%",
    marginLeft: 20,
    marginTop: -30,
    //padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  postButtonClicked: {
    backgroundColor: "#FBEDEA",
    borderColor: "#FBEDEA",
    height: "30%",
    width: "85%",
    marginLeft: 20,
    marginTop: -27,
    //padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
});
