import React, { useEffect, useReducer, useState } from "react";
import AmenitiesReducer from "../reducers/AmenitiesReducer";
import { amenitiesType } from "../static/constants";
import { View, StyleSheet, Text } from "react-native";
import List from "../list/List";
import ButtonUI from "../UI/button/ButtonUI";
import RentoBack from "../../../assets/rentoBack.svg";

const OwnerOnBoarding6 = ({ navigation, route }) => {
  var [isPress, setIsPress] = useState(false);
  var [isSubmitPress, setIsSubmitPress] = useState(false);
  const [isWifi, setWifi] = useState(false);
  const [isPet, setPet] = useState(false);
  const [isParking, setParking] = useState(false);

  var touchProps = {
    // activeOpacity: 1,
    underlayColor: "#FFFFFF",

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
          <Text style={styles.subTitle}>Select all that apply</Text>
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
          customStyle={
            isSubmitPress
              ? { ...styles.customStyle, color: "#02696A" }
              : styles.customStyle
          }
        ></ButtonUI>
      </View>
      <View style={styles.progressBar}>
        <View style={styles.progressBarGreen}></View>
      </View>
      <RentoBack
        style={{ zIndex: -1 }}
        width={840}
        height={810}
        marginTop={-302}
        marginLeft={-280}
        opacity={0.7}
      />
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
    color: "#3B6665",
    backgroundColor: "#B1D4D2",
    borderColor: "#B1D4D2",
    borderWidth: 2,
    borderRadius: 15,
    textAlign: "center",
    padding: 5,
    margin: 5,
    height: 30,
  },
  amenitiesExtra: {
    color: "#3B6665",
    borderColor: "#B1D4D2",
    margin: 5,
    backgroundColor: "#B1D4D2",
    borderWidth: 2,
    borderRadius: 15,
    textAlign: "center",
    padding: 5,
    height: 30,
  },
  selectOptions: {
    fontFamily: "Mulish_800ExtraBold",
    color: "white",
    margin: 5,
    backgroundColor: "#3B6665",
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#3B6665",
    textAlign: "center",
    padding: 5,
    height: 30,
    // width: 70,
  },
  progressBar: {
    borderColor: "#3B6665",
    height: 10,
    width: "75%",
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: "#3B6665",
    marginTop: 77,
    marginLeft: 75,
  },
  progressBarGreen: {
    borderWidth: 2,
    borderColor: "#3B6665",
    backgroundColor: "#B1D4D2",
    height: 10,
    width: 40,
    borderRadius: 20,
  },
  container: {
    width: "90%",
    backgroundColor: "white",
  },
  title: {
    // marginLeft: 30,
    marginTop: 42,
    fontWeight: "300",
    fontSize: 15,
    marginLeft: 60,
    fontSize: 22,
    textAlign: "center",
    fontFamily: "Mulish_700Bold",
    color: "#413855",
  },
  subTitle: {
    color: "#5C5D8D",
    fontFamily: "Mulish_600SemiBold",
    fontSize: 17,
    marginLeft: 60,
    marginTop: 25,
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
    fontFamily: "Mulish_400Regular",
  },
  submitButton: {
    backgroundColor: "#3B6665",
    borderColor: "#3B6665",
    height: "50",
    width: "85%",
    marginLeft: 50,
    marginTop: 10,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  submitButtonClicked: {
    backgroundColor: "#B1D4D2",
    borderColor: "#B1D4D2",
    height: "50",
    width: "85%",
    marginLeft: 50,
    marginTop: 10,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  buttonContainer: {
    marginTop: 350,
  },
  customStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Mulish_400Regular",
  },
  listContainer: {
    marginTop: 60,
    fontFamily: "Mulish_400Regular",
    height: "270%",
    width: "100%",
    marginLeft: 30,
    marginRight: 10,
  },
  textContainer: {
    fontFamily: "Mulish_400Regular",
    height: "100%",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});
