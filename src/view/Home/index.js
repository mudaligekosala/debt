import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
//reusable component
import CardView from '../ReusbaleComponents/Card';
import ChartView from './ChartView';

class Home extends Component {
    

    render() {

        return (
            <ScrollView>
                <View style={styles.container}>
                    {/* view profile view */}
                    <CardView card_profile_view={true}>

                    </CardView>
                    {/* view my account progree month */}
                    <ChartView />

                    {/* view total balance */}
                    <CardView />
                    
                </View>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'#f5f5f5'

    }
})

export default Home;