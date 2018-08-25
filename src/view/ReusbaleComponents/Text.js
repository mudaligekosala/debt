import React from 'react';
import { StyleSheet,Text } from 'react-native';
import PropTypes from 'prop-types';
import { font_size, color_primary_text } from '../../utils/theme_config';

const Label = ({ 
    txt_label = 'Click me',
    style_label = styles.text,
 }) => {
     return(
      <Text style={[styles.text, style_label]}>{txt_label} </Text>
     )
 }

 Label.propTypes= {
     txt_label: PropTypes.string,
     style_label: PropTypes.any
 }

 const styles = StyleSheet.create({
    text: {
      color: color_primary_text,
      fontSize: font_size,
      margin:10,
      fontFamily:'NotoSerifSinhala-Regular',
      
    },
  });

  export default Label
  