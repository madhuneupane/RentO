import React from "react";
import { View, Text, FlatList } from "react-native";
import OwnerCards from "../listItems/OwnerCards";

const OwnerListingsList = ({ ownerData }) => {
  return (
    <View>
      <FlatList
        data={ownerData}
        renderItem={({ item }) => <OwnerCards data={item} />}
      ></FlatList>
    </View>
  );
};

export default OwnerListingsList;
