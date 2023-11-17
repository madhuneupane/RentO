import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import NewListing from "../../../assets/New-Listing-Start-.svg";
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
            width={"56"}
            height={"56"}
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
    marginLeft: 90,
    marginRight: 90,
    backgroundColor: "#3B6665",
    width: "95",
    height: "55%",
    // position: "absolute",
    // bottom: 30,
    borderWidth: 1,
    borderColor: "#3B6665",
    padding: 10,
    borderRadius : "10.81"
  },
  text: {
    color: "#413855",
    marginTop: 120,
    marginLeft: 65,
    fontSize: 24,
    fontFamily: "Mulish_700Bold",
  },
  newlisting: {
    marginTop: 5,
    color: "white",
    fontFamily: "Mulish_700Bold",
    fontSize: 22,
    
  },
});
