import { Image } from "@rneui/themed";
import React, { useReducer, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { InputUI } from "../UI/input/InputUI";
import ButtonUI from "../UI/button/ButtonUI";
import { rentorCredentials } from "../static/constants";
import SingUpReducer from "../reducers/SingUpReducer";
import login from "../hooks/login";
const SingUp = ({ navigation }) => {
  const [userValues, dispatch] = useReducer(SingUpReducer, {});

  const callLoginApi = () => {
    console.log("userValues:" + JSON.stringify(userValues));
    navigation.navigate("signup2", userValues);
  };

  const saveUserValues = (value, type) => {
    dispatch({ value: value, type: type });
  };
  var [isSubmitPress, setIsSubmitPress] = useState(false);

  var touchPropsSubmit = {
    underlayColor: "#B1D4D2",
    style: isSubmitPress ? styles.submitButtonClicked : styles.submitButton,
    onHideUnderlay: () => setIsSubmitPress(false),
    onShowUnderlay: () => setIsSubmitPress(true),
  };
  const logo = require("../../../assets/favicon.png");
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.image}></Image>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Create your account!</Text>
      </View>
      {/* <Image source={{ uri:}}></Image> */}

      <InputUI
        //   placeholder='Type your email'
        selectedItems={saveUserValues}
        type="firstName"
        coustomStyle={styles}
        placeholder=" First Name"
      />
      <InputUI
        placeholder=" Last Name"
        selectedItems={saveUserValues}
        type="lastName"
        coustomStyle={styles}
      />
      <InputUI
        placeholder=" Email"
        selectedItems={saveUserValues}
        type="email"
        coustomStyle={styles}
      />
      <InputUI
        placeholder=" Password"
        selectedItems={saveUserValues}
        type="password"
        coustomStyle={styles}
        secureTextEntry={true}
      />
      <InputUI
        placeholder=" Contact Number"
        selectedItems={saveUserValues}
        type="contactNumber"
        coustomStyle={styles}
      />
      <View style={styles.buttonContainer}>
        <ButtonUI
          item={{ value: "Continue" }}
          selectedItems={callLoginApi}
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
    marginTop: "50%",
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
});
