import React, { useState } from "react";
import { View } from "react-native";
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
    <View>
      <OwnerPropertyInterestList ownerData={ownerPost} getTenant={getTenant} />
    </View>
  );
};

export default OwnerPropertyInterest;
