import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import {styles} from './developmentStyles';

const Development = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>this is just amazing!</Text>
      <StatusBar style="auto" />
    
    </View>
  );
};



export default Development;
