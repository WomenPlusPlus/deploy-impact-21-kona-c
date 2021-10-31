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


const InfoGender = ({navigation}) => {

  // const [gender, SetGender] = useState([
  //   {option: 'Female',},
  //   {option: 'Male'},
  //   {option: 'Other'},
  //   {option: 'I prefer not to say'},
  // ])

  const handlePress = () =>{
    console.log("gender!")
    navigation.navigate('InfoAge', )
  }


  return (
    <SafeAreaView style={styles.container}>

        <Text style={styles.textTitleQuestion}>What is your gender?</Text>
        <Text style={styles.textTitleQuestion}>What is the person's gender?</Text>
        
        <View style={styles.bubbleBox}>      
        
                            {/* <FlatList 
                                data={gender}
                                keyExtractor={(item) => item.option}
                                renderItem={({item}) => (
                                  <TouchableOpacity onPress={handlePress}>
                            
                                  <View style={styles.bubble}>      
                                  <Text> {item.option}</Text>
                                  </View>
                                
                                  </TouchableOpacity>
                                  )}
                                /> */}
        <View style={styles.bubble}><FontAwesome name="female" size={normalize(44)} color="white" /><Text style={styles.textBubble}>Female</Text></View>
        <View style={styles.bubble}><FontAwesome5 name="male" size={normalize(44)} color="white" /><Text style={styles.textBubble}>Male</Text></View>
        
        <View style={styles.bubble}><Text style={styles.textBubble}>Prefer not to say</Text></View>
        </View>
    </SafeAreaView>
    
  );
};

export default InfoGender;


