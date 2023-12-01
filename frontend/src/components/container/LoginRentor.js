import { Image } from "@rneui/themed";
import React, { useReducer, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { InputUI } from "../UI/input/InputUI";
import ButtonUI from "../UI/button/ButtonUI";
import { rentorCredentials } from "../static/constants";
import LoginRentorReducer from "../reducers/LoginRentorReducer";
import login from "../hooks/login";
const LoginRentor = ({ navigation }) => {
  const [credentials, dispatch] = useReducer(LoginRentorReducer, {
    email: "madhu@gmail.com",
    password: "madhu123",
  });
  login(credentials.email, credentials.password);

  const callLoginApi = () => {
    console.log("credentials:" + JSON.stringify(credentials));
    navigation.navigate("login");
  };

  const saveCredentials = (value, type) => {
    // dispatch({value:value,type:type})
  };
  var [isSubmitPress, setIsSubmitPress] = useState(false);

  var touchPropsSubmit = {
    underlayColor: "#B1D4D2",
    style: isSubmitPress ? styles.submitButtonClicked : styles.submitButton,
    onHideUnderlay: () => setIsSubmitPress(false),
    onShowUnderlay: () => setIsSubmitPress(true),
  };
  const logo = require("../../../assets/login-screen-logo.png");
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.image}></Image>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Glad to see you back!</Text>
      </View>
      {/* <Image source={{ uri:}}></Image> */}

      <InputUI
        //   placeholder='Type your email'
        selectedItems={saveCredentials}
        type={rentorCredentials.email}
        coustomStyle={styles}
        value="madhu@gmail.com"
      />
      <InputUI
        placeholder="Password"
        selectedItems={saveCredentials}
        type={rentorCredentials.password}
        coustomStyle={styles}
        value="madhu123"
        secureTextEntry={true}
      />

      <View style={styles.buttonContainer}>
        <ButtonUI
          item={{ value: "Sign in" }}
          selectedItems={callLoginApi}
          customStyle={
            isSubmitPress
              ? { ...styles.customStyle, color: "#02696A" }
              : styles.customStyle
          }
          touchProps={touchPropsSubmit}
        />
      </View>
      <Text style={styles.textMessage}>Forgot your password?</Text>
    </View>
  );
};

export default LoginRentor;

const styles = StyleSheet.create({
  textMessage: {
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "18",
    fontFamily: "Mulish_600SemiBold",
    color: "#3B6665",
    textDecorationLine: "underline",
  },
  imageContainer: {
    marginTop: "35%",
    alignItems: "center",
  },
  image: {
    width: 125,
    height: 137,
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
    fontSize: 18,
    fontStyle: "italic",
    height: 30,
    width: "87%",
    borderRadius: 10,
    textAlign: "justify",
    height: 45,
    paddingLeft: 10,
    fontFamily: "Mulish_400Regular_Italic",
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
    fontFamily: "Mulish_400Regular",
  },
  textContainer: {
    margin: 10,
    height: "15%",
    justifyContent: "center",
  },
  title: {
    fontWeight: "300",
    fontSize: 28,
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
    marginTop: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  submitButtonClicked: {
    borderColor: "#B1D4D2",
    height: "30",
    width: "80%",
    marginLeft: 40,
    marginTop: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  buttonContainer: {
    marginTop: 30,
    // backgroundColor: "rgba(0, 0, 0,0.04)",
  },
  customStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Mulish_700Bold",
  },
});
