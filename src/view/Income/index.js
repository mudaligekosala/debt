import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity,FlatList,Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//chart
import ChartView from '../ReusbaleComponents/BarChartView'
import ButtonView from '../ReusbaleComponents/Button';
//theme
import { color_primary, color_p_dark, color_app_background, font_size_extra_small, color_small_button_background } from '../../utils/theme_config';

class Income extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isExpense: false,
            isIncome: true,
            isSaving: false
        }
    }

    render() {

        _incomeViewSelect = () => {
            this.setState({
                isIncome: true,
                isExpense: false,
                isSaving: false
            })
        }

        _expenseViewSelect=()=>{
            this.setState({
                isIncome:false,
                isExpense:true,
                isSaving:false
            })
        }

        _savingViewSelect=()=>{
            this.setState({
                isIncome:false,
                isExpense:false,
                isSaving:true
            })
        }


        return (

            <View style={styles.container}>
                <View style={styles.chartCardContainer}>
                    <ChartView arrXValues={["Jan", "Feb", "march", 'apirl', 'june']} />
                </View>

                <View style={styles.btnCardContainer}>
                    <ButtonView onPress={_incomeViewSelect} style_button={this.state.isIncome ? styles.btnStyleSelected : styles.btnStyleIdle} label={'Income'} style_text={styles.btnTextStyle} />
                    <ButtonView onPress={_savingViewSelect} style_button={this.state.isSaving ? styles.btnStyleSelected : styles.btnStyleIdle} label={'Saving'} style_text={styles.btnTextStyle} />
                    <ButtonView onPress={_expenseViewSelect} style_button={this.state.isExpense ? styles.btnStyleSelected : styles.btnStyleIdle} label={'Expense'} style_text={styles.btnTextStyle} />
                </View>

                <View style={styles.detailsCardContainer}>
                    <FlatList
                        data={[{name:'Gas', amount:'100'},{name:'Food', amount:'30'}]}
                        renderItem={({item}) => <Text>{item.name}</Text>}
                    />
                </View>

                <View style={styles.futureDetailsCardContainer}>

                </View>


                <View style={styles.floatingButton}>
                    <TouchableOpacity style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
                        <Icon name={'plus'} color={'#fff'} size={28} />
                    </TouchableOpacity>
                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({

    floatingButton: {
        flex: 1,
        height: 60,
        width: 60,
        borderRadius: 30,
        alignItems: 'flex-end',
        backgroundColor: color_p_dark,
        bottom: 10,
        right: 10,
        position: "absolute",
        shadowOpacity:0.2

    },
    btnTextStyle: {
        fontSize: font_size_extra_small,
        margin: 0
    },
    btnStyleSelected: {
        width: '30%'
        , height: 20,
        backgroundColor:'lightgray'
         
    },
    btnStyleIdle: {
        width: '30%'
        , height: 20,
        backgroundColor:color_app_background
    },
    viewScroll: {

        flex: 1
    },
    container: {
        flex: 1,

    },
    chartCardContainer: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: color_p_dark,
    },
    btnCardContainer: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:color_small_button_background
    },
    detailsCardContainer: {
        flex: 2,
        flexDirection: 'column',
        backgroundColor: color_app_background,
    },
    futureDetailsCardContainer: {
        flex: 2,
        flexDirection: 'column',
        backgroundColor: '#fff',
        backgroundColor: color_app_background,
    }
})

export default Income;