import React, { useState } from "react";
import { Card, Text } from "@rneui/themed";
import { StyleSheet, View } from "react-native";
import { InputUI } from "../UI/input/InputUI";
import ButtonUI from "../UI/button/ButtonUI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiClient from "../service/Api";

const PropertyDescription = ({ navigation, route }) => {
  const keywords = route.params;
  const [desc, setDesc] = useState();
  const key = `${keywords?.placeType} place type, ${keywords?.propertyType} property type, ${keywords?.address} location, ${keywords?.amount} rent`;
  const ownerSelections = `Place Type: 2${keywords?.placeType} | Property Type: ${keywords?.propertyType} | Address: ${keywords?.address} | Amount: ${keywords?.amount}`;
  const [ownerData, setOwnerData] = useState();
  const api = new ApiClient("/descriptionSuggest");
  var [isSubmitPress, setIsSubmitPress] = useState(false);
  var [isSubmit, setIsSubmit] = useState(false);

  var touchPropsSubmit = {
    underlayColor: "#ffffff00",
    style: isSubmitPress ? styles.submitButtonClicked : styles.submitButton,
    onHideUnderlay: () => setIsSubmitPress(false),
    onShowUnderlay: () => setIsSubmitPress(true),
  };
  var touchProps = {
    underlayColor: "#ffffff00",
    style: isSubmit ? styles.writeButtonClicked : styles.writesubmitButton,
    onHideUnderlay: () => setIsSubmit(false),
    onShowUnderlay: () => setIsSubmit(true),
  };

  const generateDesc = async (test) => {
    // token = await AsyncStorage.getItem("token");
    // // console.log(onBoardData);
    // const response = await api.getDescription(token, key);
    // // console.log("description2: " + JSON.stringify(response));
    // const result = JSON.stringify(response);
    // setDesc(result);
    setDesc(test);
    setOwnerData({ ...keywords, description: test });
  };
  //
  const nextPage = () => {
    // console.log("ownerData:" + JSON.stringify(ownerData));
    navigation.navigate("owner_onboarding5", ownerData);
  };
  return (
    <View style={styles.conatiner}>
      <View>
        <Text>Let's create a captivating property description</Text>
      </View>
      <View style={styles.card}>
        <InputUI
          // label="Let's create a captivating property description"
          value={desc ? desc : ownerSelections}
          coustomStyle={styles}
        />
      </View>
      {!desc ? (
        <View style={styles.wirteContainer}>
          <ButtonUI
            customStyle={styles.customStyle}
            selectedItems={() => generateDesc("tests")}
            item={{ value: "Write for me" }}
            touchProps={touchPropsSubmit}
          />
          <ButtonUI
            customStyle={styles.customStyle}
            selectedItems={() => generateDesc("tests")}
            item={{ value: "Continue with my text" }}
            touchProps={touchProps}
          />
        </View>
      ) : (
        <View>
          <ButtonUI
            customStyle={styles.customStyle}
            selectedItems={nextPage}
            item={{ value: "Looks good!!" }}
            touchProps={touchPropsSubmit}
          />
          <ButtonUI
            customStyle={styles.customStyle}
            selectedItems={() => generateDesc("tests")}
            item={{ value: "Make my own edit" }}
            touchProps={touchProps}
          />
        </View>
      )}
      <View style={styles.progressBar}>
        <View style={styles.progressBarGreen}></View>
      </View>
    </View>
  );
};

export default PropertyDescription;

const styles = StyleSheet.create({
  card: {
    width: "40%",
    height: "50%",
  },
  conatiner: {
    margin: 10,
  },
  subContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    height: "70%",
  },
  textInput: {
    height: "90%",
    width: "90%",
    marginTop: 15,
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    backgroundColor: "#e6dff5",
    borderColor: "#e6dff5",
  },
  label: {
    fontWeight: 300,
    fontSize: 15,
    marginLeft: 10,
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    height: 40,
    fontSize: 20,
    width: "70%",
    textAlign: "center",
    marginLeft: 50,
  },
  submitButton: {
    backgroundColor: "#36827F",
    borderColor: "#36827F",
    height: "30",
    width: "80%",
    marginLeft: 40,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 30,
  },
  submitButtonClicked: {
    borderColor: "#36827F",
    height: "30",
    width: "80%",
    marginLeft: 40,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 30,
  },
  buttonContainer: {
    marginTop: 250,
  },
  customStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  writeButtonClicked: {
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 2,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 30,
  },
  writesubmitButton: {
    backgroundColor: "#f56e51",
    borderColor: "#f56e51",
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 10,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 30,
  },
  wirteContainer: {
    height: 100,
  },
});
