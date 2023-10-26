import React, { useState } from "react";
import { Text } from "@rneui/themed";
import { StyleSheet, View } from "react-native";
import { InputUI } from "../UI/input/InputUI";
import ButtonUI from "../UI/button/ButtonUI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiClient from "../service/Api";

const PropertyDescription = ({ navigation, route }) => {
  const keywords = route.params;
  const [desc, setDesc] = useState();
  const key = `${keywords.placeType} place type, ${keywords.propertyType} property type, ${keywords.address} location, ${keywords.amount} rent`;
  const ownerSelections = `Place Type: 2${keywords.placeType} | Property Type: ${keywords.propertyType} | Address: ${keywords.address} | Amount: ${keywords.amount}`;
  console.log("keyword:" + JSON.stringify(keywords));
  const [ownerData, setOwnerData] = useState();
  const api = new ApiClient("/descriptionSuggest");

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

  const nextPage = () => {
    console.log("ownerData:" + JSON.stringify(ownerData));
    navigation.navigate("owner_onboarding5", {
      ownerData: ownerData,
      imageUploaded: true,
    });
  };
  return (
    <View>
      <View style={styles}>
        {console.log("desc:" + JSON.stringify(desc))}
        <InputUI
          label="Let's create a captivating property description"
          value={desc ? desc : ownerSelections}
          coustomStyle={styles}
        />
      </View>
      {!desc ? (
        <ButtonUI
          customStyle={styles.button}
          selectedItems={() => generateDesc("tests")}
          item={{ value: "Write for me" }}
        />
      ) : (
        <ButtonUI
          customStyle={styles.button}
          selectedItems={nextPage}
          item={{ value: "continue" }}
        />
      )}
    </View>
  );
};

export default PropertyDescription;

const styles = StyleSheet.create({
  conatiner: {},
  subContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    height: "70%",
  },
  textInput: {
    height: "100%",
    width: "90%",
    marginTop: 25,
    fontSize: 20,
    textAlign: "center",
    padding: 10,
  },
  label: {
    fontSize: 20,
  },
  button: {
    height: 40,
    fontSize: 20,
    width: "70%",
    textAlign: "center",
    marginLeft: 50,
  },
});
