import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import OwnerPropertyInterestList from "../list/OwnerPropertyInterestList";
import ownerpost from "../hooks/ownerpost";
const OwnerPropertyInterest = ({ navigation, id }) => {
  const [ownerPost, setOwnerPosts] = useState();
  const getTenant = (data) => {
    console.log("interestedList:" + data);
    navigation.navigate("tenant_interested", {
      ids: data.interestedList,
      type: data.type,
      location: data.location,
    });
  };
  ownerpost(setOwnerPosts);
  console.log("intenets:::" + JSON.stringify(ownerPost));
  return (
    <View style={styles.container}>
      {ownerPost && (
        <OwnerPropertyInterestList
          ownerData={ownerPost}
          getTenant={getTenant}
        />
      )}
    </View>
  );
};

export default OwnerPropertyInterest;
const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "red",
    height: "100%",
    width: "100%",
  },
});
