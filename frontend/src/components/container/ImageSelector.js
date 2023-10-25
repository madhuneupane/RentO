import React, { useEffect, useReducer, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ImageReducer from "../reducers/ImageReducer";
const ImageSelector = () => {
  const [images, dispatch] = useReducer(ImageReducer, {});
  const cameraPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("Need Gallery Access Permission");
  };

  useEffect(() => {
    cameraPermission();
  }, []);

  const selectImage = async (imageNumber) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result.assets[0].uri);
    if (!result.canceled) {
      console.log("not canceld");
      dispatch({ type: imageNumber, value: result.assets[0].uri });
    }
    console.log("images seleted:" + JSON.stringify(images));
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View>
          <TouchableWithoutFeedback onPress={() => selectImage("image1")}>
            <View>
              <View style={styles.imageContainer}>
                {!images?.image1 ? (
                  <MaterialCommunityIcons name="camera" size="40" />
                ) : (
                  <Image source={{ uri: images.image1 }} style={styles.image} />
                )}
              </View>
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.text}>Left Wall</Text>
        </View>

        <View>
          <TouchableWithoutFeedback onPress={() => selectImage("image2")}>
            <View>
              <View style={styles.imageContainer}>
                {!images?.image2 ? (
                  <MaterialCommunityIcons name="camera" size="40" />
                ) : (
                  <Image source={{ uri: images.image2 }} style={styles.image} />
                )}
              </View>
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.text}>Right Wall</Text>
        </View>

        <View>
          <TouchableWithoutFeedback onPress={() => selectImage("image3")}>
            <View>
              <View style={styles.imageContainer}>
                {!images?.image3 ? (
                  <MaterialCommunityIcons name="camera" size="40" />
                ) : (
                  <Image source={{ uri: images.image3 }} style={styles.image} />
                )}
              </View>
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.text}>Front Wall</Text>
        </View>

        {/* 2nd Column  */}
      </View>
      <View style={styles.container}>
        <View>
          <TouchableWithoutFeedback onPress={() => selectImage("image4")}>
            <View>
              <View style={styles.imageContainer}>
                {!images?.image4 ? (
                  <MaterialCommunityIcons name="camera" size="40" />
                ) : (
                  <Image source={{ uri: images.image4 }} style={styles.image} />
                )}
              </View>
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.text}>Back Wall</Text>
        </View>

        <View>
          <TouchableWithoutFeedback onPress={() => selectImage("image5")}>
            <View>
              <View style={styles.imageContainer}>
                {!images?.image5 ? (
                  <MaterialCommunityIcons name="camera" size="40" />
                ) : (
                  <Image source={{ uri: images.image5 }} style={styles.image} />
                )}
              </View>
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.text}>Ceiling</Text>
        </View>

        <View>
          <TouchableWithoutFeedback onPress={() => selectImage("image6")}>
            <View>
              <View style={styles.imageContainer}>
                {!images?.image6 ? (
                  <MaterialCommunityIcons name="camera" size="40" />
                ) : (
                  <Image source={{ uri: images.image6 }} style={styles.image} />
                )}
              </View>
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.text}>Floor</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    marginTop: "30%",
    padding: "3px",
  },
  container: {
    flexDirection: "row",
    margin: 10,
    // alignItems: 'center',
    justifyContent: "space-around",
    // height: "100%",
    // backgroundColor: "pink",
    width: "100%",
  },
  imageContainer: {
    backgroundColor: "grey",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default ImageSelector;
