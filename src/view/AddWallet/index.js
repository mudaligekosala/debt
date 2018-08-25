import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {Navigation} from 'react-native-navigation';

//import views
import TextView from '../ReusbaleComponents/Text';
import ImageView from '../ReusbaleComponents/Image';
import ButtonView from '../ReusbaleComponents/Button';
//theme config
import { font_size_small, color_primary_text, color_p_dark_text, color_primary, color_p_dark } from '../../utils/theme_config';
//modal
import ModalAddFirstWallet from './add_wallet_details';


class AddWallet extends Component {

    constructor(props) {
        super(props)
        this.state ={
            isModelVisible: false
        }
    }

    render() {

        //start home page
        start_home = () => {
            Navigation.startTabBasedApp({
                tabs:[
                    {
                        label:'Home',
                        screen:'debt.home',
                        icon:require('../../images/home_icon.png'),
                        title:'Dashboard',
                       
                    },
                    {
                        label:'Income',
                        screen:'debt.income',
                        icon:require('../../images/income_icon.png'),
                        title:'Income'
                    },
                    {
                        label:'Expense',
                        screen:'debt.expense',
                        icon:require('../../images/expense_icon.png'),
                        title:'Expense'
                    },
                    {
                        label:'Savings',
                        screen:'debt.savings',
                        icon:require('../../images/saving_icon.png'),
                        title:'Savings'
                    }
                ],
                tabsStyle:{
                    tabBarBackgroundColor: color_p_dark,
                    tabBarButtonColor:color_p_dark_text,
                    tabBarSelectedButtonColor:color_p_dark_text
                },
                appStyle:{
                    orientation:'auto',
                }
            })
        }

        add_first_wallet=(visible)=>{
            this.setState({
                isModelVisible: visible
            })

            
        }

        return (
            <View style={styles.container}>
            <View style={[styles.sub_container, {flex:0.5, justifyContent: 'center', alignItems: 'center' }]}></View>
                <View style={[styles.sub_container, { justifyContent: 'center', alignItems: 'center'}]}>
                    <View  style={{backgroundColor: color_p_dark, padding:30, borderRadius:100}}>
                        <ImageView source={require('../../images/money_2.png')} img_style={{  width: 128, height: 128 }} />
                    </View>
                </View>
                <View style={styles.sub_container}>
                    <TextView
                        style_label={styles.text_view_lable}
                        txt_label={'අපිට ඔනෙ ඔයාගෙ පලවෙනි "ගිනුම​" එකෙ තියන ආදයම් වියදම් බලන්න​.ඔයාට පුලුවන් හදන්න ඔයගෙ ව්‍යපරයට ගිනුමක් හරි ඔයාගෙ Bank Account එක හරි Investment Account එක හරි නැත්නම් ඔනෙම ගිනුමක් ඔයතට Track ඔනෙ'}
                        />
                </View>
                <View style={[styles.sub_container, { alignItems: 'center' }]}>
                    <ButtonView icon_name={'playlist-plus'} onPress={() =>add_first_wallet(true)} label={'Account එක හදන්න​'} style_button={styles.button} style_text={styles.button_text} />

                </View>

                { this.state.isModelVisible && (
                    <ModalAddFirstWallet visible={this.state.isModelVisible} onPress={start_home} />
                ) }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text_view_lable: {
        fontSize: font_size_small,
        color: color_p_dark_text,
    },
    button: {
        backgroundColor: color_p_dark,
        width: '70%',
    },
    button_text: {
        color: color_p_dark_text
    },
    container: {
        flex: 1,
        backgroundColor: color_primary
    },
    sub_container: {
        flex: 1,
        justifyContent: 'center',

    }
})

export default AddWallet;