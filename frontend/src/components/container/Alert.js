import { all } from "axios";
import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import interestedTenant from "../hooks/interestedTenant";
import { Card } from "@rneui/themed";
import { StyleSheet } from "react-native";
const Alerts = ({ navigation }) => {
  const [allTenants, setTenants] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Alerts</Text>
      <Text style={styles.subheading}>Today</Text>
      <View style={styles.cardView}></View>
      <View style={styles.card}>
        <Image
          source={require("../../../assets/house2.jpeg")}
          style={styles.image}
        />
        <View style={styles.desc}>
          <Text style={styles.name}>Lease Agreement Ready</Text>
          <Text style={styles.email}>
            Congratulations! Your lease agreement is ready for review and
            signing.
          </Text>
          <Text style={styles.date}>2 days ago</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require("../../../assets/house.jpeg")}
          style={styles.image}
        />
        <View style={styles.desc}>
          <Text style={styles.name}>Proof of Funds Requested</Text>
          <Text style={styles.email}>
            Exciting news! Your application for unit located at Vancouver, BC is
            progressing.
          </Text>
          <Text style={styles.date}>2 days ago</Text>
        </View>
      </View>
    </View>
  );
};

export default Alerts;
const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    margin: 5,
    borderRadius: 50,
    marginTop: 13,
  },
  container: {
    marginTop: 40,
    // marginLeft: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  heading: {
    fontSize: 28,
    color: "#3B6665",
    fontFamily: "Mulish_700Bold",
    marginLeft: 0,
    marginLeft: 20,
  },
  subheading: {
    fontSize: 22,
    color: "#5C5D8D",
    fontFamily: "Mulish_700Bold",
    marginTop: 20,
    marginBottom: -10,
    marginLeft: 20,
  },
  text: {
    color: "#5C5D8D",
    fontSize: 18,
    marginTop: 18,
    fontFamily: "Mulish_500Medium",
    textAlign: "center",
  },
  desc: {
    justifyContent: "center",
    marginLeft: 15,
  },
  card: {
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 8,
    width: "95%",
    height: "28%",
    borderColor: "#3B6665",
    backgroundColor: "#E9E7EE",
    flexDirection: "row",
    paddingLeft: 20,
    marginBottom: 20,
  },
  cardView: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    color: "#2B6866",
    fontSize: 18,
    fontFamily: "Mulish_700Bold",
  },
  email: {
    color: "#5C5D8D",
    fontSize: 16,
    fontFamily: "Mulish_500Medium",
    textAlign: "left",
    width: "38%",
    marginTop: 10,
  },
  date: {
    marginLeft: 5,
    marginTop: 10,
    color: "#5C5D8D",
    fontFamily: "Mulish_500Medium",
    textAlign: "left",
  },
});
