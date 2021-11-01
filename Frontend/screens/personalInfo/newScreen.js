import React, {useState} from "react";
import {
  Text,
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import { styles } from "./stylesPInfo";
import { FontAwesome, FontAwesome5  } from '@expo/vector-icons';
import normalize from 'react-native-normalize';


const NewScreen = ({navigation}) => {

  const [gender, SetGender] = useState([
    {option: 'Female',},
    {option: 'Male'},
    {option: 'Other'},
    {option: 'I prefer not to say'},
  ])

  const handlePress = () =>{
    console.log("gender!")
    navigation.navigate('InfoAge', )
  }


  return (
    <SafeAreaView style={styles.container}>

        <Text style={styles.textTitleQuestion}>I am a new screen! </Text>
        <Text style={styles.textTitleQuestion}>Who are you?</Text>

        
 
    </SafeAreaView>
    
  );
};

export default NewScreen;


