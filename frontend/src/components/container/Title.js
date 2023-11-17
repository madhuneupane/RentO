import React from "react";
import { View, Image, StyleSheet, ImageBackground } from "react-native";
import SVGImg from "react-native-svg";
import TitleImage from "../../../assets/horizontal-logo-top-bar-svg.svg";
const Title = () => {
  return (
    <View style={styles.container}>
      <TitleImage width={160} height={100} marginTop={80} />
    </View>
  );
};

export default Title;
const styles = StyleSheet.create({
  container: {
    marginTop: -30,
    backgroundColor: "#3B6665",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "140%",
  },
});
