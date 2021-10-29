import { Tab } from "@material-ui/core";
import { StylesContext } from "@material-ui/styles";
import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Pressable,
  View,
  Button,
  Alert,
} from "react-native";
import { styles } from "./ageStyles";


const InfoAge = ({navigation}) => {

  const [age, SetAge] = useState()

  const handlePress8 = () =>{
    console.log("i just clicked on the text and it prints this!")
    navigation.push('InfoPersonType')
  }

  return (
    <SafeAreaView style={styles.container}>

        <Text>How old are you?!</Text>
        <Text>In order to predefine search for you we need you to answer some questions</Text>
        <View style={styles.roundS}>
          <Pressable onPress={handlePress8}>
            <Text>0 - 12</Text>
            </Pressable>
          </View>
        
        <View style={styles.roundM}><Text>0 - 12</Text></View>
        <View style={styles.roundL}><Text>0 - 12</Text></View>
        <View style={styles.roundXL}><Text>0 - 12</Text></View>
        <View style={styles.roundXXL}><Text>0 - 12</Text></View>
      
    </SafeAreaView>
  );
};

export default InfoAge;


