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
    //token = await AsyncStorage.getItem("token");
    // // console.log(onBoardData);
    // const response = await api.getDescription(token, key);
    // console.log("description2: " + JSON.stringify(response));
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
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Let's create a captivating property description
        </Text>
      </View>
      <InputUI value={desc ? desc : ownerSelections} coustomStyle={styles} />

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
        <View style={styles.wirteContainer}>
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
  textContainer: {
    // marginTop: 10,
    height: "20%",
    justifyContent: "center",
    // backgroundColor: "white",
  },
  title: {
    fontWeight: 300,
    fontSize: 15,
    marginLeft: 10,
    fontSize: 20,
    textAlign: "center",
  },
  card: {
    width: "100%",
    height: "40%",
    borderRadius: 1,
    backgroundColor: "yellow",
    // flex: 10,
  },
  container: {
    // margin: 10,
    backgroundColor: "white",
  },
  subContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    height: "40%",
    width: "100%",
    // borderWidth: 1,
    // borderRadius: 30,
    // alignItems: "center",
    // backgroundColor: "yellow",
    // flex: 1,
    backgroundColor: "white",
  },
  textInput: {
    height: "130%",
    width: "90%",
    marginTop: 40,
    marginBottom: 15,
    fontSize: 20,
    textAlign: "center",
    // padding: 10,
    backgroundColor: "#e6dff5",
    borderColor: "#413855",
    borderRadius: 20,
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
    borderRadius: 40,
  },
  submitButtonClicked: {
    borderColor: "#36827F",
    height: "30",
    width: "80%",
    marginLeft: 40,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  buttonContainer: {
    marginBottom: 250,
    backgroundColor: "white",
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
    // marginTop: 2,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
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
    borderRadius: 40,
  },
  wirteContainer: {
    flex: 1,
    marginTop: "15%",
    height: 100,
    backgroundColor: "white",
  },
  progressBar: {
    borderColor: "#B1D4D2",
    height: 10,
    width: "80%",
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: "#B1D4D2",
    // marginTop: 50,
    marginLeft: 50,
    position: "absolute",
    bottom: -120,
  },
  progressBarGreen: {
    backgroundColor: "#36827F",
    height: 10,
    width: 200,
    borderRadius: 20,
  },
});
