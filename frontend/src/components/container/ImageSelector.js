import React, { useEffect, useReducer, useState } from "react";
import { firebaseConfig } from "../hooks/firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
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
import ButtonUI from "../UI/button/ButtonUI";
const ImageSelector = ({ navigation, route }) => {
  const ownerGivenData = route.params;
  const [images, dispatch] = useReducer(ImageReducer, {});
  const [ownerData, setOwnerData] = useState();
  const [firebaseImages, setFirebaseImage] = useState(false);
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
      quality: 0,
    });
    console.log("images seleted:" + JSON.stringify(result.assets[0]) );
    if (!result.canceled) {
      dispatch({ type: imageNumber, value: result.assets[0].uri });
    }
  };
  useEffect(() => {
    setOwnerData({ ...ownerGivenData, images: images });
  }, [images]);
  const uploadImages = () => {
    console.log("upload Image", JSON.stringify(ownerData));
    navigation.navigate("owner_onboarding5", {
      ownerData: ownerData,
      imageUploaded: true,
    });
  };
  const saveImages = async() => {
    console.log('WE ARE INSIDE',ownerData.images);
    if(ownerData.images){
      for (const imageKey in ownerData.images) {
        const imageUri = ownerData.images[imageKey];
       if(imageUri){
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
          xhr.open("GET", imageUri, true);
          xhr.send(null);
        });
        //console.log("line 60");
        const fileRef = ref(getStorage(),`RentO/${imageUri}` );
        const result1 = await uploadBytes(fileRef, blob);
       // console.log("line 64");
        // We're done with the blob, close and release it
        blob.close();
        //console.log("line 67");
        const h= await getDownloadURL(fileRef);
        console.log(h);
        ownerData.images[imageKey]= h;
       }
      }
    }
    setFirebaseImage(true);
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
      {images.image6 && !firebaseImages && (
        <ButtonUI
          item={{ value: "upload Images" }}
          selectedItems={saveImages}
        />
      )}
      {firebaseImages && (
        <ButtonUI item={{ value: "Continue" }} selectedItems={uploadImages} />
      )}
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