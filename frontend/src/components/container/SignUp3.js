import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import addUser from "../hooks/addUser";
import ButtonUI from "../UI/button/ButtonUI";

const SignUp3 = ({ navigation, route }) => {
  const userValues = route.params;
  var [isSubmitPress, setIsSubmitPress] = useState(false);
  const saveData = () => {
    navigation.navigate("login_rentor", userValues);
  };
  addUser(userValues);
  var touchPropsSubmit = {
    underlayColor: "#B1D4D2",
    style: isSubmitPress ? styles.submitButtonClicked : styles.submitButton,
    onHideUnderlay: () => setIsSubmitPress(false),
    onShowUnderlay: () => setIsSubmitPress(true),
  };
  console.log("userValues:" + JSON.stringify(userValues));
  return (
    <View>
      <Text>SignUp3</Text>
      <View style={styles.buttonContainer}>
        <ButtonUI
          item={{ value: "Continue" }}
          selectedItems={saveData}
          customStyle={styles.customStyle}
          touchProps={touchPropsSubmit}
        />
      </View>
    </View>
  );
};

export default SignUp3;
const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: "#36827F",
    borderColor: "#36827F",
    height: "30",
    width: "80%",
    marginLeft: 40,
    // marginTop: 10,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  submitButtonClicked: {
    borderColor: "#B1D4D2",
    height: "30",
    width: "80%",
    marginLeft: 40,
    // marginTop: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  customStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
