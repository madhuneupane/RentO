import React from "react";
import { Card } from "@rneui/themed";
import { Text } from "@rneui/base";
import { StyleSheet, View } from "react-native";

const OwnerCards = ({ data }) => {
  // console.log("data in owner:;" + JSON.stringify(data));
  const city = JSON.parse(data.location)?.city;

  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Card.Image
          source={{ uri: data.images.bedrooms.back }}
          style={{ width: "90%" }}
        ></Card.Image>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.type}>Cozy {data.type}</Text>
        <Text style={styles.location}>{`on ${city}`}</Text>
        <Text style={styles.date}>Created 6 Dec</Text>
      </View>
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
  },
  date: {
    marginTop: 5,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // Other container styles if needed
  },
  container: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "95%",
    border: "2",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black",
    backgroundColor: "#E9E7EE",
    padding: 10,
    fontSize: 0.5,
    // height: 20,
    // borderRadius: 1,
    // padding: 10,
  },
  viewContainer: {
    // // margin: 0,
    // flexDirection: "row",
    // alignItems: "center",
    // // justifyContent: "flex-start",
    // // width: "auto",
    width: "50%",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    // Other container styles if needed
  },
  type: {
    textAlign: "center",
    width: "100%", // Adjust the width as needed
    // Other text styles for data.type
  },
  location: {
    textAlign: "center",
    width: "100%", // Adjust the width as needed
    // Other text styles for data.location
  },
  submitButton: {
    backgroundColor: "#36827F",
    borderColor: "#36827F",
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
});
