import React, { useState } from 'react';
import { Button, FlatList, Linking, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [Items, setItems] = useState([
    { item: 'Item 1' },
    { item: 'Item 2' },
    { item: 'Item 3' },
    { item: 'Item 4' },
    { item: 'Item 5' },
    { item: 'Item 6' },
    { item: 'Item 7' },
    { item: 'Item 8' },
    { item: 'Item 9' }
  ]) 

  const [Refreshing, setRefreshing] = useState(false)
  const onRefres = () => {
    setRefreshing(true)
    setItems([...Items, { item: 'Item 69'}])
    setRefreshing(false)
  }

  return (
    <FlatList
      data={Items}
      keyExtractor={(item,index) => index.toString()}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefres}
        />
      }
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.item}</Text>
        </View>
      )}
    />
    // <View style={styles.container}>
    //   <ScrollView
    //     refreshControl={
    //       <RefreshControl
    //         refreshing={Refreshing}
    //         onRefresh={onRefres}
    //       />
    //     }
    //   >
    //     {Items.map(i => {
    //       return (
    //         <View style={styles.item}>
    //           <Text style={styles.text}>{i.item}</Text>
    //         </View>
    //       )
    //     })}
    //   </ScrollView>
    // </View>
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
