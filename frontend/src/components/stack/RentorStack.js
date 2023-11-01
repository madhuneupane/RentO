import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Listings from "../container/Listings";
import Rentor from "../screen/Rentor";

const RentorBoardStack = createNativeStackNavigator();
const RentorStack = () => {
  return (
    <RentorBoardStack.Navigator>
      <RentorBoardStack.Screen
        name="list_view"
        component={Listings}
        options={{ headerShown: false }}
      />
    </RentorBoardStack.Navigator>
  );
};

export default RentorStack;
