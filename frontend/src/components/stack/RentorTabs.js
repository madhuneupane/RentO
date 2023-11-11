import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import * as React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import RentorStack from "./RentorStack";
import Profile from "../../../assets/Profile.svg";
import FilledProfile from "../../../assets/Filled-Profile.svg";
import FilledAlert from "../../../assets/Filled-Alerts.svg";
import Alert from "../../../assets/AlertsOut.svg";
import Favourite from "../../../assets/Favourite.svg";
import FilledFavourite from "../../../assets/Filled-Favourite.svg";
import Search from "../../../assets/SearchExplore.svg";
import FilledSearch from "../../../assets/Filled-SearchExplore.svg";

const Tab = createMaterialBottomTabNavigator();
const RentorTabs = ({ navigation }) => {
  const color = "#36827F";
  return (
    <Tab.Navigator
      initialRouteName="rentor_welcome"
      activeColor="#36827F"
      options={{ headerShown: false }}
      labelStyle={{ fontSize: 12, fontWeight: "bold", color: "#36827F" }}
      ScreenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
      }}
    >
      <Tab.Screen
        name="rentor_welcome"
        component={RentorStack}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <FilledSearch />;
            } else {
              return <Search />;
            }
          },
          title: false,
          headerBackTitle: "",
          headerTintColor: "black",
          headerTitle: "",
        }}
      />

      <Tab.Screen
        name="newListing"
        component={RentorStack}
        options={{
          tabBarLabel: "Favourites",
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return (
                <FilledFavourite
                  width={30}
                  height={30}
                  fill="#36827F"
                  stroke="#36827F"
                />
              );
            } else {
              return (
                <Favourite
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

      <Tab.Screen
        name="alert"
        component={RentorStack}
        options={{
          tabBarLabel: "Alerts",
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <FilledAlert />;
            } else {
              return <Alert />;
            }
          },
        }}
      />

      <Tab.Screen
        name="profile"
        component={RentorStack}
        options={{
          tabBarLabel: "User",
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <FilledProfile />;
            } else {
              return <Profile />;
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default RentorTabs;
