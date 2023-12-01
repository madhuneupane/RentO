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
        Cozy {type} on {JSON.parse(location).city}
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
                 source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/app1-504b3.appspot.com/o/SevenKnightGroupPhotos%2FMadhu.jpg?alt=media&token=407e2460-c652-4272-84e7-34317e68ea97&_gl=1*tk3ds5*_ga*ODc0MzgwNzQ3LjE2OTgzNjA5MzY.*_ga_CW55HF8NVT*MTY5OTI5MzMzOS4xNy4xLjE2OTkyOTMzNTMuNDYuMC4w",
                }}
                  style={styles.image}
                />
                <View style={styles.desc}>
                  <Text style={styles.name}>{item.firstName} {item.lastName}</Text>
                  <Text style={styles.email}>connect: {item.email}</Text>
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
    margin: 5,
    borderRadius:50,
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
    textAlign: "center"
  },
  desc: {
    justifyContent: "center",
    marginLeft: 15,
  },
  card: {
    margin: 30,
    borderWidth: 1,
    borderRadius: 8,
    width: "95%",
    height: "28%",
    borderColor: "#3B6665",
    backgroundColor: "#E9E7EE",
    flexDirection: "row",
    paddingLeft: 20,
    marginBottom: 4,
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
  }
});
