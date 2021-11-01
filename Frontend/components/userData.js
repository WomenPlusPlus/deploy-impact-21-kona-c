import React from "react";
import { TouchableHighlight, Image, Text, View, StyleSheet  } from "react-native";





export default function UserData({navigation}) {


  return (
    
      <View style={styles.btnContainer}>

        <Text style={styles.btnText}>tescik</Text>
     <Text style={styles.btnText}>{navigation.getParam('id')}</Text> 
      </View>
 
  );
}


const styles = StyleSheet.create({
    btnClickContain: {
      flexDirection: 'row',
      padding: 5,
      marginTop: 5,
      marginBottom: 5
    },
    btnContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start'
    },
    btnIcon: {
      height: 25,
      width: 25
    },
    btnText: {
      fontSize: 16,
      marginLeft: 10,
      marginTop: 2
    }
  });