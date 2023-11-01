import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Title = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 40, height: 60 }}
        source={require("../../../assets/favicon.png")}
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
