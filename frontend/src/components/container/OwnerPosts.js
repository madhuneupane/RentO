import React from "react";
import OwnerListingsList from "../list/OwnerListingsList";
import { View } from "react-native";
const OwnerPosts = () => {
  const ownerData = [
    {
      name: "test",
      id: 1,
    },
    { name: "test1", id: 2 },
  ];
  return (
    <View>
      <OwnerListingsList ownerData={ownerData} />
    </View>
  );
};

export default OwnerPosts;
