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
  container: {
    margin: 10,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    //justifyContent: "space-between",
    width: "90%",
    height:"55%",
    //border: "2",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#36827F",
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
    //marginTop: 20,
    //marginBottom:5,
    width: "40%",
    marginLeft:"10",
    borderRadius: 10,
    overflow:false,
  },
  text:{
    color: "#36827F",
    fontFamily: "Mulish_700Bold",
    fontSize: 16,
  },
  textDate: {
    color: "#5C5D8D",
    fontFamily: "Mulish_400Regular",
    fontSize: 13,
  },
  image:{
    width: "85%",
    height:"100%",
    overflow:true,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  }
});