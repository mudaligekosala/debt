import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//theme style
import { color_primary, color_p_dark_text } from '../../utils/theme_config';
//reusable Comp
import Label from './Text';

const Button = ({
  onPress,
  label = 'Click me',
  style_button = styles.button,
  style_text,
  disable = false,
  icon_name=''
}) => {
  return (
    <TouchableOpacity style={[styles.button, style_button]} onPress={onPress} disable={disable}>
      <Icon name={icon_name} color={color_p_dark_text} size={28} />
      <Label style_label={style_text} txt_label={label} />
    </TouchableOpacity>
  );
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string,
  style_button: PropTypes.any,
  style_text: PropTypes.any,
  disable: PropTypes.bool
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color_primary,
    marginTop: 10,
    marginBottom: 10,
    elevation: 1,
    height: 50,
flexDirection:'row'
  }
});

export default Button;