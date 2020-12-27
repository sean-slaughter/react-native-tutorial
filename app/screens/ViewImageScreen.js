import React from "react";
import { View, StyleSheet, Image } from "react-native";

function ViewImageScreen(props) {
  return (
    <View style={styles.bgContainer}>
        <View style={styles.closeIcon}/>
        <View style={styles.deleteIcon}/>
        <Image style={styles.image}resizeMode="contain" source={require("../assets/chair.jpg")} />
    </View>

  );
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: "#000000",
    flexDirection: "row",
    alignContent: "flex-start"
  },
  deleteIcon:{
    top: 40,
    right: 30,
    width: 50,
    height: 50,  
    backgroundColor: "#4ecdc4",
    position: "absolute"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  closeIcon: {
    top: 40,
    left: 30,
    backgroundColor: "#fc5c65",
    width: 50,
    height: 50,
    position: "absolute"
  }
});

export default ViewImageScreen;
