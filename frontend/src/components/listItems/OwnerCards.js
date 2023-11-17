import React from "react";
import { Card } from "@rneui/themed";
import { Text } from "@rneui/base";
import { StyleSheet, View } from "react-native";

const OwnerCards = ({ data }) => {
  const city = JSON.parse(data.location)?.city;

  return (
    <View style={styles.container}>
      {/* <Text>{JSON.stringify(data)}</Text> */}

      <View style={styles.viewContainer}>
        <Card.Image

          source={{ uri: data.images.bedrooms?.back }}
          style={styles.image}

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
    fontFamily:"Mulish_500Medium",
  },
  date: {
    marginTop: 5,
    color: "#5C5D8D",
    fontFamily: "Mulish_400Regular",
    fontSize: 13,
    paddingRight: 50,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // Other container styles if needed
  },
  container: {
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "90%",
    height: "80%",
    //border: "2",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#3B6665",
    backgroundColor: "#E9E7EE",
    //padding: 10,
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
    overflow:false,
  },
  image:{
    width: "75%",
    height:"100%",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    //paddingLeft: 50,
    // Other container styles if needed
  },
  type: {
    paddingRight: 55,
    color: "#3B6665",
    fontFamily: "Mulish_700Bold",
    fontSize: 15,
    textAlign: "center",
    width: "100%", // Adjust the width as needed
    // Other text styles for data.type
  },
  location: {
    paddingRight: 55,
    color: "#3B6665",
    fontFamily: "Mulish_700Bold",
    fontSize: 15,
    textAlign: "center",
    width: "100%", // Adjust the width as needed
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
});
