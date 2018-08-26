import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { VictoryChart, VictoryTheme,VictoryBar,VictoryLabel } from 'victory-native';

import ButtonView from './Button';

import { color_p_light,font_size_small,font_size_extra_small, color_small_button_background, color_small_button_text } from '../../utils/theme_config';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ChartView = ({
    arrXValues
}) => {

    return (
        <View style={styles.container_chart}>
        <VictoryChart
          //  theme={VictoryTheme.material}
            height={200}
            domainPadding={{ x: 10,}}
            padding={{ top: 30, bottom: 30, left: 30, right: 70 }}
          //  x="Months"
        >
            <VictoryBar
                animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                }}
                alignment="start"
                barWidth={40}
                cornerRadius={10}
               // name="income"
                barRatio={0.8}
                //interpolation="natural"
                categories={{ x: arrXValues }}
               
                //     padding={{ top: 20, bottom: 60 }}
                style={{
                    data: { fill: color_p_light },
                    
                }}
               
                //domain={{ y: [0, 100, 300, 600, 800, 1000]}}
                data={[
                    { x: 1, y: 20 },
                    { x: 2, y: -30 },
                    { x: 3, y: 50 },
                    { x: 4, y: 35 },
                   
                ]}
            />
        </VictoryChart>
    </View>

    )
}


const styles = StyleSheet.create({
    container_chart_and_button: {
       
        flex: 1,
        flexDirection: 'column',
    },
    container_chart: {
    },
    chart_btn_style: {
        width: '30%',
        height: undefined,
        backgroundColor: color_small_button_background,
        margin: 5
    },
    chart_btn_text_style: {
        fontSize: font_size_extra_small,
        margin: 5,
        color: color_small_button_text
    },
    container_btn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',


    },
    view_profile_img: {
        borderRadius: 100
    },
    view_profile_name: {
        flexDirection: 'column'
    },
    view_profile: {
        flexDirection: 'row',
    },
    view_go_next_image: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1
    },
    txt_account_status: {
        fontSize: font_size_small,
        marginTop: 0,
        color: 'gray'
    },
    container_support: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container_profile_details: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 5
    },
    container: {
        flex: 1,
        

    },
    card_container: {
        flex: 1,
        flexDirection: 'column',
        margin: 20,
        backgroundColor: '#fff',
        shadowOpacity: 0.1,
        borderRadius: 10,
        padding: 5
    },
    container_profile: {
        flexDirection: 'column',
        flex: 1
    },
    seperator: {
        width: "100%",
        height: 1,
        backgroundColor: 'gray',
        shadowOpacity: 0.1,
        marginBottom: 5
    }
})

export default ChartView;