import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import OwnerPosts from "./OwnerPosts";

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.edit}>
        <MaterialCommunityIcons
          name="cookie-edit"
          size={30}
          color={"#3B6665"}
        ></MaterialCommunityIcons>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/app1-504b3.appspot.com/o/SevenKnightGroupPhotos%2FMadhu.jpg?alt=media&token=407e2460-c652-4272-84e7-34317e68ea97&_gl=1*tk3ds5*_ga*ODc0MzgwNzQ3LjE2OTgzNjA5MzY.*_ga_CW55HF8NVT*MTY5OTI5MzMzOS4xNy4xLjE2OTkyOTMzNTMuNDYuMC4w",
          }}
        />
      </View>

      <Text style={styles.text}>Madhu Nyoupane</Text>

      <View style={styles.contactContainer}>
        <Text style={styles.contact}>+1-236-514-9569</Text>
        <Text style={styles.contact}>nyoupanemadhu07@gmail.com</Text>
      </View>
      <View style={styles.leftAlign}>
        <Text style={{ marginTop: 10 }}>Lives in Vancouver BC</Text>
        <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "bold" }}>
          About Me
        </Text>
        <Text style={{ marginTop: 10 }}>My wife and I are from Spain,</Text>
        <Text> but we love all recreation and beauty of Vancouver.</Text>
        <Text> We love to travel and explore new places.</Text>
        <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "bold" }}>
          My Posts
        </Text>

        <OwnerPosts />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
  },
  imageContainer: {
    width: 150, // Adjust the size of the circle as needed
    height: 150,
    borderRadius: 75, // Set the borderRadius to half the width and height to create a circle
    overflow: "hidden", // Clip the image to the circular shape
    alignItems: "center", // Center the text horizontally
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    marginTop: 20, // Adjust the spacing between the image and text
    color: "#3B6665",
    fontWeight: "bold",
    fontSize: 20,
  },
  contactContainer: {
    display: "flex",
    alignItems: "center",
    borderColor: "#ED7861",
    borderRadius: 10,
    borderWidth: 2,
    width: 300,
    height: 80,
    marginTop: 10,
    backgroundColor: "#f7dbd5",
  },
  contact: {
    fontSize: 15,
    marginTop: 10,
    textDecorationLine: "underline",
    color: "#ED7861",
  },
  leftAlign: {
    marginLeft: 10,
  },
  edit: {
    // backgroundColor: "green",
    width: 80,
    height: 30,
    marginLeft: "85%",
  },
});

export default UserProfile;
