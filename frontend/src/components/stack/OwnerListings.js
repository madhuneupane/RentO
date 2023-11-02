import React from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OwnerListingsList from "../list/OwnerListingsList";
import TenantMatch from "../container/TenantMatch";
import { NavigationContainer } from "@react-navigation/native";
import OwnerPosts from "../container/OwnerPosts";
import OwnerPropertyInterest from "../container/OwnerPropertyInterest";
import Title from "../container/Title";

const Tab = createMaterialTopTabNavigator();
const OwnerListings = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Your Listings" component={OwnerPosts} />
      <Tab.Screen name="Tenant Matches" component={OwnerPropertyInterest} />
    </Tab.Navigator>
  );
};

export default OwnerListings;
