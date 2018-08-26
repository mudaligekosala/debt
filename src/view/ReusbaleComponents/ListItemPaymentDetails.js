import React from 'react';
import { StyleSheet, View } from 'react-native';

import TextView from './Text'

const paymentListItem = ({
    paymentType,
    paymentAmount,
    paymentDocAdded,
}) => {

    return(
        <View style={styles.container}>
            <View style={styles.stylePaymentDetailsContainer}>
                <TextView txt_label = {paymentType} ></TextView>
                <TextView txt_label = {paymentDocAdded}></TextView>
            </View>
            <View style={styles.stylePaymentAmountContainer}>
            <TextView txt_label = {paymentAmount} ></TextView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    stylePaymentDetailsContainer:{
        flex:2,
        flexDirection:'column',
        alignItems:'center'
    },
    stylePaymentAmountContainer:{
        flex:1, alignItems:'center'
    }
})

export default paymentListItem;