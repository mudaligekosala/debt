import React, { Component } from 'react';
import { StyleSheet,View } from 'react-native';
//import views
import TextView from '../ReusbaleComponents/Text';
import ImageView from '../ReusbaleComponents/Image';
import ButtonView from '../ReusbaleComponents/Button';
//theme config
import { font_size_small, color_primary_text} from '../../utils/theme_config';



class AddWallet extends Component{
    render(){
        return(
            <View>
                <ImageView source={require('../../images/money_2.png')}/>
                <TextView 
                style_label={styles.text_view_lable}
                 txt_label={' All fonts might not support every  fontWeight or fontStyle  so you might need to checkout your font documentation to see which are supported'}/>
                <ButtonView label={'Add Wallet'} style_button={}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text_view_lable:{
        fontSize:font_size_small,
        color:color_primary_text
    }
})

export default AddWallet;