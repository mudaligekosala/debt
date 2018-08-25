import React from 'react';
import { StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';


const ImageView = ({
    source,
    img_style
}) => {
    return(
        <Image style={[styles.img, img_style]} source={source} resizeMode='contain' />
    )
}

ImageView.propTypes = {
    img_style: PropTypes.any
}

const styles = StyleSheet.create({
    img:{
        width:undefined,height:undefined, flex:1
    }
})

export default ImageView;
