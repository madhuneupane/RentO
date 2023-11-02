import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import * as React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import RentorStack from "./RentorStack";

const Tab = createMaterialBottomTabNavigator();
const RentorTabs = ({ navigation }) => {
  const color = "#36827F";
  return (
    <Tab.Navigator
      initialRouteName="rentor_welcome"
      activeColor="#5C5D8D"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: "#5C5D8D", color: "black" }}
      options={{ headerShown: false }}
    >
      <Tab.Screen
        name="rentor_welcome"
        component={RentorStack}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-search"
              color={"#36827F"}
              size={26}
            />
          ),
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
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={"#36827F"} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="alert"
        component={RentorStack}
        options={{
          tabBarLabel: "Alerts",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={"#36827F"} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="profile"
        component={RentorStack}
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
export default RentorTabs;
