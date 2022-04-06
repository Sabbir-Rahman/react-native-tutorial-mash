import React, { useState } from 'react';
import { Button, FlatList, Linking, Pressable, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Screen_A' component={ScreenA} />
        <Stack.Screen name='Screen_B' component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column'
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10
  },
  item: {
    backgroundColor: '#4ae1fa',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 40
  }
})
