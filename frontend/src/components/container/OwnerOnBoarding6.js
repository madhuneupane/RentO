import React, { useEffect, useReducer, useState } from "react";
import AmenitiesReducer from "../reducers/AmenitiesReducer";
import { amenitiesType } from "../static/constants";
import { View, StyleSheet, Text } from "react-native";
import List from "../list/List";
import ButtonUI from "../UI/button/ButtonUI";

const OwnerOnBoarding6 = ({ navigation, route }) => {
  var [isPress, setIsPress] = useState(false);
  var [isSubmitPress, setIsSubmitPress] = useState(false);
  const [isWifi, setWifi] = useState(false);
  const [isPet, setPet] = useState(false);
  const [isParking, setParking] = useState(false);

  var touchProps = {
    // activeOpacity: 1,
    underlayColor: "#FFFFFF",
    // style: { borderRadius: 5, borderWidth: 1 },
    // onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    // onPressOut: () => setIsPress(true),
  };

  var touchPropsSubmit = {
    underlayColor: "#B1D4D2", // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isSubmitPress ? styles.submitButtonClicked : styles.submitButton,
    onHideUnderlay: () => setIsSubmitPress(false),
    onShowUnderlay: () => setIsSubmitPress(true),
  };
  const [ownerData, setOwnerData] = useState();
  const [amenities, dispatch] = useReducer(AmenitiesReducer, {
    wifi: false,
    heating: false,
    air_conditioning: false,
    parking: false,
    washer_dryer: false,
    petfriendly: false,
  });
  useEffect(() => {
    setOwnerData({ ...route.params, amenities: amenities });
  }, [amenities]);
  const selectedItems = (value, type) => {
    if (value == "Wi-fi") setWifi(true);
    if (value == "Pet friendly") setPet(true);
    if (value == "Parking") setParking(true);
    dispatch({ value: value });
  };
  const submit = () => {
    console.log("ownerData on 6:" + JSON.stringify(ownerData));
    navigation.navigate("owner_onboarding7", ownerData);
  };
  return (
    <View style={styles.container}>
      <View style={styles.propertyType}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            What amenities does your property offer?
          </Text>
        </View>
        <View style={styles.listContainer}>
          <View style={styles.buttonConatiner}>
            <ButtonUI
              item={{ value: "Wi-fi" }}
              selectedItems={selectedItems}
              touchProps={touchProps}
              customStyle={
                isWifi ? styles.selectOptions : styles.amenitiesExtra
              }
            ></ButtonUI>
            <ButtonUI
              item={{ value: "Pet friendly" }}
              selectedItems={selectedItems}
              touchProps={touchProps}
              customStyle={isPet ? styles.selectOptions : styles.amenitiesExtra}
            ></ButtonUI>
            <ButtonUI
              item={{ value: "Parking" }}
              selectedItems={selectedItems}
              touchProps={touchProps}
              customStyle={
                isParking ? styles.selectOptions : styles.amenitiesExtra
              }
            ></ButtonUI>
          </View>
          <View>
            <List
              numColumns={amenitiesType.types.length / 3}
              items={amenitiesType.types}
              selectedItems={selectedItems}
              touchProps={touchProps}
              customStyle={styles.amenities}
              isPress={isPress}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonUI
          item={{ value: "Continue" }}
          selectedItems={submit}
          touchProps={touchPropsSubmit}
          customStyle={styles.customStyle}
        ></ButtonUI>
      </View>
      <View style={styles.progressBar}>
        <View style={styles.progressBarGreen}></View>
      </View>
    </View>
  );
};

export default OwnerOnBoarding6;
const styles = StyleSheet.create({
  buttonConatiner: {
    flexDirection: "row",
    width: "100%",
    // height: "100%",
    // backgroundColor: "pink",
  },
  amenities: {
    color: "#36827F",
    backgroundColor: "#B1D4D2",
    borderWidth: 1,
    borderRadius: 15,
    textAlign: "center",
    padding: 5
  },
  amenitiesExtra: {
    color: "#36827F",
    backgroundColor: "#B1D4D2",
    borderWidth: 1,
    borderRadius: 15,
    textAlign: "center",
    padding: 5
  },
  selectOptions: {
    color: "white",
    backgroundColor: "#36827F",
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#36827F",
    textAlign: "center",
    padding: 5

    // width: 70,
  },
  progressBar: {
    borderColor: "#B1D4D2",
    height: 10,
    width: "75%",
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: "#B1D4D2",
    marginTop: 50,
    marginLeft: 55,
  },
  progressBarGreen: {
    backgroundColor: "#36827F",
    height: 10,
    width: 40,
    borderRadius: 20,
  },
  container: {
    width: "100%",
    backgroundColor: "white",
  },
  title: {
    width: "85%",
    height: "25",
    fontWeight: "300",
    fontSize: 22,
    marginBottom:20,
    marginLeft: 10,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Mulish_700Bold"
  },
  propertyType: {
    marginBottom: 10,
    height: 100,
    width: "100%",
    padding: 1,
  },
  priceRange: {
    margin: 2,
  },
  priceRangeInput: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rooms: {
    marginTop: 15,
    height: 50,
    marginLeft: 0,
  },
  tour: {
    marginTop: 15,
    height: 100,
    marginLeft: 0,
  },
  button: {
    width: "60%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 70,
  },
  submitButton: {
    backgroundColor: "#36827F",
    borderColor: "#36827F",
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 10,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 35,
  },
  submitButtonClicked: {
    backgroundColor: "#B1D4D2",
    borderColor: "#B1D4D2",
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 10,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 35,
  },
  buttonContainer: {
    marginTop: 280,
  },
  customStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  listContainer: {
    fontFamily:"Mulish_400Regular",
    height: "270%",
    width: "100%",
    marginLeft: 10,
    marginRight: 10,
  },
  textContainer: {
    fontFamily:"Mulish_400Regular",
    height: "100%",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});
