import React from "react";
import { View, Image, StyleSheet, ImageBackground } from "react-native";
import SVGImg from "react-native-svg";
import TitleImage from "../../../assets/Logo-on-white-bg-horizontal.svg";
const Title = () => {
  return (
    // <Image
    //   style={{ width: "100%", height: "100%", backgroundColor: "#36827F" }}
    //   source={require("../../../assets/horizontal-logo.png")}
    //   resizeMode="center"
    // />
    <View style={styles.container}>
      <TitleImage width={100} height={100} />
    </View>
  );
};

export default Title;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36827F",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
