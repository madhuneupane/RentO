import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { InputUI } from "../UI/input/InputUI";
import ButtonUI from "../UI/button/ButtonUI";

const OwnerOnboarding4 = ({ navigation, route }) => {
  const [onBoardData, setOnBoardData] = useState();
  var [isSubmitPress, setIsSubmitPress] = useState(false);

  var touchPropsSubmit = {
    underlayColor: "#B1D4D2",
    style: isSubmitPress ? styles.submitButtonClicked : styles.submitButton,
    onHideUnderlay: () => setIsSubmitPress(false),
    onShowUnderlay: () => setIsSubmitPress(true),
  };
  const setData = (value, type) => {
    console.log("on 4:" + JSON.stringify(onBoardData));
    setOnBoardData({ ...route.params, amount: value });
  };
  const navigateToNext = () => {
    navigation.navigate("owner_property_desc", onBoardData);
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>What is your desired rent amount?</Text>
      </View>
      <View>
        <InputUI
          placeholder=" $ Enter the amount"
          selectedItems={setData}
          type="amount"
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
export default OwnerOnboarding4;
const styles = StyleSheet.create({
  progressBar: {
    borderColor: "#B1D4D2",
    height: 10,
    width: "70%",
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: "#B1D4D2",
    marginTop: 50,
    marginLeft: 55,
  },
  progressBarGreen: {
    backgroundColor: "#36827F",
    height: 10,
    width: 150,
    borderRadius: 20,
  },
  container: {
    backgroundColor: "white",
  },
  subContainer: {
    alignItems: "center",
    height: 60,
  },
  textInput: {
    fontSize: 20,
    height: 30,
    width: "90%",
    borderRadius: 30,
    textAlign: "justify",
    height: 50,
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
    fontSize: "20",
  },
  textContainer: {
    margin: 30,
    height: "20%",
    justifyContent: "center",
  },
  title: {
    fontWeight: "300",
    fontSize: 15,
    marginLeft: 10,
    fontSize: 20,
    textAlign: "center",
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
  customStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
