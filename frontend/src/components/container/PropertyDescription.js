import React, { useState } from "react";
import { Card, Text } from "@rneui/themed";
import { StyleSheet, View } from "react-native";
import { InputUI } from "../UI/input/InputUI";
import ButtonUI from "../UI/button/ButtonUI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiClient from "../service/Api";
import LottieView from "lottie-react-native";

const PropertyDescription = ({ navigation, route }) => {
  const keywords = route.params;
  console.log(keywords);
  const location = JSON.parse(keywords?.address).city;
  console.log("location:;;" + location);
  const [desc, setDesc] = useState();
  const key = `${keywords?.placeType} place type, ${keywords?.propertyType} property type, ${location} location, ${keywords?.amount} rent`;
  const ownerSelections = `Place Type: ${keywords?.placeType} | Property Type: ${keywords?.propertyType} | Address: ${location} | Amount: ${keywords?.amount}`;
  const [ownerData, setOwnerData] = useState();
  const api = new ApiClient("/descriptionSuggest");
  var [isSubmitPress, setIsSubmitPress] = useState(false);
  var [isSubmit, setIsSubmit] = useState(false);
  const [creating, setCreating] = useState(false);
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
    setCreating(true);
    token = await AsyncStorage.getItem("token");
    const response = await api.getDescription(token, key);
    const result = JSON.stringify(response);
    setDesc(result.substr(1).slice(0, -1));
    setCreating(false);
    // setDesc(test);
    console.log("WAIT.....");

    if (result) {
      const desc1 = result.substr(1).slice(0, -1);
      setOwnerData({ ...keywords, description: desc1 });
    }
    // setOwnerData({ ...keywords, description: "test" });

  };
  //
  const nextPage = () => {
    // setOwnerData({ ...keywords, description: "desc" });

    console.log("ownerData" + JSON.stringify(ownerData));
    console.log("ownerData in desc" + desc);
    navigation.navigate("owner_onboarding5", ownerData);
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Let's create a captivating property description
        </Text>
      </View>
      {creating ? (
        <LottieView
          autoPlay
          style={{
            width: "100%",
            height: "62%",
            backgroundColor: "white",
            marginLeft: 28,
            marginBottom: 100,
          }}
          source={require("../../../assets/RentoO - Loading Animation.json")}
          // source={{
          //   uri: "https://lottie.host/73bbe7a4-f718-48d6-bc72-f608432fe7c5/Vkwa7zBEZW.json",
          // }}
        />
      ) : (
        // <InputUI value={desc ? desc : ownerSelections} coustomStyle={styles} />
        <View style={styles.descView}>
          <Text style={styles.descText}>{desc ? desc : ownerSelections}</Text>
        </View>
      )}

      {!desc ? (
        <View style={styles.wirteContainer}>
          <ButtonUI
            customStyle={styles.customStyle}
            selectedItems={() => generateDesc("tests")}
            item={{ value: "Write for me" }}
            touchProps={touchPropsSubmit}
          />
          <ButtonUI
            customStyle={styles.customStyleOrange}
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
            customStyle={styles.customStyleOrange}
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
  descText: {
    marginTop: 10,
    fontFamily: "Mulish_700Bold",
    fontSize: 16,
    padding:10,
    color: "#5C5D8D",
  },
  textContainer: {
    // marginTop: 10,
    height: "20%",
    justifyContent: "center",
    // backgroundColor: "white",
  },
  title: {
    width: "70%",
    marginLeft: 60,
    marginTop: 20,
    color: "#413855",
    //marginLeft: 10,
    fontSize: 22,
    textAlign: "center",
    fontFamily: "Mulish_700Bold"
  },
  card: {
    width: "100%",
    height: "20%",
    borderRadius: 1,
    backgroundColor: "yellow",
    // flex: 10,
  },
  container: {
    // margin: 10,
    backgroundColor: "white",
  },
  descView: {
    alignItems: "center",
    // justifyContent: "center",
    marginTop: 10,
    // marginBottom: 10,
    marginLeft: 20,
    height: "49.5%",
    width: "90%",
    borderWidth: 1,
    color: "#5C5D8D",
    borderRadius: 10,
    // alignItems: "center",
    backgroundColor: "yellow",
    // flex: 1,
    // backgroundColor: "white",
    backgroundColor: "#e6dff5",
    borderColor: "#413855",
  },
  textInput: {
    color : "#5C5D8D",
    height: "90%",
    width: "100%",
    marginTop: 30,
    marginBottom: 15,
    fontSize: 18,
    textAlign: "center",
    // padding: 10,
    backgroundColor: "white",
    // borderColor: "#413855",
    // borderRadius: 20,
    borderWidth: 0,
  },
  label: {
    fontWeight: "300",
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
    backgroundColor: "#3B6665",
    borderColor: "#3B6665",
    height: "30",
    width: "80%",
    marginLeft: 40,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  submitButtonClicked: {
    borderColor: "#3B6665",
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
    fontFamily: "Mulish_700Bold",
  },
  customStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Mulish_700Bold",
  },
  customStyleOrange: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    color: "#413855",
    fontFamily: "Mulish_700Bold",
  },
  writeButtonClicked: {
    backgroundColor: "#FBEDEA",
    borderColor: "#f56e51",
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 10,
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
    marginTop: 10,
    position: "absolute",
    bottom: -78,
  },
  progressBarGreen: {
    backgroundColor: "#3B6665",
    height: 10,
    width: 200,
    borderRadius: 20,
  },
});
