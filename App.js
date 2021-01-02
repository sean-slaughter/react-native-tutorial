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

export default function App() {
  return (
      <View style={{
        backgroundColor: '#f8f4d4',
        padding: 20,
        paddingTop: 100,
      }}>
        <Card
          title="Red jacket for sale"
          subTitle="$100"
          image={require("./app/assets/jacket.jpg")}
        >

        </Card>
      </View>
  );
}



