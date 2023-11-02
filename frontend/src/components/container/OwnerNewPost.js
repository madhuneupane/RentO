import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { StackActions } from "@react-navigation/native";
import ButtonUI from "../UI/button/ButtonUI";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const OwnerNewPost = ({ navigation, route }) => {
  var [isSubmitPress, setIsSubmitPress] = useState(false);
  var touchPropsSubmit = {
    underlayColor: "#B1D4D2",
    style: isSubmitPress ? styles.submitButtonClicked : styles.submitButton,
    onHideUnderlay: () => setIsSubmitPress(false),
    onShowUnderlay: () => setIsSubmitPress(true),
  };
  const item = route.params;
  console.log("item:" + JSON.stringify(item));
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [
    require("../../../assets/house2.jpg"),
    require("../../../assets/house3.jpg"),
    require("../../../assets/house4.jpg"),
    // Add more image paths
  ];
  const showTour = () => {
    //navigation.navigate("")
    console.log("click");
  };
  const savePost = () => {
    // StackActions.push("owner");
    navigation.navigate("post_created");
  };
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.mainImageContainer}>
        {/* Gallery Header Image */}
        <ImageBackground
          source={require("../../../assets/house1.jpeg")}
          style={{ width: 390, height: 423, overflow: true }}
        >
          <View style={styles.verifiedContainer}>
            <View>
              <MaterialCommunityIcons
                name="check-circle"
                size={20}
                color="white"
              />
            </View>
            <Text style={styles.verified}>Verified</Text>
          </View>
        </ImageBackground>

        {/* Thumbnail Gallery */}
        <ScrollView horizontal>
          {images.map((imagePath, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleImageClick(index)}
            >
              <Image
                source={imagePath}
                style={{
                  width: 130,
                  height: 250,
                  margin: 2,
                  // borderWidth: selectedImage === index ? 2 : 0,
                }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <ButtonUI
          item={{ value: "3D Tour Available" }}
          // customStyle={styles.button}
          selectedItems={showTour}
          customStyle={styles.customStyle}
          touchProps={touchPropsSubmit}
        />

        <View style={styles.subContainer}>
          <View style={styles.edit}>
            <MaterialCommunityIcons
              name="cookie-edit"
              size={30}
              color={"#36827F"}
            ></MaterialCommunityIcons>
          </View>
          <View>
            <Text style={styles.rent}>${item.rent}</Text>
            <Text style={styles.location}>{item.location}</Text>
            <Text style={styles.rooms}>
              {item.roomNumbers} bd | {item.bathRoomNumbers} ba | {item.type}
            </Text>
          </View>
        </View>
        <View style={styles.subContainer}>
          <View style={styles.edit}>
            <MaterialCommunityIcons
              name="cookie-edit"
              size={30}
              color={"#36827F"}
            ></MaterialCommunityIcons>
          </View>
          <Text style={styles.title}>Description</Text>
          <View style={styles.descView}>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
        </View>
        <View style={styles.subContainer}>
          <View style={styles.edit}>
            <MaterialCommunityIcons
              name="cookie-edit"
              size={30}
              color={"#36827F"}
            ></MaterialCommunityIcons>
          </View>
          <Text style={styles.title}>Amenities</Text>
          <View style={styles.amenitiesTextView}>
            <View>
              <Text style={styles.textView}>
                {item.amenities?.pet ? "Pet friendly" : "Pet friendly"}
              </Text>
              <Text style={styles.textView}>
                {item.amenities?.wifi ? "Wi-fi" : "Wi-fi"}
              </Text>
              <Text style={styles.textView}>TV</Text>
            </View>
            <View>
              <Text style={styles.textView}>
                {item.amenities?.parkingSpace ? "Parking" : "Parking"}
              </Text>
              <Text style={styles.textView}>
                {item.amenities?.washerDryer
                  ? "In-unit laundry"
                  : "In-unit laundry"}
              </Text>
              <Text style={styles.textView}>
                {item.amenities?.airConditioning
                  ? "Air Conditioning"
                  : "Air Conditioning"}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.subContainer}>
          <View style={styles.edit}>
            <MaterialCommunityIcons
              name="cookie-edit"
              size={30}
              color={"#36827F"}
            ></MaterialCommunityIcons>
          </View>
          <Text style={styles.title}>Property Owner</Text>
          <Text style={{ ...styles.textView, marginTop: 10, marginBottom: 20 }}>
            Madhu Sharma
          </Text>
        </View>

        <ButtonUI
          item={{ value: "See applicants" }}
          selectedItems={savePost}
          customStyle={styles.customStyle}
          touchProps={touchPropsSubmit}
        />

        <View style={styles.subContainer}>
          <View style={styles.edit}>
            <MaterialCommunityIcons
              name="cookie-edit"
              size={30}
              color={"#36827F"}
            ></MaterialCommunityIcons>
          </View>
          <Text style={styles.title}>Location</Text>
          <Image
            source={require("../../../assets/map.png")}
            style={styles.mapView}
          ></Image>
        </View>
      </View>
    </ScrollView>
  );
};
export default OwnerNewPost;

const styles = StyleSheet.create({
  verified: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  verifiedContainer: {
    backgroundColor: "#36827F",
    width: 90,
    height: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 15,
    alignItems: "center",
    position: "absolute",
    right: 20,
    marginTop: 10,
  },
  mapView: {
    marginTop: 10,
    width: "95%",
    height: "30%",
  },
  amenitiesTextView: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "75%",
    marginBottom: 10,
  },
  edit: {
    // backgroundColor: "green",
    width: 80,
    height: 30,
    marginLeft: "85%",
  },
  subContainer: {
    marginTop: "5%",
    marginLeft: 20,
    // flexDirection: "row",
    // justifyContent: "space-around",
  },
  textView: {
    fontSize: 16,
    color: "#5C5D8D",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  descView: {
    width: "90%",
    // marginLeft: 30,
  },
  desc: {
    marginTop: 10,
    fontSize: 18,
  },
  rent: {
    fontSize: 30,
    color: "#36827F",
    fontWeight: "bold",
  },
  location: {
    fontSize: 25,
    margin: 5,
  },
  rooms: {
    fontSize: 15,
    margin: 7,
  },
  mainImageContainer: {
    borderRadius: 20,
  },
  customStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  submitButton: {
    backgroundColor: "#36827F",
    borderColor: "#36827F",

    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  submitButtonClicked: {
    backgroundColor: "#B1D4D2",
    borderColor: "#B1D4D2",
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
});

{
  /* <Text>{console.log("owner new post :::" + JSON.stringify(data))}</Text>
      <Text>Title:{data.title}</Text>
      <Text>Type:{data.type}</Text>
      <Text>Amenities:{data.type}</Text>
      <Text>Pet:{data.amenities.pet}</Text> */
}
{
  /* </View> */
}