import React, { useEffect, useState } from "react";
import OwnerListingsList from "../list/OwnerListingsList";
import { View } from "react-native";
import ownerpost from "../hooks/ownerpost";
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
  console.log("OwnerPosts::::" + ownerPosts);
  return (
    <View>
      <OwnerListingsList
        ownerData={ownerPosts}
        setRefreshing={setRefreshing}
        refreshing={refreshing}
        refresh={refresh}
      />
    </View>
  );
};

export default OwnerPosts;
