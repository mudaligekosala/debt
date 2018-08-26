import React from 'react';
import { StyleSheet, View } from 'react-native';

import { color_app_background, font_size_small, color_small_button_text, color_primary_text } from '../../utils/theme_config';

import TextView from './Text';
import SeperatorView from './Separator';


const AccountDetails = ({
    txtLabel,
    txtAmount,
    isLastItem
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.container_backAccount}>

                <TextView txt_label={txtLabel} style_label={styles.txt_amount_label} />

                <TextView txt_label={`${txtAmount} RS`} style_label={styles.txtAmountTxt} />

            </View>
            { !isLastItem && (
                <View style={styles.seperator} />
            )  }
            

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        
    },
    seperator: {
        width: "100%",
        alignSelf: "center",
        height: 1,
        backgroundColor: color_app_background,
        elevation: 1,
       
    },
    txt_amount_label: {
        fontSize: font_size_small,
        color: color_primary_text
    },
    txtAmountTxt: {
        fontSize: font_size_small,
        color: color_primary_text
    },

    container_backAccount: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

export default AccountDetails;