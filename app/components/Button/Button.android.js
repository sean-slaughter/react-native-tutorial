import React from 'react';
import { View, Text } from 'react-native';
import colors from "../../config/colors" 

function Button(props) {
    return (
       <View
        style={{
            top: 50,
            height: 40,
            width: '100%',
            backgroundColor: colors.primary,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center'
        }}
       >
           <Text>{props.children}</Text>
       </View>
    );
}

export default Button;