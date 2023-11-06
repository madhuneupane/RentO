import React from "react";
import { Card } from "@rneui/themed";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "@rneui/base";
const OwnerPostCards = ({ data, getTenant }) => {
  console.log("card lis::" + JSON.stringify(data));
  return (
    <TouchableOpacity onPress={() => getTenant(data)}>
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <Card.Image
            source={{ uri: data.images.bedrooms.back }}
            style={{ width: "100%" }}
          ></Card.Image>
        </View>
        <View>
          <Text>
            {data.type} on {data.location}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OwnerPostCards;
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
