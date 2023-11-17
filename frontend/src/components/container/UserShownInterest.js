import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import addInterested from "../hooks/addInterested";
import LottieView from "lottie-react-native";
import ButtonUI from "../UI/button/ButtonUI";
const UserShownInterest = ({ interestedId, propertyId, setModalVisible }) => {
  // const { propertyId, interestedId, type, location } = route.params;
  const [tenants, setTenants] = useState();
  console.log("propertyId:" + propertyId);
  console.log("interestedId:" + interestedId);
  addInterested(propertyId, interestedId, setTenants);
  console.log("tenants:::" + JSON.stringify(tenants));
  var [isSubmitPress, setIsSubmitPress] = useState(false);
  var touchPropsSubmit = {
    underlayColor: "#B1D4D2",
    style: isSubmitPress ? styles.submitButtonClicked : styles.submitButton,
    onHideUnderlay: () => setIsSubmitPress(false),
    onShowUnderlay: () => setIsSubmitPress(true),
  };
  const done = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        You have been added in the interested list
      </Text>
      <View style={styles.containerView}>
        <LottieView
          autoPlay
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
          }}
          // source={require("../../../assets/done.json")}
          source={{
            uri: "https://lottie.host/e5d85eda-8ff0-45aa-bff5-42efb045d391/FEjgDtIUn0.json",
          }}
        />
        <View style={styles.buttonContainer}>
          <ButtonUI
            item={{ value: "Back" }}
            selectedItems={done}
            customStyle={styles.customStyle}
            touchProps={touchPropsSubmit}
          ></ButtonUI>
        </View>
      </View>
    </View>
  );
};

export default UserShownInterest;
const styles = StyleSheet.create({
  containerView: {
    backgroundColor: "white",
    height: "65%",
  },
  title: {
    fontWeight: "300",
    fontSize: 20,
    marginLeft: 10,
    fontSize: 30,
    textAlign: "center",
    marginTop: 100,
  },
  container: {
    // margin: 10,
    backgroundColor: "white",
  },
  buttonContainer: {
    marginBottom: 10,
    marginLeft: 30,
  },
  customStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  submitButton: {
    backgroundColor: "#3B6665",
    borderColor: "#3B6665",

    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  submitButtonClicked: {
    backgroundColor: "#B1D4D2",
    borderColor: "#B1D4D2",
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
});
