import { Text, View, StyleSheet } from "react-native";
import { listingOptions } from "../static/ListingOptions";
import List from "../list/List";
import React, { useState } from "react";

const OwnerOnboarding2 = ({ navigation, route }) => {
  var [isPress, setIsPress] = useState(false);
  var touchProps = {
    activeOpacity: 1,
    underlayColor: "#f56e51", // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    // onPress: () => console.log("HELLO"), // <-- "onPress" is apparently required
  };
  const selectedItems = (value, type) => {
    let onBoardData = {
      placeType: route.params.placeType,
      propertyType: value,
    };
    navigation.navigate("owner_onboarding6", onBoardData);
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>What is your property type?</Text>
      </View>
      <View style={styles.listContainer}>
        <List
          numColumns={listingOptions.propertyType.length / 5}
          items={listingOptions.propertyType}
          selectedItems={selectedItems}
          type="property_type"
          touchProps={touchProps}
          customStyle={styles.customStyle}
        />
      </View>
      <View style={styles.progressBar}>
        <View style={styles.progressBarGreen}></View>
      </View>
    </View>
  );
};

export default OwnerOnboarding2;

var styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
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
    width: 70,
    borderRadius: 20,
  },
  customStyle: {
    color: "#413855",
    fontSize: 15,
  },
  btnNormal: {
    borderColor: "#f56e51",
    // borderWidth: 1,
    backgroundColor: "#FBEDEA",
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginBottom: 10,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 25,
  },
  btnPress: {
    borderColor: "#f56e51",
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 25,
  },
  textContainer: {
    margin: 10,
    height: "20%",
    justifyContent: "center",
    // backgroundColor: "pink",
  },
  listContainer: {
    // marginTop: ,
  },
  title: {
    fontWeight: "300",
    fontSize: 15,
    marginLeft: 10,
    fontSize: 20,
    textAlign: "center",
  },
});
