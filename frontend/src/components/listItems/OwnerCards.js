import React from "react";
import { Card } from "@rneui/themed";
import { Text } from "@rneui/base";
import { StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const OwnerCards = ({ data, adj }) => {
  const city = JSON.parse(data.location)?.city;
  console.log("OwnerCards::::" + JSON.stringify(data));
  return (
    <View style={styles.container}>
      {/* <Text>{JSON.stringify(data)}</Text> */}

      <View style={styles.viewContainer}>
        <Card.Image
          source={{ uri: data.coverImage[1] }}
          style={styles.image}
        ></Card.Image>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.type}>
          {adj} {data.type}
        </Text>
        <Text style={styles.location}>{`in ${city}`}</Text>
        <Text style={styles.date}>Created 6 Dec</Text>
      </View>
      <MaterialCommunityIcons
        name="chevron-right"
        size={37}
        style={styles.chevron}
      />
    </View>
  );
};
export default OwnerCards;
const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 120,
  },
  customStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Mulish_700Bold",
  },
  date: {
    marginTop: 10,
    textAlign: "left",
    color: "#5C5D8D",
    fontFamily: "Mulish_700Bold",
    fontSize: 14,
    paddingRight: 30,
    marginLeft: -53,
  },

  container: {
    flex: 1,
    marginTop: 15,
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "92%",
    height: "99%",
    //border: "2",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#3B6665",
    backgroundColor: "#E9E7EE",
    paddingRight: 70,
    //padding: 10,
    // height: 20,
    // borderRadius: 1,
    // padding: 10,
  },
  viewContainer: {
    marginLeft: 85,
    // flexDirection: "row",
    // alignItems: "center",
    // // justifyContent: "flex-start",
    // // width: "auto",
    width: "36%",
    overflow: false,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textContainer: {
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    //height: "90%",
  },
  type: {
    color: "#3B6665",
    fontFamily: "Mulish_700Bold",
    fontSize: 18,
    textAlign: "left",
    marginLeft: -25,
    // width: "100%", // Adjust the width as needed
    // Other text styles for data.type
  },
  location: {
    // paddingRight: 55,
    color: "#3B6665",
    fontFamily: "Mulish_700Bold",
    fontSize: 18,
    textAlign: "left",
    marginTop: 3,
    marginLeft: 400,
    width: "111%", // Adjust the width as needed
    // Other text styles for data.location
  },
  submitButton: {
    backgroundColor: "#3B6665",
    borderColor: "#3B6665",
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
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
  chevron: {
    color: "#3B6665",
    marginRight: 20,
  },
});
