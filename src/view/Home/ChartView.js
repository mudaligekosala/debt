import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory-native';

import ButtonView from '../ReusbaleComponents/Button';

import { font_size_small, color_small_button_background, color_small_button_text } from '../../utils/theme_config';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class ChartView  extends Component{
constructor(){
    super();
    this.state={
        chart_type : 'weekly',
    }
}
    
render(){

    //view monthly chart view
    btn_view_monthly_chart_view = () =>{
        this.setState({
            chart_type: 'monthly' 
        })
    }

    //view weekly chart view
    btnViewMonthChartView = () => {
        this.setState({
            chart_type: 'weekly' 
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.card_container}>
                {/*chart container*/}
                    <View style={styles.progress_contatiner}>
                        {/* chart container */}
                        <View style={styles.container_chart_and_button}>
                            {/*Chart Monthly*/}
                            {this.state.chart_type === 'monthly' && (
                                <View style={styles.container_chart}>
                                    <VictoryChart
                                        //theme={VictoryTheme.material}
                                        height={150}
                                        padding={{ top: 30, bottom: 30, left: 30, right: 70 }}
                                        x="Months"
                                    >
                                        <VictoryLine
                                            animate={{
                                                duration: 2000,
                                                onLoad: { duration: 1000 }
                                            }}
                                            name="income"
                                            //interpolation="natural"
                                            categories={{ x: ["Jan", "Feb", "march", 'apirl', 'june'] }}
                                            labels={(datum) => datum.y}
                                            //     padding={{ top: 20, bottom: 60 }}
                                            style={{
                                                data: { stroke: color_small_button_text },
                                                parent: { border: "1px solid #ccc" }
                                            }}
                                            //domain={{ y: [0, 100, 300, 600, 800, 1000]}}
                                            data={[
                                                { x: 1, y: 20 },
                                                { x: 2, y: 30 },
                                                { x: 3, y: 50 },
                                                { x: 4, y: 35 },
                                                { x: 5, y: 60 }
                                            ]}
                                        />

                                        <VictoryLine
                                            animate={{
                                                duration: 2000,
                                                onLoad: { duration: 1000 }
                                            }}
                                            name="expense"
                                            // interpolation="natural"
                                            categories={{ x: ["Jan", "Feb", "march", 'apirl', 'june'] }}
                                            labels={(datum) => datum.y}
                                            // padding={{ top: 20, bottom: 60 }}
                                            style={{
                                                data: { stroke: color_small_button_text },
                                                parent: { border: "1px solid #fff" }
                                            }}
                                            //domain={{ y: [0, 100, 300, 600, 800, 1000]}}
                                            data={[
                                                { x: 1, y: 20 },
                                                { x: 2, y: 50 },
                                                { x: 3, y: 30 },
                                                { x: 4, y: 40 },
                                                { x: 5, y: 50 }
                                            ]}
                                        />

                                    </VictoryChart>
                                </View>
                            )}
                            {/*Chart Weekly*/}
                            {this.state.chart_type === 'weekly' && (
                                <View style={styles.container_chart}>
                                    <VictoryChart
                                        //theme={VictoryTheme.material}
                                        height={150}
                                        padding={{ top: 30, bottom: 30, left: 30, right: 70 }}
                                        x="Months"
                                    >
                                        <VictoryLine
                                            animate={{
                                                duration: 2000,
                                                onLoad: { duration: 1000 }
                                            }}
                                            name="income"
                                            //interpolation="natural"
                                            categories={{ x: ["Jan", "Feb", "march", 'apirl', 'june'] }}
                                            labels={(datum) => datum.y}
                                            //     padding={{ top: 20, bottom: 60 }}
                                            style={{
                                                data: { stroke: color_small_button_text },
                                                parent: { border: "1px solid #ccc" }
                                            }}
                                            //domain={{ y: [0, 100, 300, 600, 800, 1000]}}
                                            data={[
                                                { x: 1, y: 20 },
                                                { x: 2, y: 30 },
                                                { x: 3, y: 50 },
                                                { x: 4, y: 35 },
                                                { x: 5, y: 60 }
                                            ]}
                                        />

                                        <VictoryLine
                                            animate={{
                                                duration: 2000,
                                                onLoad: { duration: 1000 }
                                            }}
                                            name="expense"
                                            // interpolation="natural"
                                            categories={{ x: ["Jan", "Feb", "march", 'apirl', 'june'] }}
                                            labels={(datum) => datum.y}
                                            // padding={{ top: 20, bottom: 60 }}
                                            style={{
                                                data: { stroke: color_small_button_text },
                                                parent: { border: "1px solid #fff" }
                                            }}
                                            //domain={{ y: [0, 100, 300, 600, 800, 1000]}}
                                            data={[
                                                { x: 1, y: 20 },
                                                { x: 2, y: 50 },
                                                { x: 3, y: 30 },
                                                { x: 4, y: 40 },
                                                { x: 5, y: 50 }
                                            ]}
                                        />

                                    </VictoryChart>
                                </View>
                            )}

                            {/* button container */}
                            <View style={styles.container_btn}>
                                <ButtonView onPress={btn_view_monthly_chart_view} label={'Monthly View'} style_button={styles.chart_btn_style} style_text={styles.chart_btn_text_style} />
                                <ButtonView onPress={btnViewMonthChartView}  label={'Weekly View'} style_button={styles.chart_btn_style} style_text={styles.chart_btn_text_style} />
                            </View>

                        </View>

                    </View>
            </View>
        </View>

    )
}
}

const styles = StyleSheet.create({
    container_chart_and_button: {
        //backgroundColor: 'gray',
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
        fontSize: font_size_small,
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
        justifyContent: 'center',

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