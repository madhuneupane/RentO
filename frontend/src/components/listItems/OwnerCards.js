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
          style={{ width: "100%" }}
        ></Card.Image>
      </View>
      <View>
        <Text>
          {data.title} on {data.location}
        </Text>
      </View>
    </View>
  );
};

export default OwnerCards;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "90%",
    border: "2",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black",
    backgroundColor: "#E9E7EE",
    padding: 10,
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
});
