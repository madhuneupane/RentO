import React from "react";
import { TouchableHighlight } from "react-native";
import { Text, View, StyleSheet, Image } from "react-native";
const EnterContainer = ({ navigation, route }) => {
  const logo = require("../../../assets/favicon.png");

  const login = () => {
    navigation.navigate("login_rentor");
  };
  return (
    <TouchableHighlight onPress={login} style={styles.container}>
      <Image source={logo} style={styles.image}></Image>
    </TouchableHighlight>
  );
};

export default EnterContainer;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36827F",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});
