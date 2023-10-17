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
const Stack=createStackNavigator()

const AppStack = () => {
    return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='login' component={Login} />
    <Stack.Screen name="login_rentor" component={LoginRentor} />
    <Stack.Screen name="welcome" component={WelcomeScreen} />
    <Stack.Screen name="list_view" component={Listings} />  
    <Stack.Screen name="rentor" component={Rentor} />
    <Stack.Screen name="owner" component={Owner} />
    <Stack.Screen name="owner_onboarding1" component={OwnerOnboarding1} />
    <Stack.Screen name="owner_onboarding2" component={OwnerOnboarding2} />
    <Stack.Screen name="owner_onboarding3" component={OwnerOnboarding3} />

     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack