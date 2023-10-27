import React, { useEffect, useReducer, useState } from "react";
import AmenitiesReducer from "../reducers/AmenitiesReducer";
import { amenitiesType } from "../static/constants";
import { View, StyleSheet, Text } from "react-native";
import List from "../list/List";
import ButtonUI from "../UI/button/ButtonUI";

const OwnerOnBoarding6 = ({ navigation, route }) => {
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
    dispatch({ value: value });
  };
  const submit = () => {
    console.log("ownerData on 6:" + JSON.stringify(ownerData));
    navigation.navigate("owner_onboarding3", ownerData);
  };
  return (
    <View style={styles.container}>
      <View style={styles.propertyType}>
        <Text style={styles.title}>
          What amenities does your property offer?
        </Text>
        <List
          numColumns={amenitiesType.types.length / 2}
          items={amenitiesType.types}
          selectedItems={selectedItems}
        />
      </View>
      <ButtonUI item={{ value: "submit" }} selectedItems={submit}></ButtonUI>
    </View>
  );
};

export default OwnerOnBoarding6;
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 10,
  },
  propertyType: {
    marginBottom: 10,
    height: 100,
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
});
