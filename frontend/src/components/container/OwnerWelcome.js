import React from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OwnerListings from "../stack/OwnerListings";

const Tab = createMaterialTopTabNavigator();
const OwnerWelcome = () => {
  return (
    <View>
      <Text>welcome</Text>
      <OwnerListings />
    </View>
  );
};

export default OwnerWelcome;
