import React from "react";
import { View } from "react-native";
import OwnerPropertyInterestList from "../list/OwnerPropertyInterestList";
const OwnerPropertyInterest = () => {
  const ownerData = [
    {
      name: "test2",
      id: 1,
    },
    { name: "test3", id: 2 },
  ];
  return (
    <View>
      <OwnerPropertyInterestList ownerData={ownerData} />
    </View>
  );
};

export default OwnerPropertyInterest;
