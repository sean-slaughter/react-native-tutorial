import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {

  console.log(useDeviceOrientation())

  return (
    <View
      style={{
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100
        }}
      />
      <View
        style={{
          backgroundColor: "grey",
          width: 100,
          height: 100
        }}
      />
      <View
        style={{
          backgroundColor: "greenyellow",
          width: 100,
          height: 100
        }}
      />
    </View>
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
