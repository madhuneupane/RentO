import React from "react";
import { Card } from "@rneui/themed";
import { Text } from "@rneui/base";
import { StyleSheet, View } from "react-native";
const OwnerCards = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Card.Image
          source={{ uri: data.images.bedrooms.back }}
          style={{ width: "90%"}}
        ></Card.Image>
      </View>
      <View style={styles.textContainer}>
          <Text style={styles.type}>{data.type}</Text>
          <Text style={styles.location}>{`on ${data.location}`}</Text>
        </View>
    </View>
  );
};
export default OwnerCards;
const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 0.5
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
    alignItems: 'center',
    justifyContent: 'center',
    // Other container styles if needed
  },
  type: {
    textAlign: 'center',
    width: "100%", // Adjust the width as needed
    // Other text styles for data.type
  },
  location: {
    textAlign: 'center',
    width: "100%", // Adjust the width as needed
    // Other text styles for data.location
  }
});