import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import List from "../list/List";
import { listingOptions } from "../static/ListingOptions";

const OwnerOnboarding1 = ({ navigation, route }) => {
  console.log("Back:" + JSON.stringify(route.params));
  var [isPress, setIsPress] = useState(false);
  const selectedItems = (value, type) => {
    navigation.navigate("owner_onboarding2", { placeType: value });
  };
  var touchProps = {
    activeOpacity: 1,
    underlayColor: "#ED7861", // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          What kind of place do you want to list?
        </Text>
      </View>
      <View style={styles.listContainer}>
        <List
          numColumns={listingOptions.placeType.length / 3}
          items={listingOptions.placeType}
          selectedItems={selectedItems}
          type="place_type"
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

export default OwnerOnboarding1;

var styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  progressBar: {
    borderColor: "#B1D4D2",
    height: 10,
    width: "75%",
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: "#B1D4D2",
    marginTop: 40,
    marginLeft: 55,
    marginBottom: 60,
  },
  progressBarGreen: {
    backgroundColor: "#36827F",
    height: 10,
    width: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  customStyle: {
    color: "#413855",
    fontSize: 15,
  },
  btnNormal: {
    borderColor: "#FBEDEA",
    // borderWidth: 1,
    backgroundColor: "#FBEDEA",
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 30,
  },
  btnPress: {
    borderColor: "#FBEDEA",
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 30,
  },
  textContainer: {
    margin: 30,
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
    fontFamily: "Mulish_600SemiBold_Italic",
  },
});
