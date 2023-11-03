import React, { useEffect, useState } from "react";
import OwnerListingsList from "../list/OwnerListingsList";
import { View } from "react-native";
import ownerpost from "../hooks/ownerpost";
const OwnerPosts = () => {
  const [ownerPosts, setOwnerPosts] = useState();
  const ownerData = [
    {
      name: "test",
      id: 1,
    },
    { name: "test1", id: 2 },
  ];
  ownerpost(setOwnerPosts);
  console.log("OwnerPosts::::" + ownerPosts);
  return (
    <View>
      <OwnerListingsList ownerData={ownerPosts} />
    </View>
  );
};

export default OwnerPosts;
