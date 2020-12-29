import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText/AppText";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Button from "./app/components/Button/Button"
export default function App() {
  return (
    <Button>LOGIN</Button>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },

  logo: {
    width: 300,
    height: 200,
  },
});
