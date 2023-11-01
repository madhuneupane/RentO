import React from "react";
import { Button } from "@rneui/themed";
import { TouchableOpacity, Text, TouchableHighlight } from "react-native";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
const ButtonUI = ({
  item,
  selectedItems,
  customStyle,
  type,
  check = false,
  touchProps = { touchProps },
}) => {
  const pressOut = () => {};
  return (
    <TouchableHighlight
      // underlayColor="orange"
      onPress={() => selectedItems(item.value, type)}
      {...touchProps}
    >
      <Text
        style={customStyle ? { ...styles.text, ...customStyle } : styles.text}
      >
        {" " + item.value + " "}

        {check && (
          <View style={styles.checkContainer}>
            <MaterialCommunityIcons name="check" size={20} />
          </View>
        )}
      </Text>
    </TouchableHighlight>
  );
};

export default ButtonUI;

const styles = StyleSheet.create({
  text: {
    color: "#36827F",
    // borderWidth: 0.5,
    // borderRadius: 13,
    borderColor: "#36827F",
    margin: 8,
    padding: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  checkContainer: {
    backgroundColor: "#f56e51",
    borderColor: "#f56e51",
    borderRadius: 10,
    // margin: 10,
    // marginTop: 20,
    alignItems: "center",
    // justifyContent: "center",
  },
});
