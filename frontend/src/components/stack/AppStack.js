<<<<<<< Updated upstream
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../container/Login";
import Rentor from "../screen/Rentor";
import Owner from "../screen/Owner";
import LoginRentor from "../container/LoginRentor";
import WelcomeScreen from "../container/WelcomeScreen";
import Listings from "../container/Listings";
import OwnerOnboarding1 from "../container/OwnerOnboarding1";
import OwnerOnboarding2 from "../container/OwnerOnboarding2";
import OwnerOnboarding3 from "../container/OwnerOnBoarding3";
import OwnerOnboarding4 from "../container/OwnerOnBoarding4";
import PropertyDescription from "../container/PropertyDescription";
import OwnerOnBoarding5 from "../container/OwnerOnBoarding5";
import ImageSelector from "../container/ImageSelector";
import SelectImageOption from "../container/SelectImageOption";
import CameraSelector from "../container/CameraSelector";
const Stack = createStackNavigator();
=======
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../container/Login';
import Rentor from '../screen/Rentor';
import Owner from '../screen/Owner'
import LoginRentor from '../container/LoginRentor';
import WelcomeScreen from '../container/WelcomeScreen';
import Listings from '../container/Listings'
import OwnerOnboarding1 from '../container/OwnerOnboarding1';
import OwnerOnboarding2 from '../container/OwnerOnboarding2';
import OwnerOnboarding3 from '../container/OwnerOnBoarding3';
import OwnerOnboarding4 from '../container/OwnerOnBoarding4';
import PropertyDescription from '../container/PropertyDescription';
import ListingDetails from '../screen/ListingDetails';

const Stack=createStackNavigator()
>>>>>>> Stashed changes

const AppStack = () => {
  return (
    <NavigationContainer>
<<<<<<< Updated upstream
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="login_rentor" component={LoginRentor} />
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="list_view" component={Listings} />
        <Stack.Screen name="rentor" component={Rentor} />
        <Stack.Screen name="owner" component={Owner} />
        <Stack.Screen name="owner_onboarding1" component={OwnerOnboarding1} />
        <Stack.Screen name="owner_onboarding2" component={OwnerOnboarding2} />
        <Stack.Screen name="owner_onboarding3" component={OwnerOnboarding3} />
        <Stack.Screen name="owner_onboarding4" component={OwnerOnboarding4} />
        <Stack.Screen name="owner_onboarding5" component={OwnerOnBoarding5} />
        <Stack.Screen
          name="owner_property_desc"
          component={PropertyDescription}
        />
        <Stack.Screen name="upload_options" component={SelectImageOption} />
        <Stack.Screen name="image_select" component={ImageSelector} />
        <Stack.Screen name="camera_select" component={CameraSelector} />
      </Stack.Navigator>
=======
    <Stack.Navigator>
    <Stack.Screen name='login' component={Login} />
    <Stack.Screen name="login_rentor" component={LoginRentor} />
    <Stack.Screen name="welcome" component={WelcomeScreen} />
    <Stack.Screen name="list_view" component={Listings} />  
    <Stack.Screen name="rentor" component={Rentor} />
    <Stack.Screen name="owner" component={Owner} />
    <Stack.Screen name="listing_details" component={ListingDetails} />
    <Stack.Screen name="owner_onboarding1" component={OwnerOnboarding1} />
    <Stack.Screen name="owner_onboarding2" component={OwnerOnboarding2} />
    <Stack.Screen name="owner_onboarding3" component={OwnerOnboarding3} />
    <Stack.Screen name="owner_onboarding4" component={OwnerOnboarding4} />
    <Stack.Screen name="owner_property_desc" component={PropertyDescription} />


     </Stack.Navigator>
>>>>>>> Stashed changes
    </NavigationContainer>
  );
};

export default AppStack;
