import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Title = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 110, height: 70 }}
        source={require("../../../assets/horizontal-logo.png")}
        resizeMode="contain"
      />
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
    // height: "100%",
  },
});
