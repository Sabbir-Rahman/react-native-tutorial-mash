import React, { useState } from 'react'
import {
  Button,
  FlatList,
  Linking,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function ScreenA({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate('Screen_B')
  }

  return (
    <View>
      <Text>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({
          backgroundColor: pressed ? '#ddd' : '#0f0'
        })}
      >
        <Text style={styles.text}>Go to screen B</Text>
      </Pressable>
    </View>
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
