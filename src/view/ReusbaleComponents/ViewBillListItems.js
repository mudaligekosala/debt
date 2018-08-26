import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';

import { color_app_background, font_size_small, color_small_button_text, color_primary_text } from '../../utils/theme_config';

import TextView from './Text';
import SeperatorView from './Separator';


const AccountDetails = ({
    txtLabel,
    txtAmount,
    isAnimated = false
}) => {

    _startAnimatedView = () => {

        //ripple animation
        const background_color = new Animated.Value(0);

        Animated.loop(
            Animated.timing(background_color, {
                toValue: 200,
                delay: 2000

            })
        ).start()

        return (
            <View style={styles.container1}>

                <View style={styles.animateContainer}>

                    <Animated.View style={{ flex: 1, backgroundColor:
                        background_color.interpolate({
                            inputRange:[0,100]
                            ,outputRange:["#fff", "#ffebee"]
                        })
                    } }>
                        <View style={[styles.container_backAccount]} >
                            <TextView txt_label={txtLabel} style_label={styles.txt_amount_label} />

                            <TextView txt_label={`${txtAmount} RS`} style_label={styles.txtAmountTxt} />

                        </View>

                    </Animated.View >

                </View>



            </View >

        )
    }

    _startNormalView = () => {
        return (
            <View style={styles.container_backAccount}>

                <TextView txt_label={txtLabel} style_label={styles.txt_amount_label} />

                <TextView txt_label={`${txtAmount} RS`} style_label={styles.txtAmountTxt} />

            </View>
        )
    }


    return (
        <View style={styles.container}>

            {isAnimated ? <_startAnimatedView /> : <_startNormalView />}

            <View style={styles.seperator} />

        </View>
    )
}





const styles = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: 'row',



    },
    container: {
        flex: 1,
        flexDirection: 'column',


    },
    animateContainer: {
        flex: 1,
        


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
        color: color_small_button_text
    },
    txtAmountTxt: {
        fontSize: font_size_small,
        color: color_small_button_text
    },

    container_backAccount: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

export default AccountDetails;