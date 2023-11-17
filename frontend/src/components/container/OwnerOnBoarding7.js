import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { InputUI } from "../UI/input/InputUI";
import ButtonUI from "../UI/button/ButtonUI";

const OwnerOnboarding7 = ({ navigation, route }) => {
  const [onBoardData, setOnBoardData] = useState();
  var [isSubmitPress, setIsSubmitPress] = useState(false);

  var touchPropsSubmit = {
    underlayColor: "#B1D4D2",
    style: isSubmitPress ? styles.submitButtonClicked : styles.submitButton,
    onHideUnderlay: () => setIsSubmitPress(false),
    onShowUnderlay: () => setIsSubmitPress(true),
  };
  const setRoom = (value, type) => {
    setOnBoardData({ ...route.params, ...onBoardData, room: value });
  };
  const setBathRoom = (value, type) => {
    setOnBoardData({ ...route.params, ...onBoardData, bathroom: value });
  };
  const navigateToNext = () => {
    console.log("rooms::" + JSON.stringify(onBoardData));
    navigation.navigate("owner_onboarding3", onBoardData);
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>How many rooms do you have?</Text>
      </View>
      <View>
        <InputUI
          placeholder="Number of Rooms"
          selectedItems={setRoom}
          type="room"
          coustomStyle={styles}
        />
      </View>
      <View>
        <InputUI
          placeholder="Number of BathRooms"
          selectedItems={setBathRoom}
          type="bathroom"
          coustomStyle={styles}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonUI
          item={{ value: "Continue" }}
          selectedItems={navigateToNext}
          customStyle={styles.customStyle}
          touchProps={touchPropsSubmit}
        />
      </View>
      <View style={styles.progressBar}>
        <View style={styles.progressBarGreen}></View>
      </View>
    </View>
  );
};
export default OwnerOnboarding7;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  progressBar: {
    borderColor: "#B1D4D2",
    height: 10,
    width: "70%",
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: "#B1D4D2",
    marginTop: 55,
    marginLeft: 55,
  },
  progressBarGreen: {
    backgroundColor: "#3B6665",
    height: 10,
    width: 80,
    borderRadius: 20,
  },
  subContainer: {
    alignItems: "center",
    height: 80,
  },
  textInput: {
    fontSize: 18,
    height: 30,
    width: "87%",
    borderRadius: 24,
    textAlign: "justify",
    height: 50,
    color: "#5C5D8D",
    //marginTop: 10,
    paddingLeft: 15,
    fontFamily:"Mulish_400Regular_Italic",
  },
  button: {
    borderWidth: 1.5,
    borderRadius: 15,
    fontSize: 20,
    textAlign: "center",
    marginTop: 30,
    height: 35,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily:"Mulish_400Regular",
  },
  textContainer: {
    margin: 10,
    height: "20%",
    justifyContent: "center",
  },
  title: {
    fontWeight: "300",
    width:"70%",
    marginLeft: 50,
    fontSize: 22,
    color: "#413855",
    textAlign: "center",
    fontFamily: "Mulish_700Bold"
  },
  submitButton: {
    backgroundColor: "#3B6665",
    borderColor: "#3B6665",
    height: "50",
    width: "80%",
    marginLeft: 40,
    marginTop: 10,
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
    marginTop: 10,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 40,
  },
  buttonContainer: {
    marginTop: 200,
  },
  customStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily:"Mulish_400Regular",
  },
});
