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

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name="email"size={150} color="dodgerblue"/>
      <AppText>I love react native!</AppText>
      <Text
        style={{
          fontFamily: "Roboto",
          fontSize: 30,
          fontStyle: "italic",
          fontWeight: "bold",
          textAlign: "center"
        }}
      >
       THIS IS MY FIRST REACT NATIVE APP
        HERES SOME MORE TEXT
      </Text>

    </View>
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
