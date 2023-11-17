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
  //  pass 123
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
  const signIn = () => {
    navigation.navigate("login_rentor");
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
          item={{ value: "Sign up" }}
          selectedItems={callLoginApi}
          customStyle={styles.customStyle}
          touchProps={touchPropsSubmit}
        />
      </View>
      <Text style={styles.loginText}>
        Already have an account?{" "}
        <Text style={styles.signin} onPress={signIn}>
          Sign in
        </Text>
      </Text>
    </View>
  );
};

export default SingUp;

const styles = StyleSheet.create({
  signin: {
    color: "#3B6665",
    fontSize: 16,
    fontFamily: "Mulish_700Bold",
    textDecorationLine: "underline",
  },
  loginText: {
    fontStyle: "italic",
    marginTop: 20,
    marginLeft: 77,
    fontSize: 16,
    fontFamily: "Mulish_600SemiBold",
  },
  haveAccount: {
    marginTop: 10,
    marginLeft: 80,
    fontFamily: "Mulish_400Regular",
  },
  imageContainer: {
    marginTop: "50%",
    alignItems: "center",
    // height: "0%",
  },
  image: {
    // margin: 20,
    width: 110,
    height: 120,
  },
  container: {
    marginTop:35,
    height: "65%",
    justifyContent: "center",
    //margin: 10,
    // padding: 5,
    backgroundColor: "white",
  },
  subContainer: {
    alignItems: "center",
    height: 60,
  },
  textInput: {
    fontSize: 18,
    fontStyle: "italic",
    height: 30,
    width: "87%",
    borderRadius: 10,
    textAlign: "justify",
    height: 45,
    paddingLeft: 10,

    fontFamily:"Mulish_400Regular_Italic",

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
    textDecorationColor: "#413855",
    fontFamily: "Mulish_400Regular",
  },
  textContainer: {
    //margin: 10,
    height: "10%",
    justifyContent: "center",
  },
  title: {
    // marginTop: 15,
    fontWeight: "300",
    fontSize: 28,

    width:"70%",
    marginLeft:"14%",

    textAlign: "center",
    fontFamily: "Mulish_700Bold",
    color: "#3B6665",
  },
  submitButton: {
    backgroundColor: "#3B6665",
    borderColor: "#3B6665",
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
    //marginTop: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  buttonContainer: {
    marginTop: 40,
  },
  customStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Mulish_700Bold",
  },
});
