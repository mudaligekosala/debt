import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";
import {Navigation} from 'react-native-navigation';

//styles
import Button from "../ReusbaleComponents/Button";
import TextInputView from "../ReusbaleComponents/TextInput";
import TextView from "../ReusbaleComponents/Text";
import Seperator from '../ReusbaleComponents/Separator';

//theme config
import { color_p_light, font_size_small, color_p_dark, color_p_dark_text } from "../../utils/theme_config";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      password: undefined,
      btn_login_label:'LOGIN',
      err_login: false
    };
  }

  render() {
    validateEmailidation = email => {
      let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };

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

    button_pressed = (type) => {
      switch (type) {
        case "login":
          switch (validateEmailidation(this.state.email)) {
            case true:
              console.log("true");
              this.state.password.length >= 6
                ? login_user()
                : this.setState({ err_login: true });

              break;
            case false:
              this.setState({ err_login: true });
              break;
          }
          break;
        case "register":
          switch (validateEmailidation(this.state.email)) {
            case true:
              console.log("true");
              this.state.password.length >= 6
                ? register_user()
                : this.setState({ err_login: true });

              break;
            case false:
              this.setState({ err_login: true });
              break;
          }
          break;
          break;
      }
    };

    login_user = () => {
      alert("Logged");
    };

    return (
      <View style={styles.container}>
        <TextInputView
          txt_input_label={"username"}
          onChangeText={email => this.setState({ email })}
        />

        <TextInputView
          txt_input_label={"password"}
          onChangeText={password => this.setState({ password })}
        />
        
        {this.state.err_login && (
          <TextView
            txt_label={"Invalid email or password"}
            style_label={styles.err_text}
          />
        )}

        {this.state.btn_login_label === 'LOGIN' && (
        //  <Button onPress={()=>button_pressed("login")} label={"Login"} />
          <Button style_text={styles.btn_text} onPress={start_home} label={"Login"} />

        )}
        {this.state.btn_login_label === 'REGISTER' && (
          <Button style_text={styles.btn_text} onPress={()=>button_pressed("register")} label={"Register"} />
        )}

        <Seperator/>

          <Button style_text={styles.btn_text} style_button={styles.fb_btn} onPress={()=>button_pressed("register")} label={"Continue with facebook"} />

          <Button style_text={styles.btn_text} style_button={styles.google_btn} onPress={()=>button_pressed("register")} label={"Continue with Google"} />


        {this.state.btn_login_label === 'LOGIN' ? (
          <Button
            onPress={() => this.setState({ btn_login_label: 'REGISTER' })}
            style_button={styles.reg_button}
            style_text={styles.reg_text}
            label={"Are you want to Live Better Life? Then Register here. "}
          />
        ):
        <Button
            onPress={() => this.setState({ btn_login_label: 'LOGIN' })}
            style_button={styles.reg_button}
            style_text={styles.reg_text}
            label={"Alrady user then Login. "}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    flex: 1,
  },
  err_text: {
    color: "red",
    fontSize: font_size_small,
    margin: 0,
    marginLeft: 10
  },
  reg_button: {
    backgroundColor: "#fff",elevation:0
  },
  reg_text: {
    color: color_p_light,
    fontSize: font_size_small,
    margin: 5
  },
  fb_btn:{
    backgroundColor:'#3B5998'
  },
  google_btn:{
    backgroundColor:'#db3236'
  },
  btn_text:{
    color:color_p_dark_text
  }
});

export default LoginForm;
