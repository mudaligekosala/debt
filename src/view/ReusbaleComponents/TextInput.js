import React from 'react';
import {
  StyleSheet,
  TextInput
} from 'react-native';
import PropTypes from 'prop-types';
//theme style
import { font_size } from '../../utils/theme_config';


const TextInputView = ({
    txt_input_label = 'Enter here',
    txt_input_style,
    onChangeText
}) => {
    return(
        <TextInput
        style={[styles.txt_in_username, txt_input_style]}
        placeholder={txt_input_label}
        onChangeText={onChangeText}
        />
    )
}

TextInputView.propType = {
    txt_input_label: PropTypes.string,
    txt_input_style: PropTypes.any
}

const styles= StyleSheet.create({
    txt_in_username:{
        width:'100%',
        borderWidth: 1,
        borderRadius: 100,
        height:50,
        fontSize:font_size,
        textAlign: 'center',
        marginTop:10,
        elevation:1
    }   
})

export default TextInputView
