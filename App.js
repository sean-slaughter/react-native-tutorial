import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, Image, View, SafeAreaView, Alert, Button } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Element pressed")
  console.log(Dimensions.get("screen"))

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerBlue',
        width: '50%',
        height: 70,
      }}></View>
      <Text>Text under image</Text>
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

  logo: {
    width: 300,
    height: 200,
  }
});
