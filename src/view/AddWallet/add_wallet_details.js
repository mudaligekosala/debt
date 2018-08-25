import React from 'react';
import { StyleSheet, Modal, View } from 'react-native';
//reusable components
import TextInputView from '../ReusbaleComponents/TextInput';
import ButtonView from '../ReusbaleComponents/Button';
import TextView from '../ReusbaleComponents/Text';
//theme config
import { color_p_dark_text } from '../../utils/theme_config';

const AddWalletDetails = ({
    visible,
    onRequestClose,
    onPress
}) => {

    return (
        <View style={styles.container}>
            <Modal
                animationType='slide'
                transparent='false'
                visible={visible}
                onRequestClose={onRequestClose}>

                <View style={styles.sub_container}>
                    <View style={styles.view_wallet_name}>
                        <TextInputView txt_input_style={styles.text_input} txt_input_label={'Wallet name'} />

                    </View>
                    <View style={styles.main_view_amount}>
                        <View style={styles.view_amount}>
                            <TextInputView txt_input_style={styles.text_input_amount} txt_input_label={'Amount'} />
                            <TextView style_label={styles.txt_label} txt_label={'Rs'} />
                        </View>
                    </View>
                    <View style={styles.view_button}>
                        <ButtonView onPress={onPress} icon_name={'check'} label={'ADD'} style_button={styles.btn_style} style_text={styles.btn_text} />
                    </View >
                </View>

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color_p_dark_text,

    },
    sub_container: {
        flex: 1,
        backgroundColor: color_p_dark_text,
        justifyContent: 'center',
        padding: 20

    },
    text_input_amount: {
        width: '80%'
    },
    view_amount: {
       
        flexDirection: 'row',
        alignItems: 'center',

    },
    main_view_amount: {
        flex:1,
        justifyContent:'flex-start',
        marginTop:20
    },
    txt_label: {

    }, btn_style: {
        width:'50%',
        
    },
    btn_text: {
        color: color_p_dark_text
    },
    view_button: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems:'flex-end'

    },
    view_wallet_name: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'

    }


})

export default AddWalletDetails;