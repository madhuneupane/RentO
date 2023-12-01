import React, { useEffect, useReducer, useState } from "react";
import { firebaseConfig } from "../hooks/firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";
import LottieView from "lottie-react-native";
import CameraColor from "../../../assets/CameraColor.svg";
import RentoBack from "../../../assets/rentoBack.svg";
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
  const [firebaseImages, setFirebaseImage] = useState(null);
  const cameraPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("Need Gallery Access Permission");
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  useEffect(() => {
    cameraPermission();
  }, []);

  var [isSubmitPress, setIsSubmitPress] = useState(false);
  var [isCameraPress, setIsCamerasPress] = useState(false);

  var touchPropsSubmit = {
    underlayColor: "#B1D4D2",
    style: isSubmitPress ? styles.submitButtonClicked : styles.submitButton,
    onHideUnderlay: () => setIsSubmitPress(false),
    onShowUnderlay: () => setIsSubmitPress(true),
  };
  var touchPropsCamera = {
    underlayColor: "#FBEDEA",
    style: isCameraPress ? styles.CameraButtonClicked : styles.CameraButton,
    onHideUnderlay: () => setIsCamerasPress(false),
    onShowUnderlay: () => setIsCamerasPress(true),
  };

  const selectImage = async (imageNumber) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 0,
    });

    console.log("images seleted:" + JSON.stringify(result.assets[0]));

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
  const saveImages = async () => {
    setFirebaseImage(true);
    console.log("WE ARE INSIDE", ownerData.images);
    if (ownerData.images) {
      for (const imageKey in ownerData.images) {
        const imageUri = ownerData.images[imageKey];

        if (imageUri) {
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

          const fileRef = ref(getStorage(), `RentO/${imageUri}`);
          const result1 = await uploadBytes(fileRef, blob);
          // console.log("line 64");
          // We're done with the blob, close and release it
          blob.close();
          //console.log("line 67");
          const h = await getDownloadURL(fileRef);
          console.log(h);
          ownerData.images[imageKey] = h;
        }
      }
    }
    setFirebaseImage(false);
  };
  return (
    <>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>
          Start by clicking on each area to capture or upload a picture
        </Text>
        <View style={styles.container}>
          <View>
            <TouchableWithoutFeedback onPress={() => selectImage("image1")}>
              <View>
                <View style={styles.imageContainer}>
                  {!images?.image1 ? (
                    <CameraColor width={40} height={40} />
                  ) : (
                    <Image
                      source={{ uri: images.image1 }}
                      style={styles.image}
                    />
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
                    <CameraColor width={40} height={40} />
                  ) : (
                    <Image
                      source={{ uri: images.image2 }}
                      style={styles.image}
                    />
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
                    <CameraColor width={40} height={40} />
                  ) : (
                    <Image
                      source={{ uri: images.image3 }}
                      style={styles.image}
                    />
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
                    <CameraColor width={40} height={40} />
                  ) : (
                    <Image
                      source={{ uri: images.image4 }}
                      style={styles.image}
                    />
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
                    <CameraColor width={40} height={40} />
                  ) : (
                    <Image
                      source={{ uri: images.image5 }}
                      style={styles.image}
                    />
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
                    <CameraColor width={40} height={40} />
                  ) : (
                    <Image
                      source={{ uri: images.image6 }}
                      style={styles.image}
                    />
                  )}
                </View>
              </View>
            </TouchableWithoutFeedback>
            <Text style={styles.text}>Floor</Text>
          </View>
        </View>
        {images.image6 && firebaseImages == null && (
          <ButtonUI
            item={{ value: "Upload 6 Images" }}
            selectedItems={saveImages}
            customStyle={
              isSubmitPress
                ? { ...styles.customStyle, color: "#02696A" }
                : styles.customStyle
            }
            touchProps={touchPropsCamera}
          />
        )}
        {firebaseImages && (
          <LottieView
            autoPlay
            style={{
              width: "100%",
              height: "60%",
              backgroundColor: "white",
              marginLeft: 35,
              marginBottom: 100,
            }}
            source={require("../../../assets/RentoO - Loading Animation.json")}
            // source={{
            //   uri: "https://lottie.host/fde45e7c-36a5-493d-ae49-80631ac15f5f/avgoduAK0g.json",
            // }}
          />
        )}
        {!firebaseImages && firebaseImages != null && (
          <ButtonUI
            item={{ value: "Continue" }}
            selectedItems={uploadImages}
            customStyle={styles.customStyle}
            touchProps={touchPropsSubmit}
          />
        )}
      </View>
      <RentoBack
        style={{
          zIndex: -1,
          position: "absolute",
          top: 630,
          left: -290,
          opacity: 0.7,
        }}
        width={990}
        height={270}
      />
    </>
  );
};
const styles = StyleSheet.create({
  title: {
    color: "#413855",
    fontFamily: "Mulish_700Bold",
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 70,
    textAlign: "center",
  },
  mainContainer: {
    alignItems: "center",
    marginTop: "5%",
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
  customStyleCamera: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  imageContainer: {
    backgroundColor: "#F6D6CF",
    borderColor: "#ED7861",
    borderWidth: 0.5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    overflow: "hidden",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    marginTop: 5,
    color: "#413855",
    fontFamily: "Mulish_700Bold",
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: "#3B6665",
    borderColor: "#3B6665",
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 70,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
    marginLeft: 20,
  },
  submitButtonClicked: {
    backgroundColor: "#B1D4D2",
    borderColor: "#B1D4D2",
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 70,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
    marginLeft: 20,
  },
  customStyle: {
    color: "white",
    fontFamily: "Mulish_700Bold",
    fontSize: 20,
  },
  CameraButton: {
    backgroundColor: "#3B6665",
    borderColor: "#3B6665",
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 70,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
    marginLeft: 20,
  },
  CameraButtonClicked: {
    backgroundColor: "#B1D4D2",
    borderColor: "#B1D4D2",
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 70,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
    marginLeft: 20,
  },
});
export default ImageSelector;
