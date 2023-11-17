import React from "react";
import { Card } from "@rneui/themed";
import { Text } from "@rneui/base";
import { StyleSheet, TouchableOpacity, View } from "react-native";
const OwnerCards = ({ data, getTenant }) => {
  const location = JSON.parse(data.location)?.city;

  return (
    <TouchableOpacity onPress={() => getTenant(data)}>
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <Card.Image

            source={{ uri: data.images.bedrooms?.back }}
            style={styles.image}

          ></Card.Image>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.type}>{data.type}</Text>
          <Text style={styles.location}>{` in ${location}`}</Text>
          <Text style={styles.match}>You have 1 tenant matches</Text>
        </View>

      </View>
    </TouchableOpacity>
  );
};
export default OwnerCards;
const styles = StyleSheet.create({
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
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#3B6665",
    backgroundColor: "#E9E7EE",
    
  },
  viewContainer: {
    width: "43%",
    overflow:false,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 35,
    // Other container styles if needed
  },
  type: {
    //paddingRight: 65,
    color: "#3B6665",
    fontFamily: "Mulish_700Bold",
    fontSize: 18,
    textAlign: "center",
    width: "100%", // Adjust the width as needed
    // Other text styles for data.type
  },
  location: {
    //paddingRight: 65,
    color: "#3B6665",
    fontFamily: "Mulish_700Bold",
    fontSize: 17,
    textAlign: "center",
    width: "100%", // Adjust the width as needed
    // Other text styles for data.location
  },
  match:{
    alignContent:"center",
    justifyContent:"center",
    color: "#5C5D8D",
    paddingTop:15,
    fontFamily: "Mulish_500Medium",
    fontSize: 13,
  },
  image:{
    width: "75%",
    //height:"100%",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
});
