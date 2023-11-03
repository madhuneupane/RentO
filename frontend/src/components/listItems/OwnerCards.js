import React from "react";
import { Card } from "@rneui/themed";
import { Text } from "@rneui/base";
import { StyleSheet, View } from "react-native";
const OwnerCards = ({ data }) => {
  return (
    <Card containerStyle={styles.container}>
      <View style={styles.viewContainer}>
        <View>
          <Card.Image
            source={{ uri: data.images.bedrooms }}
            style={{ width: "100%" }}
          ></Card.Image>
        </View>
        <View>
          <Text>{data.title}</Text>
        </View>
      </View>
    </Card>
  );
};

export default OwnerCards;

const styles = StyleSheet.create({
  container: {
    // margin: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "90%",
    // height: "40%",
    // borderRadius: 1,
    // padding: 10,
  },
  viewContainer: {
    // margin: 0,
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "flex-start",
    // width: "auto",
  },
});
