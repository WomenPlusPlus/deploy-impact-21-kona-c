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

    const [institution, SetInstitution] = useState([
    {option: 'Person',},
    {option: 'Institution'},
    {option: 'Company'},

  ])

  const [institutionResult, SetInstitutionResult] = useState()


  const handlePress = () =>{
    navigation.navigate('HelpForWho', {institution: 'option'})
    SetInstitutionResult()
  }
  
  const handlePress1 = () =>{
    navigation.navigate('HelpForWho', {institution: 'option'})
    SetInstitutionResult()
  }

  const handlePress2 = () =>{
    navigation.navigate('HelpForWho', {institution: 'option'})
    SetInstitutionResult()
  }

  return (
    <SafeAreaView style={styles.container}>

        <Text style={styles.textTitleQuestion}>Are you looking for help for...</Text>
        <Text>Result from previous screen: {institutionResult}</Text>
        
        <View style={styles.bubbleBox}>      
        <Pressable onPress={handlePress}>
        <View style={styles.bubble}><Text style={styles.textBubble}>{institution[0].option}</Text></View>
        </Pressable>

        <Pressable onPress={handlePress1}>
        <View style={styles.bubble}><Text style={styles.textBubble}>{institution[1].option}</Text></View>
        </Pressable>

        <View style={styles.bubble}><Text style={styles.textBubble}>{institution[2].option}</Text></View>
        </View>
    </SafeAreaView>
    
  );
};

export default InstitutionType;


