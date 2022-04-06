import React, { useState } from 'react';
import { Button, Linking, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [Items, setItems] = useState([
    { key: 1, item: 'Item 1' },
    { key: 2, item: 'Item 2' },
    { key: 3, item: 'Item 3' },
    { key: 4, item: 'Item 4' },
    { key: 5, item: 'Item 5' },
    { key: 6, item: 'Item 6' },
    { key: 7, item: 'Item 7' },
    { key: 8, item: 'Item 8' },
    { key: 9, item: 'Item 9' }
  ]) 

  const [Refreshing, setRefreshing] = useState(false)
  const onRefres = () => {
    setRefreshing(true)
    setItems([...Items, { key: 69, item: 'Item 69'}])
    setRefreshing(false)
  }

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={Refreshing}
            onRefresh={onRefres}
          />
        }
      >
        {Items.map(i => {
          return (
            <View style={styles.item}>
              <Text style={styles.text}>{i.item}</Text>
            </View>
          )
        })}
      </ScrollView>
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
