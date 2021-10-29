import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  View,
  Button,
  Alert,
} from "react-native";
import { styles } from "./personTypeStyles";


const InfoPersonType = () => {
  const handlePress = () =>
    console.log("i just clicked on the text and it prints this!");

  return (
    <SafeAreaView style={styles.container}>

        <Text>Who are you?</Text>
        <Text>In order to predefine search for you we need you to answer some questions</Text>
        <View style={styles.roundL}><Text>Immigrant</Text></View>
        <View style={styles.roundXL}><Text>refugee</Text></View>
        <View style={styles.roundM}><Text>homeless</Text></View>
        <View style={styles.roundXXL}><Text>just searching for help</Text></View>
      
    </SafeAreaView>
  );
};

export default InfoPersonType;


