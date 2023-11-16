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

                <Text style={styles.name}>{item.firstName}</Text>
                <Text style={styles.email}>connect: madhu@gmail.com</Text>

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
    fontSize: 26,
    color: "#413855",
    fontFamily: "Mulish_700Bold",
  },
  subheading: {
    fontSize: 22,
    color: "#2B6866",
    fontFamily: "Mulish_600SemiBold",
    marginTop: 15,
  },
  text: {
    color: "#5C5D8D",
    fontSize: 18,
    marginTop: 10,
    fontFamily: "Mulish_500Medium",
    textAlign: "center"
  },
  card: {
    margin: 30,
    borderWidth: 1,
    borderRadius: 8,
    width: "95%",
    height: "25%",
    borderColor: "#36827F",
    backgroundColor: "#E9E7EE",
    justifyContent: "center",

    flexDirection: "row",

    alignItems: "left",
    paddingLeft: 50
  },
  name: {
    color: "#2B6866",
    fontSize: 18,
    fontFamily: "Mulish_600SemiBold",

  },
  email: {
    color: "#5C5D8D",
    fontSize: 16,
    fontFamily: "Mulish_500Medium",
  }
});
