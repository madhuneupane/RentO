import React, { useEffect, useReducer, useState } from "react";
import AmenitiesReducer from "../reducers/AmenitiesReducer";
import { amenitiesType } from "../static/constants";
import { View, StyleSheet, Text } from "react-native";
import List from "../list/List";
import ButtonUI from "../UI/button/ButtonUI";

const OwnerOnBoarding6 = ({ navigation, route }) => {
  var [isPress, setIsPress] = useState(false);
  var [isSubmitPress, setIsSubmitPress] = useState(false);
  var touchProps = {
    activeOpacity: 1,
    underlayColor: "orange",
    style: isPress ? styles.btnPress : styles.btnNormal,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
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
    // console.log(value,type)
    // setIsPress(true);
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
          <List
            numColumns={amenitiesType.types.length / 4}
            items={amenitiesType.types}
            selectedItems={selectedItems}
            touchProps={touchProps}
            customStyle={styles.amenities}
            isPress={isPress}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonUI
          item={{ value: "submit" }}
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
  amenities: {
    color: "#36827F",
    backgroundColor: "#B1D4D2",
    borderWidth: 1,
    borderRadius: 5,
  },
  progressBar: {
    borderColor: "#B1D4D2",
    height: 10,
    width: "70%",
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: "#B1D4D2",
    marginTop: 30,
    marginLeft: 55,
  },
  progressBarGreen: {
    backgroundColor: "#36827F",
    height: 10,
    width: 90,
    borderRadius: 20,
  },
  container: {
    width: "100%",
  },
  title: {
    fontWeight: "300",
    fontSize: 15,
    marginLeft: 10,
    fontSize: 20,
    textAlign: "center",
  },
  propertyType: {
    marginBottom: 10,
    height: 100,
    width: "100%",
    padding: 1,
    marginLeft: 0,
    marginTop: 0,
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
  btnNormal: {
    borderColor: "#36827F",
    fontSize: 20,
    // borderRadius: 20,
    // borderWidth: 1,
    // height: "10",
    // width: "10%",
    // marginLeft: 40,
    // marginTop: 20,
    // padding: 10,
    // borderWidth: 0.5,
    // borderRadius: 13,
  },
  btnPress: {
    backgroundColor: "#36827F",
    // borderColor: "orange",
    // height: "10",
    // width: "10",
    // margin: 1,
    // marginLeft: 40,
    // marginTop: 20,
    // padding: 10,
    // borderWidth: 0.5,
    // borderRadius: 13,
  },
  submitButton: {
    backgroundColor: "#36827F",
    // borderWidth: 1,
    borderColor: "#36827F",

    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 10,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 30,
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
  buttonContainer: {
    marginTop: 280,
  },
  customStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  listContainer: {
    height: "300%",
    width: "100%",
    marginTop: 2,
    marginLeft: 10,
    marginRight: 10,
    // backgroundColor: "pink",
    padding: 2,
  },
  textContainer: {
    marginTop: 20,
    height: "100%",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,

    // backgroundColor: "pink",
  },
});
