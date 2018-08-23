import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//component
import Logo from './logo';
import LoginForm from './login_form';

class Login extends Component {
    render() {
        return (

            <View
                style={styles.container}
            >
                <View
                    style={styles.container_logo}
                >
                    <Logo />
                </View>
                <View
                    style={styles.container_login_form}
                >
                    <LoginForm/>

                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    container_logo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    container_login_form: {
        flex: 3
    }
})

export default Login;