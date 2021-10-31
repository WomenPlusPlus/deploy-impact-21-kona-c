import React, {useState} from "react";
import {
  Text,
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { styles } from "./stylesPInfo";
import normalize from 'react-native-normalize';


const InstitutionType = ({navigation}) => {

  const handlePress = () =>{
    navigation.navigate('HelpForWho')
  }


  return (
    <SafeAreaView style={styles.container}>

        <Text style={styles.textTitleQuestion}>Are you looking for help for...</Text>

        
        <View style={styles.bubbleBox}>      
        <Pressable onPress={handlePress}>
        <View style={styles.bubble}><Text style={styles.textBubble}>Person</Text></View>
        </Pressable>
        <View style={styles.bubble}><Text style={styles.textBubble}>Institution</Text></View>
        
        <View style={styles.bubble}><Text style={styles.textBubble}>Company</Text></View>
        </View>
    </SafeAreaView>
    
  );
};

export default InstitutionType;


