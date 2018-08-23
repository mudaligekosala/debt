import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

//styles
import {text_size_large} from '../../utils/colorAndFonts';

const Logo = () => {
    return(
        <View
            style={styles.container}
        >
            <Text
                style={styles.text}
            >My Pocket</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    text:{
        fontSize:text_size_large,
        fontWeight: 'bold',
    }
})

export default Logo;