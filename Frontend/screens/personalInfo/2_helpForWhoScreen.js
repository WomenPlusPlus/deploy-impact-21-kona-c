import React, {useState} from "react";
import {
  Text,
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import { styles } from "./stylesPInfo";
import normalize from 'react-native-normalize';


const HelpForWho = ({navigation}) => {

  const handlePress = () =>{
    navigation.navigate('InfoGender', )
  }


  return (
    <SafeAreaView style={styles.container}>

        <Text style={styles.textTitleQuestion}>Whom are you seeking help for...</Text>

        
        <View style={styles.bubbleBox}> 

        <TouchableOpacity onPress={handlePress}>
        <View style={styles.bubble}><Text style={styles.textBubble}>Myself</Text></View>
        </TouchableOpacity>

        <View style={styles.bubble}><Text style={styles.textBubble}>Others</Text></View>
        

        </View>
    </SafeAreaView>
    
  );
};

export default HelpForWho;


