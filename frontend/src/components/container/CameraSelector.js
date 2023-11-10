import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { firebaseConfig } from "../hooks/firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Camera } from "expo-camera";
import ButtonUI from "../UI/button/ButtonUI";

export default function App({navigation, route}) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  var [isSubmitPress, setIsSubmitPress] = useState(false);
  var [isFlip, setFlip] = useState(false);
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


  var touchPropsSubmit = {
    underlayColor: "#B1D4D2",
    style: isSubmitPress ? styles.submitButtonClicked : styles.submitButton,
    onHideUnderlay: () => setIsSubmitPress(false),
    onShowUnderlay: () => setIsSubmitPress(true),
  };
  var touchPropsFlip = {
    underlayColor: "#FBEDEA",
    style: isFlip ? styles.flipButtonClicked : styles.flipButton,
    onHideUnderlay: () => setFlip(false),
    onShowUnderlay: () => setFlip(true),
  };
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);
  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      
      // const blob = await fetch(data.uri).then((response) => response.blob());

      // const fileRef = ref(getStorage(), `RentO/${data.uri}`);
      // await uploadBytes(fileRef, blob);
  
      // const downloadURL = await getDownloadURL(fileRef);
  
      // console.log("image::" + downloadURL);
      // setImage(downloadURL);
      setImage(data.uri);
      navigation.navigate("image_select",route.params);
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#E9E7EE" }}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={(ref) => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
          ratio={"1:1"}
        />
      </View>
      <ButtonUI
        item={{ value: "Flip Image" }}
        selectedItems={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}
        customStyle={styles.customStyle}
        touchProps={touchPropsFlip}
      ></ButtonUI>
      {/* <Button
        title="Flip Image"
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}
      ></Button> */}
      <ButtonUI
        item={{ value: "Take Picture" }}
        selectedItems={() => takePicture()}
        customStyle={styles.customStyle}
        touchProps={touchPropsSubmit}
      ></ButtonUI>
      {/* <Button title="Take Picture" onPress={() => takePicture()} /> */}
      {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
    </View>
  );
}
const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection: "row",
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
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
  buttonContainer: {
    marginTop: 150,
  },
  flipButton: {
    backgroundColor: "#f56e51",
    borderColor: "#f56e51",
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  flipButtonClicked: {
    backgroundColor: "#f56e51",
    borderColor: "#f56e51",
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
});
