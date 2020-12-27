import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {


  return (
    <ViewImageScreen/>
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
