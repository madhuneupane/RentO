import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Postdata from "../hooks/postdata";
import ButtonUI from "../UI/button/ButtonUI";
import { Button } from "react-native-paper";

const PostIsReady = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState();
  const data = route.params;
  Postdata(data, setResponse, setLoading);
  showPost = () => {
    // console.log("is ready data:" + JSON.stringify(data));
    navigation.navigate("ower_new_post", response);
  };
  showListings = () => {
    navigation.navigate("owner_welcome");
  };
  var touchPropsSubmit = {
    underlayColor: "#36827F",
    style: isSubmitPress ? styles.submitButtonClicked : styles.submitButton,
    onHideUnderlay: () => setIsSubmitPress(false),
    onShowUnderlay: () => setIsSubmitPress(true),
  };
  var [isSubmitPress, setIsSubmitPress] = useState(false);
  // console.log("Finally::: last page" + JSON.stringify(data));
  return (
    <View style={styles.descView}>
      <Text style={styles.descText}> Your listing has been posted</Text>
      <View style={styles.ButtonContainer}>
        <ButtonUI
          item={{ value: "View Post" }}
          selectedItems={showPost}
          customStyle={styles.customStyle}
          touchProps={touchPropsSubmit}
        ></ButtonUI>
        <ButtonUI
          item={{ value: "My Listings" }}
          selectedItems={showListings}
          customStyle={styles.customStyle}
          touchProps={touchPropsSubmit}
        ></ButtonUI>
      </View>
    </View>
  );
};

export default PostIsReady;
const styles = StyleSheet.create({
  ButtonContainer: {
    flexDirection: "row",
  },
  customStyle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  descView: {
    alignItems: "center",
    // justifyContent: "center",
    marginTop: "30%",
    // marginBottom: 10,
    marginLeft: 20,
    height: "40%",
    width: "90%",
    borderWidth: 1,
    borderRadius: 10,
    // alignItems: "center",
    // flex: 1,
    // backgroundColor: "white",
    backgroundColor: "#E9E7EE",
    borderColor: "#413855",
  },
  descText: {
    marginTop: 50,
    fontFamily: "Mulish_700Bold",
    fontSize: 20,
  },
  submitButton: {
    backgroundColor: "#E9E7EE",
    borderColor: "#36827F",
    height: "55%",
    width: "46%",
    marginLeft: 10,
    marginTop: 70,
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
  submitButtonClicked: {
    backgroundColor: "#36827F",
    borderColor: "#36827F",
    height: "55%",
    width: "46%",
    marginLeft: 40,
    marginTop: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 20,
  },
});
