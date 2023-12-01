import React from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import OwnerPosts from "./OwnerPosts";
const UserProfile = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.edit}>
          <MaterialCommunityIcons
            name="cookie-edit"
            size={30}
            color={"#3B6665"}
          />
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
          <Text style={styles.contact}> Vancouver, BC</Text>
          <Text style={styles.contact}>+1(236)-514-9569</Text>
          <Text style={styles.contact}>nyoupanemadhu07@gmail.com</Text>
        </View>
        <View style={styles.leftAlign}>
          <Text style={styles.titles}>About Me</Text>
          <Text style={styles.textBody}>
            <Text>My wife and I are from Spain,</Text>
            <Text> but we love all recreation</Text>
            <Text> and beauty of Vancouver.</Text>
            <Text> We love to travel and explore new places </Text>
            <Text> and thats why we rent ours houses!</Text>
          </Text>
          <Text style={styles.titlePost}>My Posts</Text>
          <View style={styles.postCard}> 
            <OwnerPosts />
          </View>
          <View style={styles.makeRoom}></View>
        </View>
      </View>
    </ScrollView>
  );
};
export default UserProfile;
const styles = StyleSheet.create({
  scrollContainer: {
    marginTop: 20,
    flexGrow: 1,
    height: 1300,
  },
  container: {
    marginTop: 15,
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    width: 140, // Adjust the size of the circle as needed
    height: 140,
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
    fontFamily: "Mulish_800ExtraBold",
  },
  contactContainer: {
    display: "flex",
    alignItems: "center",
    borderColor: "#ED7861",
    borderRadius: 10,
    borderWidth: 2,
    width: 300,
    height: 105,
    marginTop: 18,
    marginBottom: 18,
    backgroundColor: "#F7DBD5",
    fontFamily: "Mulish_400Regular",
  },
  contact: {
    fontSize: 15,
    marginTop: 10,
    color: "#ED7861",
    fontFamily: "Mulish_400Regular",
  },
  leftAlign: {
    marginLeft: 10,
    fontFamily: "Mulish_400Regular",
  },
  edit: {
    // backgroundColor: "green",
    width: 80,
    height: 30,
    marginLeft: "85%",
  },
  textBody: {
    fontFamily: "Mulish_400Medium",
    marginBottom: 15,
    color: "#413855",
    paddingRight: 23,
    paddingLeft: 20,
  },
  makeRoom: {
    height: 400,
  },
  titles: {
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Mulish_800ExtraBold",
    marginTop: 5,
    marginBottom: 10,
    color: "#413855",
    marginLeft: 20,
  },
  titlePost: {
    color: "#413855",
    fontSize: 20,
    fontFamily: "Mulish_800ExtraBold",
    marginTop: 2,
    marginLeft: 20,
  },
  postCard: {
  width:430
  },
});
