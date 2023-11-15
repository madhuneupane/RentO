import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import * as React from "react";
import { Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import OwnerOnboarding1 from "../container/OwnerOnboarding1";
import OwnerListings from "./OwnerListings";
import TenantInterested from "../container/TenantInterested";
import ProfileStack from "./ProfileStack";
import MyListing from "../../../assets/Filled-MyListings.svg";
import FilledMyListing from "../../../assets/MyListings.svg";
import FilledNewListing from "../../../assets/Filled-NewListing.svg";
import Alert from "../../../assets/AlertsOut.svg";
import NewListing from "../../../assets/NewListing.svg";
import Profile from "../../../assets/Profile.svg";
import OwnerNewListingStart from "../container/OwnerNewListingStart";
import { useIsFocused } from "@react-navigation/native";
import FilledAlert from "../../../assets/Filled-Alerts.svg";
import FilledProfile from "../../../assets/Filled-Profile.svg";
const Tab = createMaterialBottomTabNavigator();

const OwnerTabs = () => {
  const isFocused = useIsFocused();
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
          tabBarIcon: ({ color, focused }) => {
            console.log("focused:::" + focused);
            if (!focused) {
              return (
                <FilledMyListing
                  width={30}
                  height={30}
                  fill="#36827F"
                  stoke="#36827F"
                />
              );
            } else {
              return (
                <MyListing
                  width={30}
                  height={30}
                  fill="#36827F"
                  stoke="#36827F"
                />
              );
            }
          },
        }}
      />

      <Tab.Screen
        name="newListing"
        component={OwnerNewListingStart}
        options={{
          tabBarLabel: "New Listing",
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <FilledNewListing width={30} height={30} fill="#36827F" />;
            } else {
              return <NewListing width={30} height={30} fill="#36827F" />;
            }
          },
        }}
      />

      <Tab.Screen
        name="alert"
        component={OwnerOnboarding1}
        options={{
          tabBarLabel: "Alerts",
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return (
                <FilledAlert
                  width={30}
                  height={30}
                  fill="#36827F"
                  stroke="#36827F"
                />
              );
            } else {
              return (
                <Alert width={30} height={30} fill="#36827F" stroke="#36827F" />
              );
            }
          },
        }}
      />

      <Tab.Screen
        name="profile"
        component={ProfileStack}
        options={{
          tabBarLabel: "User",
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return (
                <FilledProfile
                  width={30}
                  height={30}
                  fill="#36827F"
                  stroke="#36827F"
                />
              );
            } else {
              return (
                <Profile
                  width={30}
                  height={30}
                  fill="#36827F"
                  stroke="#36827F"
                />
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default OwnerTabs;
