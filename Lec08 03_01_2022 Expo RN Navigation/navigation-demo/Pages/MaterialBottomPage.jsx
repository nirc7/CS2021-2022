import React from 'react'
import { View, Text } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LeftPage from './LeftPage';
import RightPage from './RightPage';

const Tab = createMaterialBottomTabNavigator();


export default function MaterialBottomPage() {
  return (
    <Tab.Navigator
      initialRouteName="LeftPage"
      activeColor="#55ff00"
      inactiveColor='black'
      barStyle={{ backgroundColor: '#694fad' }}
    >
      <Tab.Screen
        name="LeftPage"
        component={LeftPage}
        options={{
          tabBarLabel: <Text style={{
            fontSize: 9, fontWeight: '700',
            color: 'white'
          }}> My Tickets </Text>,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="RightPage"
        component={RightPage}
        options={{
          tabBarLabel: 'right Page',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="baseball" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


