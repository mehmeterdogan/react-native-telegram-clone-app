// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/Authentication/Welcome/Welcome';



const Stack = createNativeStackNavigator();

function StackRouter() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackRouter;
