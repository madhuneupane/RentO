import { Input } from "@rneui/themed";
import { TextInput, Text, StyleSheet, View } from "react-native";
import React from "react";

export const InputUI = ({
  placeholder,
  label,
  selectedItems,
  type,
  coustomStyle,
  value,
  secureTextEntry,
}) => {
  return (
    <View style={coustomStyle && coustomStyle.subContainer}>
      <Text style={coustomStyle && coustomStyle.label}>{label}</Text>
      <TextInput
        style={
          coustomStyle
            ? { ...styles.textInput, ...coustomStyle.textInput }
            : styles.textInput
        }
        placeholder={" " + placeholder}
        onChangeText={(value) => selectedItems(value, type)}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'column',
    // justifyContent:'space-evenly'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#5C5D8D",
    backgroundColor: "#F3F3F3",
  },
});
