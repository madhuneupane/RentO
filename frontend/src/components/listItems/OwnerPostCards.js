import React from "react";
import { Card } from "@rneui/themed";
import { StyleSheet, TouchableOpacity, View,Image } from "react-native";
import { Text } from "@rneui/base";
const OwnerPostCards = ({ data, getTenant }) => {
  console.log("card lis::" + JSON.stringify(data));
  return (
    <TouchableOpacity onPress={() => getTenant(data)} style={styles.main}>
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <Image
            source={{ uri: data.images.bedrooms.back }}
            style={styles.image}
          ></Image>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
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
    // height: "80%",
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
   
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  }
});
