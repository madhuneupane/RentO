import { all } from "axios";
import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import interestedTenant from "../hooks/interestedTenant";
import { Card } from "@rneui/themed";
import { StyleSheet } from "react-native";
const TenantInterested = ({ navigation, route }) => {
  const { ids, type, location } = route.params;
  const [allTenants, setTenants] = useState([]);

  const images = [
    require("../../../assets/jhon.jpeg"),
    require("../../../assets/jhon.jpeg"),
    require("../../../assets/jhon.jpeg"),
    require("../../../assets/Jhon2.jpeg"),
    require("../../../assets/jhon.jpeg"),
  ];

  interestedTenant(setTenants);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tenant Matches</Text>
      <Text style={styles.subheading}>
        Cozy {type} on {JSON.parse(location).city}
      </Text>
      <Text style={styles.text}>
        Review the renters' profiles that have matched with your criteria
      </Text>
      {allTenants &&
        allTenants.map((item, index) => {
          if (ids.includes(item._id)) {
            return (
              <View style={styles.maincard}>
                <View style={styles.card}>
                  <Image source={images[index]} style={styles.image} />
                  <View style={styles.desc}>
                    <Text style={styles.name}>
                      {item.firstName} {item.lastName}
                    </Text>
                    <Text style={styles.email}>connect: {item.email}</Text>
                  </View>
                </View>
              </View>
            );
          }
        })}
    </View>
  );
};

export default TenantInterested;
const styles = StyleSheet.create({
  maincard: {
    width: "95%",
    height: "25%",
    marginLeft: 15,
  },
  image: {
    width: 80,
    height: 80,
    margin: 15,
    borderRadius: 50,
    marginTop: 13,
  },
  container: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 30,
    color: "#413855",
    fontFamily: "Mulish_700Bold",
  },
  subheading: {
    fontSize: 22,
    color: "#2B6866",
    fontFamily: "Mulish_700Bold",
    marginTop: 15,
  },
  text: {
    color: "#5C5D8D",
    fontSize: 18,
    marginTop: 18,
    fontFamily: "Mulish_700Bold",
    textAlign: "center",
  },
  desc: {
    justifyContent: "center",
    marginLeft: 25,
  },
  card: {
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 8,
    width: "95%",
    // height: "22%",
    borderColor: "#3B6665",
    backgroundColor: "#E9E7EE",
    flexDirection: "row",
    // paddingLeft: 20,
    // marginBottom: 4,
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
  },
});
