import React from "react";
import { Button } from "@rneui/themed";
import { TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const ButtonUI = ({
  item,
  selectedItems,
  customStyle,
  type,
  check = false,
}) => {
  return (
    <TouchableOpacity onPress={() => selectedItems(item.value, type)}>
      <Text
        style={customStyle ? { ...styles.text, ...customStyle } : styles.text}
      >
        {" " + item.value + " "}
        {check && <MaterialCommunityIcons name="check" />}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonUI;

const styles = StyleSheet.create({
  text: {
    color: "#36827F",
    borderWidth: 0.5,
    borderRadius: 13,
    borderColor: "#36827F",
    margin: 8,
    padding: 5,
    textAlign: "center",
    fontWeight: "light",
  },
});
