import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import {styles} from './developmentStyles';

const Development = ({ navigation }) => {

  const handlePress= () => {
    navigation.navigate('OrganisationsListScreen')
  }

  return (
    <View style={styles.container}>
      <Text>this is just amazing!</Text>
      <StatusBar style="auto" />
<Button title='OrganisationsListScreen' 
onPress={handlePress}/>

    
    </View>
  );
};



export default Development;
