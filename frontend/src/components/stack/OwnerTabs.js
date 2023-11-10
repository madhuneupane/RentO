import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import * as React from "react";
import { Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import OwnerOnboarding1 from "../container/OwnerOnboarding1";
import OwnerListings from "./OwnerListings";
import TenantInterested from "../container/TenantInterested";
import ProfileStack from "./ProfileStack";
import MyListing from "../../../assets/MyListings.svg";
import Alert from "../../../assets/Filled-Alerts.svg";
import NewListing from "../../../assets/Filled-NewListing.svg";
import User from "../../../assets/Filled-Profile.svg";
import OwnerNewListingStart from "../container/OwnerNewListingStart";
const Tab = createMaterialBottomTabNavigator();
const OwnerTabs = () => {
  const color = "#36827F";
  return (
    <Tab.Navigator
      initialRouteName="owner_welcome"
      activeColor="#36827F"
      labelStyle={{ fontSize: 12, fontWeight: "bold", color: "#36827F" }}
      ScreenOptions={{ headerShown: false, tabBarActiveTintColor: "white" }}
    >
      <Tab.Screen
        name="owner_welcome"
        component={OwnerListings}
        options={{
          tabBarLabel: "My Listing",
          tabBarIcon: ({ color }) => (
            <MyListing width={30} height={30} fill="#36827F" stoke="#36827F" />
          ),
        }}
      />

      <Tab.Screen
        name="newListing"
        component={OwnerNewListingStart}
        options={{
          tabBarLabel: "New Listing",
          tabBarIcon: ({ color }) => (
            <NewListing
              width={30}
              height={30}
              fill="#36827F"
              // stoke={"#36827F"}
              // style={{ stroke: "white" }}
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
            <Alert width={30} height={30} fill="#36827F" stroke="#36827F" />
          ),
        }}
      />

      <Tab.Screen
        name="profile"
        component={ProfileStack}
        options={{
          tabBarLabel: "User",
          tabBarIcon: ({ color }) => (
            <User width={30} height={30} fill="#36827F" stroke="#36827F" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default OwnerTabs;
