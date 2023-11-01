import React from "react";
import { View, FlatList } from "react-native";
import OwnerPostCards from "../listItems/OwnerPostCards";
const OwnerPropertyInterestList = ({ ownerData }) => {
  return (
    <View>
      <FlatList
        data={ownerData}
        renderItem={({ item }) => <OwnerPostCards data={item} />}
      ></FlatList>
    </View>
  );
};

export default OwnerPropertyInterestList;
