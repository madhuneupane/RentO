import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import NewListing from "../../../assets/NewListing.svg";
const OwnerNewListingStart = ({ navigation, route }) => {
  const start = () => {
    navigation.navigate("owner_onboarding1");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create your first listing</Text>
      <TouchableOpacity onPress={start}>
        <View style={styles.button}>
          <NewListing
            width={"70"}
            height={"40"}
            fill="white"
            // style={{ backgroundColor: "white" }}
          />
          <Text style={styles.newlisting}> New Listing</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OwnerNewListingStart;

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    marginLeft: 110,
    backgroundColor: "#36827F",
    width: "40%",
    height: "50%",
    // position: "absolute",
    // bottom: 30,
    borderWidth: 1,
    borderColor: "#36827F",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    marginTop: 60,
    marginLeft: 60,
    fontSize: 25,
    fontFamily: "Mulish_700Bold",
  },
  newlisting: {
    marginTop: 10,
    color: "white",
    fontFamily: "Mulish_700Bold",
    fontSize: 18,
  },
});
