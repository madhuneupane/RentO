import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import * as React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import OwnerOnboarding1 from "../container/OwnerOnboarding1";
import OwnerListings from "./OwnerListings";
import TenantInterested from "../container/TenantInterested";

const Tab = createMaterialBottomTabNavigator();
const OwnerTabs = () => {
  const color = "#36827F";
  return (
    <Tab.Navigator
      initialRouteName="owner_welcome"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: "#E9E7EE", color: "black" }}
      ScreenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="owner_welcome"
        component={OwnerListings}
        options={{
          tabBarLabel: "My Listing",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="view-list"
              color={"#36827F"}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="newListing"
        component={OwnerOnboarding1}
        options={{
          tabBarLabel: "New Listing",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-city"
              color={"#36827F"}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="alert"
        component={OwnerOnboarding1}
        options={{
          tabBarLabel: "Alerts",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={"#36827F"} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="profile"
        component={OwnerOnboarding1}
        options={{
          tabBarLabel: "User",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account"
              color={"#36827F"}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default OwnerTabs;
