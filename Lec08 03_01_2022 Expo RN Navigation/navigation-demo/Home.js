import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';


import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home({ navigation }) {
  const [counter, setCounter] = useState(0);

  const btnAdd = () => {
    debugger;
    let num = 7;
    num++;
    console.log(num);
    setCounter(prevC => prevC + 1)
  }

  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Button title='add' onPress={btnAdd} />
      <Text style={{ fontSize: 25 }}>counter= {counter}</Text>
      <Button title='go 2 second page' onPress={() => navigation.navigate('SecondPage')} />
      <Button title='go 2 Tab page' onPress={() => navigation.navigate('MaterialBottomPage')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
});
