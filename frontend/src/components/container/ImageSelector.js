import React, { useEffect, useReducer, useState } from "react";
import { firebaseConfig } from "../hooks/firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
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

    console.log("images seleted:" + {result});
    if (!result.canceled) {
      console.log("not canceld");
      dispatch({ type: imageNumber, value: result.assets[0].uri });


      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function (e) {
          console.log(e);
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", result.assets[0].uri, true);
        xhr.send(null);
      });
    
      const fileRef = ref(getStorage(),`RentO/${result.assets[0].uri}` );
      const result1 = await uploadBytes(fileRef, blob);
    
      blob.close();
    
      const h= await getDownloadURL(fileRef);
      console.log(h);
    }

    console.log("images seleted:" + result);
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
