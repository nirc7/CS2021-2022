import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import SecondPage from './Pages/SecondPage';
import MaterialBottomPage from './Pages/MaterialBottomPage';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="MaterialBottomPage" component={MaterialBottomPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
