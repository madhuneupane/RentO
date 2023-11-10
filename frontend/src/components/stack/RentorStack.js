import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Listings from "../container/Listings";

const RentorBoardStack = createNativeStackNavigator();
const RentorStack = () => {
  return (
    <RentorBoardStack.Navigator>
      <RentorBoardStack.Screen
        name="list_view"
        component={Listings}
        options={{
          headerShown: false,
          headerBackTitle: "",
          headerTintColor: "#36827F",
          headerTitle: "",
        }}
      />
    </RentorBoardStack.Navigator>
  );
};

export default RentorStack;
