import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function ViewImageScreen(props) {
  return (
    <View style={styles.bgContainer}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="close" color="white" size={30}/>
        </View>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons name="trash-can-outline" color="white" size={35}/>
        </View>
        <Image style={styles.image}resizeMode="contain" source={require("../assets/chair.jpg")} />
    </View>

  );
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    alignContent: "flex-start"
  },
  deleteIcon:{
    top: 40,
    right: 30, 
    position: "absolute"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  closeIcon: {
    top: 40,
    left: 30,
    position: "absolute"
  }
});

export default ViewImageScreen;
