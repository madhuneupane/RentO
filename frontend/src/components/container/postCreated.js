import { Button } from "@rneui/base";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LottieView from "lottie-react-native";
import ButtonUI from "../UI/button/ButtonUI";
const PostCreated = ({ navigation }) => {
  const done = () => {
    navigation.navigate("owner_welcome");
  };
  return (
    <View>
      <LottieView
        autoPlay
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#eee",
        }}
        source={require("../../../assets/posted.json")}
      />
      <ButtonUI
        item={{ value: "View Listing" }}
        selectedItems={done}
      ></ButtonUI>
    </View>
  );
};

export default PostCreated;
