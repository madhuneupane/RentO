import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import UserProfile from "../container/UserProfile";

const ProfileBoardStack = createNativeStackNavigator();

const ProfileStack = ()=>{

    return (
        <ProfileBoardStack.Navigator>
          <ProfileBoardStack.Screen
            name="user_profile"
            component={UserProfile}
            options={{ headerShown: false }}
          />
        </ProfileBoardStack.Navigator>
      );
    };
    
    export default ProfileStack;
