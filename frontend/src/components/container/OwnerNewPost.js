import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  Modal,
} from "react-native";
import { StackActions } from "@react-navigation/native";
import ButtonUI from "../UI/button/ButtonUI";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PostCreated from "./postCreated";

const OwnerNewPost = ({ navigation, route }) => {
  const [isSubmitPress, setIsSubmitPress] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  var touchPropsSubmit = {
    underlayColor: "#B1D4D2",
    style: isSubmitPress ? styles.submitButtonClicked : styles.submitButton,
    onHideUnderlay: () => setIsSubmitPress(false),
    onShowUnderlay: () => setIsSubmitPress(true),
  };
  const item = route.params;
  console.log("owner post item:::" + JSON.stringify(item));
  const location = JSON.parse(item?.location).city;
  const coverimage = item.coverImage[0];
  console.log("cover images in item:::" + coverimage);
  console.log("item:" + JSON.stringify(item));
  const images = [
    { url: item.coverImage[1] },
    { url: item.coverImage[2] },
    { url: item.coverImage[3] },
    // Add more image paths
  ];
  const showTour = () => {
    //navigation.navigate("")
    // console.log("click");
  };
  const savePost = () => {
    // StackActions.push("owner");
    setModalVisible(true);
    // navigation.navigate("post_created");
  };
  const showListings = () => {
    setModalVisible(false);
    navigation.navigate("Your Listings", { render: true });
  };
  return (
    <>
      {!modalVisible ? (
        <ScrollView style={{ backgroundColor: "white" }}>
          <View style={styles.mainImageContainer}>
            {/* Gallery Header Image */}
            <ImageBackground
              source={{ url: coverimage }}
              style={{ width: 430, height: 423, overflow: true }}
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
                      width: 140,
                      height: 260,
                      margin: 2,
                      // borderWidth: selectedImage === index ? 2 : 0,
                    }}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>

            <Text style={styles.heading}>
              {item.roomNumbers} Bedroom {item.type} on {location}
            </Text>

            <ButtonUI
              item={{ value: "360 Virtual Tour" }}
              // customStyle={styles.button}
              selectedItems={showTour}
              customStyle={
                isSubmitPress
                  ? { ...styles.customStyle, color: "#3B6665" }
                  : styles.customStyle
              }
              touchProps={touchPropsSubmit}
            />

            <View style={styles.subContainer}>
              <View style={styles.edit}>
                <MaterialCommunityIcons
                  name="cookie-edit"
                  size={30}
                  color={"#3B6665"}
                ></MaterialCommunityIcons>
              </View>
              <View>
                <Text style={styles.rent}>${item.rent}</Text>
                <Text style={styles.location}>{location}</Text>
                <Text style={styles.rooms}>
                  {item.roomNumbers} bd | {item.bathRoomNumbers} ba |{" "}
                  {item.type}
                </Text>
              </View>
            </View>
            <View style={styles.subContainer}>
              <View style={styles.edit}>
                <MaterialCommunityIcons
                  name="cookie-edit"
                  size={30}
                  color={"#3B6665"}
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
                  color={"#3B6665"}
                ></MaterialCommunityIcons>
              </View>
              <Text style={styles.title}>Amenities</Text>
              <View style={styles.amenitiesTextView}>
                <Text style={styles.textView}>
                  {item.amenities?.pet ? "Pet friendly" : "Pet friendly"}
                </Text>
                <Text style={styles.textView}>
                  {item.amenities?.wifi ? "Wi-fi" : "Wi-fi"}
                </Text>
                <Text style={styles.textView}>
                  {item.amenities?.wifi ? "Parking" : "Parking"}
                </Text>

                {/* <View>
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
                </View> */}
              </View>
            </View>
            <View style={styles.subContainer}>
              <View style={styles.edit}>
                <MaterialCommunityIcons
                  name="cookie-edit"
                  size={30}
                  color={"#3B6665"}
                ></MaterialCommunityIcons>
              </View>
              <Text style={styles.title}>Property Owner</Text>
              <Text
                style={{ ...styles.textView, marginTop: 10, marginBottom: 20 }}
              >
                Madhu Nyoupane
              </Text>
            </View>

            <ButtonUI
              item={{ value: "See Applicants" }}
              selectedItems={savePost}
              customStyle={
                isSubmitPress
                  ? { ...styles.customStyle, color: "#3B6665" }
                  : styles.customStyle
              }
              touchProps={touchPropsSubmit}
            />

            <View style={styles.subContainer}>
              <View style={styles.edit}>
                <MaterialCommunityIcons
                  name="cookie-edit"
                  size={30}
                  color={"#3B6665"}
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
      ) : (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          // onDismiss={showListings}
        >
          <PostCreated showListings={showListings} />
        </Modal>
      )}
    </>
  );
};
export default OwnerNewPost;

const styles = StyleSheet.create({
  heading: {
    marginTop: 25,
    fontSize: 25,
    color: "#413855",
    textAlign: "center",
    fontFamily: "Mulish_700Bold",
  },
  verified: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Mulish_700Bold",
  },
  verifiedContainer: {
    backgroundColor: "#3B6665",
    width: 100,
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
    height: "29%",
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
    color: "#5C5D8D",
    fontFamily: "Mulish_600SemiBold",
    fontSize: 17,
  },
  title: {
    marginTop: -25,
    fontSize: 25,
    color: "#413855",
    fontFamily: "Mulish_700Bold",
  },
  descView: {
    width: "90%",
    // marginLeft: 30,
  },
  desc: {
    color: "#5C5D8D",
    fontFamily: "Mulish_600SemiBold",
    marginTop: 10,
    fontSize: 18,
  },
  rent: {
    fontSize: 35,
    color: "#3B6665",
    fontFamily: "Mulish_700Bold",
  },
  location: {
    fontSize: 25,
    margin: 5,
    color: "#413855",
    fontFamily: "Mulish_700Bold",
  },
  rooms: {
    fontSize: 15,
    margin: 7,
    color: "#5C5D8D",
    fontFamily: "Mulish_700Bold",
  },
  mainImageContainer: {
    borderRadius: 20,
  },
  customStyle: {
    color: "white",
    fontFamily: "Mulish_700Bold",
    fontSize: 22,
  },
  submitButton: {
    backgroundColor: "#3B6665",
    borderColor: "#3B6665",

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
