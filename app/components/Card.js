import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors'


function Card({title, subTitle, image}) {
    return (
       <View style={styles.card}>
           <Image style={styles.image} source={image}/>
           <Text>{title}</Text>
           <Text>{subTitle}</Text>
       </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 200
    }
})

export default Card;