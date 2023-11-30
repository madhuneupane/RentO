import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { InputUI } from "../UI/input/InputUI";
import ButtonUI from "../UI/button/ButtonUI";
import RentoBack from "../../../assets/rentoBack.svg";

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
    // console.log("on 4:" + onBoardData.address);

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
          placeholder="$ Type in your amount"
          selectedItems={setData}
          type="amount"
          coustomStyle={styles}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonUI
          item={{ value: "Continue" }}
          selectedItems={navigateToNext}
          customStyle={
            isSubmitPress
              ? { ...styles.customStyle, color: "#02696A" }
              : styles.customStyle
          }
          touchProps={touchPropsSubmit}
        />
      </View>
      <View style={styles.progressBar}>
        <View style={styles.progressBarGreen}></View>
        <RentoBack
          width={840}
          height={925}
          marginTop={-350}
          marginLeft={-500}
          opacity={0.2}
        />
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
    marginTop: 62,
    marginLeft: 65,
  },
  progressBarGreen: {
    backgroundColor: "#3B6665",
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
    fontSize: 18,
    height: 30,
    width: "87%",
    borderRadius: 24,
    textAlign: "justify",
    height: 50,
    paddingLeft: 15,
    color: "#5C5D8D",
    fontFamily: "Mulish_400Regular_Italic",
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
    marginBottom: 30,
    width: "60%",
    marginLeft: 80,
    marginTop: 30,
    height: "15%",
    justifyContent: "center",
  },
  title: {
    marginTop: "10",
    color: "#413855",
    //marginLeft: 10,
    fontSize: 22,
    textAlign: "center",
    fontFamily: "Mulish_700Bold",
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
  buttonContainer: {
    marginTop: 290,
  },
  customStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Mulish_400Regular",
  },
});
