import React from "react";
import { StyleSheet, View } from "react-native";
import { color_primary, font_size_small } from "../../utils/theme_config";
import Text from "./Text";

const Seperator = () => (
  <View style={styles.container}>
    <View style={styles.seperator} />
    <Text style_label={styles.txt} txt_label={'OR'}/>
    <View style={styles.seperator} />
  </View>
);

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft:10,
    marginRight:10
    },
    seperator: {
    width: "50%",
    alignSelf: "center",
    height: 1,
    backgroundColor: color_primary,
    elevation: 1,
    
  },
  txt:{
    fontSize: font_size_small,
    margin:5
  }
});

export default Seperator;
