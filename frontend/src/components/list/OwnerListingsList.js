import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import OwnerCards from "../listItems/OwnerCards";

const OwnerListingsList = ({
  ownerData,
  setRefreshing,
  refreshing,
  refresh,
}) => {
  const item = JSON.stringify(ownerData[0]);
  const adjectives = ["Enjoy Cozy", "Luxury"];
  return (
    <View style={styles.container}>
      <FlatList
        data={ownerData}
        renderItem={({ item, index }) => (
          <OwnerCards data={item} adj={adjectives[index]} />
        )}
        refreshing={refreshing}
        onRefresh={refresh}
        // contentContainerStyle={{ backgroundColor: "green" }}
      ></FlatList>
    </View>
  );
};

export default OwnerListingsList;
const styles = StyleSheet.create({
  container: {
    // flex: 0.5,
    // backgroundColor: "pink",
    height: "100%",
  },
});
