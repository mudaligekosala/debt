import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
//styles
import { btn_color,btn_text_size } from '../../utils/colorAndFonts';
import Button from '../ReusbaleComponents/Button';

const buttonPressed = () => {
    console.log(`It's working.`);
  };
  

const LoginForm = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.txt_in_username}
                placeholder={'username'}/>
            <TextInput
                style={styles.txt_in_password}
                placeholder={'password'}/>
            <TouchableOpacity
                style={styles.btn_login}>
                <Text
                    style={styles.txt_login}>Login</Text>
            </TouchableOpacity>

             <TouchableOpacity
                style={styles.btn_login}
            >
                <Text
                    style={styles.txt_register}
                >Register</Text>
            </TouchableOpacity>
            <Button onPress={buttonPressed} />
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        backgroundColor:'yellow',
        alignItems: 'center',
        justifyContent:"center",
        margin:30,
        padding:20,
       flex: 1,
    },
    txt_in_username:{
        width:'100%',
        borderWidth: 1,
        borderRadius: 100,
        height:35
     
    },
    txt_in_password:{
        width:'100%',
        borderWidth: 1,
        borderRadius: 100,
        marginTop:20,
        marginBottom:20,
        height:35
    },
    btn_login:{
        width:'100%',
        borderWidth: 1,
        borderRadius: 100,
        backgroundColor:btn_color,
        alignItems: 'center',
        justifyContent: 'center',
        height:40
    },
    txt_login:{
        fontSize:btn_text_size,
        padding:5
    }
    
})

export default LoginForm