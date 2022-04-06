import { StatusBar } from 'expo-status-bar';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Md Sabbir Rahman</Text>
      <Button title='btn1' onPress={() => {Linking.openURL('https://google.com')}}>Click here</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10
  }
});
