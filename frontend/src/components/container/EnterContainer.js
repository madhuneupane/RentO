import React, { useRef } from "react";
import { TouchableHighlight } from "react-native";
import { Text, View, StyleSheet, Image } from "react-native";
import { Card } from "@rneui/themed";
const EnterContainer = ({ navigation, route }) => {
  const logo = require("../../../assets/splash-screen-logo.png");
  const login = () => {
    navigation.navigate("signup");
  };

  return (
    <TouchableHighlight onPress={login} style={styles.container}>
      <Image source={logo} style={styles.image}></Image>
    </TouchableHighlight>
  );
};

export default EnterContainer;
const styles = StyleSheet.create({
  view: {
    height: "100%",
    width: "100%",
    // backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 8,
  },
  container: {
    marginTop: "0",
    backgroundColor: "#36827F",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    //padding: 10,
  },
  image: {
    width: "50%",
    height: "25.5%",
    shadowColor: "#171717",
  },
});
