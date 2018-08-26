import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Animated } from 'react-native';
//reusable component
import CardView from '../ReusbaleComponents/Card';
import ChartView from './ChartView';
import CardCurrentAccountBalence from './CardCurrentAccountBalence';
//theme
import { color_app_background } from '../../utils/theme_config.js';

class Home extends Component {
  

    render() {

        return (

            <View style={styles.container}>

                <View style={styles.cardView}>
                    {/* view profile view */}
                    <CardView card_profile_view={true} >

                    </CardView>
                </View>

                <View style={styles.chartView}>
                    {/* view my account progree month */}
                    <ChartView />
                </View>

                <View style={styles.cardAccountBalence}>

                    {/* view total balance */}
                    <CardCurrentAccountBalence />
                </View>




            </View>

        )
    }
}

const styles = StyleSheet.create({
    cardAccountBalence: {
        flex: 3
    },
    chartView: {
        flex: 2.5
    },
    cardView: {
        flex: 1.2
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: color_app_background
    }
})

export default Home;