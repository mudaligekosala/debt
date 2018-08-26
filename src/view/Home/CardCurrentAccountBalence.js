import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import TextView from '../ReusbaleComponents/Text';
import CardView from '../ReusbaleComponents/Card';
import ButtonView from '../ReusbaleComponents/Button';
import AccountDetailsView from '../ReusbaleComponents/ViewHomeUserCurrentDetails';
import ViewBillsListItem from '../ReusbaleComponents/ViewBillListItems';
//theme
import { color_app_background, font_size_small, color_small_button_text, color_primary_text } from '../../utils/theme_config';

class AccountBalence extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            < View style={styles.container} >

                <View style={styles.cashDetails}>

                    <AccountDetailsView txtLabel={'CommBank Account'} txtAmount={'8500'} isLastItem={false} />

                    <AccountDetailsView txtLabel={'Cash Pocket'} txtAmount={'400'} isLastItem={false} />

                    <AccountDetailsView txtLabel={'Invest ASX Account'} txtAmount={'20000'} isLastItem={true} />
                </View>
                <View style={styles.billDetails}>
                    <FlatList
                        data={[{ label: 'Credit card bill', text: '120', warning:true }, { label: 'Credit card bill', text: '120' ,warning:true }, { label: 'Home loan 2', text: '2000',warning:false  }, { label: 'Home Lone', text: '11500',warning:false }, { label: 'rent', text: '1200',warning:false },]}
                        renderItem={({ item }) => <ViewBillsListItem txtLabel={item.label} txtAmount={item.text} isAnimated={item.warning} />}
                    />
                </View>

            </View>

        )
    }


}
const styles = StyleSheet.create({
    cashDetails: {
        flex: 1
    },
    billDetails: {
        flex: 1.5
    },
    container: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        flex: 1,
        flexDirection: 'column',
        margin: 20,
        shadowOpacity: 0.1,
        borderRadius: 10,
        padding: 5
    }
})

export default AccountBalence;
