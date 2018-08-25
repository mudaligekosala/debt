import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


import ImageView from './Image';
import TextView from './Text';


import { font_size_small } from '../../utils/theme_config';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardView = ({
    card_profile_view = false,
  
  
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.card_container}>
                {/* profile view*/}
                {card_profile_view && (
                    <View style={styles.container_profile}>
                        <View style={styles.container_profile_details}>
                            {/*view profile pic and name*/}
                            <View style={styles.view_profile}>
                                <View style={styles.view_profile_img}>
                                    <ImageView source={require('../../images/money.png')} img_style={{ width: 40, height: 40, marginTop: 0 }} />
                                </View>
                                <View style={styles.view_profile_name}>
                                    <TextView txt_label={'Gayathri Gamage'} style_label={{ fontSize: 14, marginTop: 0, marginBottom: 5 }} />
                                    <TextView txt_label={'Free account'} style_label={styles.txt_account_status} />
                                </View>

                            </View>

                            <View style={styles.view_go_next_image}>
                                <Icon name={'chevron-right'} size={28} />
                            </View>

                        </View>
                        <View style={styles.seperator} />
                        <View style={styles.container_support}>
                            <TextView txt_label={'Support'} style_label={styles.txt_account_status} />
                            <TextView txt_label={'1 unread message'} style_label={styles.txt_account_status} />
                        </View>
                    </View>

                )}
              
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
   
  
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

export default CardView;