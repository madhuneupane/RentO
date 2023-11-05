import React from "react";
import { View, FlatList } from "react-native";
import OwnerPostCards from "../listItems/OwnerPostCards";
const OwnerPropertyInterestList = ({ ownerData, getTenant }) => {
  console.log("interest lis::" + JSON.stringify(ownerData));
  return (
    <View>
      <FlatList
        data={ownerData}
        renderItem={({ item }) => (
          <OwnerPostCards data={item} getTenant={getTenant} />
        )}
      ></FlatList>
    </View>
  );
};

export default OwnerPropertyInterestList;
