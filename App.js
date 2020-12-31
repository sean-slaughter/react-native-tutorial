import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppButton from "./app/components/AppButton"
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
      <WelcomeScreen/>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 300,
    height: 200,
  },
});
