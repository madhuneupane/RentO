import React, { useEffect, useState } from "react";
import OwnerListingsList from "../list/OwnerListingsList";
import { View, StyleSheet } from "react-native";
import ownerpost from "../hooks/ownerpost";
import ButtonUI from "../UI/button/ButtonUI";

const OwnerPosts = ({ navigation, route }) => {
  const [refreshing, setRefreshing] = useState(false);

  const refresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };
  const [ownerPosts, setOwnerPosts] = useState();
  ownerpost(setOwnerPosts, refreshing);
  // console.log("OwnerPosts::::" + JSON.stringify(ownerPosts));
  var [isSubmitPress, setIsSubmitPress] = useState(false);

  var touchPropsSubmit = {
    underlayColor: "#B1D4D2",
    style: isSubmitPress ? styles.submitButtonClicked : styles.submitButton,
    onHideUnderlay: () => setIsSubmitPress(false),
    onShowUnderlay: () => setIsSubmitPress(true),
  };
  return (
    <View style={styles.listContainer}>
      {ownerPosts && (
        <OwnerListingsList
          ownerData={ownerPosts}
          setRefreshing={setRefreshing}
          refreshing={refreshing}
          refresh={refresh}
        />
      )}
      <View style={styles.buttonContainer}>
        <ButtonUI
          item={{ value: "Manage Listings" }}
          customStyle={styles.customStyle}
          touchProps={touchPropsSubmit}
        />
      </View>
    </View>
  );
};

export default OwnerPosts;
const styles = StyleSheet.create({
  listContainer: {
    flex: 0.8,
  },
  buttonContainer: {
    // marginBottom: 20,
    // backgroundColor: "pink",
  },
  customStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily:"Mulish_400Regular",
  },
  date: {
    marginTop: 5,
  },
  container: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "95%",
    border: "2",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black",
    backgroundColor: "#E9E7EE",
    padding: 10,
    fontSize: 0.5,
    // height: 20,
    // borderRadius: 1,
    // padding: 10,
  },
  viewContainer: {
    // // margin: 0,
    // flexDirection: "row",
    // alignItems: "center",
    // // justifyContent: "flex-start",
    // // width: "auto",
    width: "50%",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    // Other container styles if needed
  },
  type: {
    textAlign: "center",
    width: "100%", // Adjust the width as needed
    // Other text styles for data.type
  },
  location: {
    textAlign: "center",
    width: "100%", // Adjust the width as needed
    // Other text styles for data.location
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
