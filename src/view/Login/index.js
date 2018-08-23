import React, { Component } from "react";
import { View, Text, StyleSheet , Dimensions } from "react-native";

//component
import Logo from "./logo";
import LoginForm from "./login_form";

//const window = Dimensions.get('window');

class Login extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container_logo}>
          <Logo />
        </View>
        <View style={styles.container_login_form}>
          <LoginForm />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  container_logo: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container_login_form: {
    flex: 3
  }
});

export default Login;
