import { all } from "axios";
import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import interestedTenant from "../hooks/interestedTenant";
import { Card } from "@rneui/themed";
import { StyleSheet } from "react-native";
const TenantInterested = ({ navigation, route }) => {
  const { ids, type, location } = route.params;
  const [allTenants, setTenants] = useState([]);
  console.log("ids::::" + ids);

  interestedTenant(setTenants);
  console.log("allTenants:::" + JSON.stringify(allTenants));
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tenant Matches</Text>
      <Text style={styles.subheading}>
        {type} on {JSON.parse(location).city}
      </Text>
      <Text style={styles.text}>
        Review the renters' profiles that have matched with your criteria
      </Text>
      {allTenants &&
        allTenants.map((item) => {
          if (ids.includes(item._id)) {
            console.log("tentant:::::" + JSON.stringify(item));
            return (
              <View style={styles.card}>
                <Image
                  source={require("../../../assets/Kayla-Person.jpg")}
                  style={styles.image}
                />

                <View>
                  <Text>{item.firstName}</Text>
                  <Text>connect: madhu@gmail.com</Text>
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
  image: {
    width: 80,
    height: 80,
    margin: 10,
  },
  container: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 30,
  },
  subheading: {
    fontWeight: "bold",
    fontSize: 15,
    margin: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    margin: 10,
  },
  card: {
    borderWidth: 1,
    borderRadius: 1,
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
