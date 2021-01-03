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
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return (
     <ViewImageScreen/>
  );
}



