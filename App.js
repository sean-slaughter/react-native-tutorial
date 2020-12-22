import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, Alert, Button } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Element pressed")

  return (
    <SafeAreaView style={styles.container}>
      <Button
      color="orange"
      title="Click Me" onPress={() => Alert.prompt("My title", "My message", text => console.group(text))}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
});
