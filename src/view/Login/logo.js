import React from "react";
import { StyleSheet, View } from "react-native";

//styles
import { font_size_large } from "../../utils/theme_config";
//components
import Label from "../ReusbaleComponents/Text";
//image
import ImageView from '../ReusbaleComponents/Image';

const Logo = () => {
  return (
    <View style={styles.container}>
      <ImageView source= {require('../../images/money_2.png')} />
      <Label style_label={styles.text} txt_label={'එකඋන්ටන්'}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:0.6,
    flexDirection: 'row',
   marginLeft: 40,
   marginRight:40,
   justifyContent: 'center',
  },
  text: {
    fontSize: font_size_large,
    fontWeight: "bold",
    alignSelf: 'center'
  },
  
});

export default Logo;
