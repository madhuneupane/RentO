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
import Alerts from "../container/Alert";
const Tab = createMaterialBottomTabNavigator();

const OwnerTabs = () => {
  const isFocused = useIsFocused();
  const color = "#3B6665";
  return (
    <Tab.Navigator
      initialRouteName="owner_welcome"
      activeColor="#3B6665"
      labelStyle={{ fontSize: 12, fontWeight: "bold", color: "#3B6665" }}
      ScreenOptions={{ headerShown: false, tabBarActiveTintColor: "white" }}
      barStyle={{
        backgroundColor: "#E6DFF6",
        borderRadius: 25,
        height: "12%",
        overflow: "hidden",
        padding: 5,
      }}
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
                  fill="#3B6665"
                  stoke="#3B6665"
                />
              );
            } else {
              return (
                <MyListing
                  width={30}
                  height={30}
                  fill="#3B6665"
                  stoke="#3B6665"
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
              return <FilledNewListing width={30} height={30} fill="#3B6665" />;
            } else {
              return <NewListing width={30} height={30} fill="#3B6665" />;
            }
          },
        }}
      />

      <Tab.Screen
        name="alert"
        component={Alerts}
        options={{
          tabBarLabel: "Alerts",
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return (
                <FilledAlert
                  width={30}
                  height={30}
                  fill="#3B6665"
                  stroke="#3B6665"
                />
              );
            } else {
              return (
                <Alert width={30} height={30} fill="#3B6665" stroke="#3B6665" />
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
                  fill="#3B6665"
                  stroke="#3B6665"
                />
              );
            } else {
              return (
                <Profile
                  width={30}
                  height={30}
                  fill="#3B6665"
                  stroke="#3B6665"
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
