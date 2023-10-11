import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../container/Login';
import Rentor from '../screen/Rentor';
import Owner from '../screen/Owner'
const Stack=createStackNavigator()

const AppStack = () => {
    return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='login' component={Login}/>
    <Stack.Screen name="rentor" component={Rentor} />
    <Stack.Screen name="owner" component={Owner} />
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack