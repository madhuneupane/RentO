import React from "react";
import { View, FlatList } from "react-native";
import OwnerPostCards from "../listItems/OwnerPostCards";
const OwnerPropertyInterestList = ({ ownerData, getTenant }) => {
  const adjectives = ["Enjoy Cozy", "Luxury"];
  return (
    <View>
      <FlatList
        data={ownerData}
        renderItem={({ item, index }) => (
          <OwnerPostCards
            data={item}
            getTenant={getTenant}
            adj={adjectives[index]}
          />
        )}
      ></FlatList>
    </View>
  );
};

export default OwnerPropertyInterestList;
