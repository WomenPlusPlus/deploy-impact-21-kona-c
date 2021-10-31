import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  View,
  Button,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { styles } from "./stylesPInfo";


const PersonType = ({navigation}) => {
const[type, setType] = useState([
  {option: 'refugee'},
  {option: 'immigrant'},
  {option: 'just looking for help'},
])

  const handlePress = () =>{
    navigation.navigate('ResultInfoScreen',)
  }

  return (
    <View style={styles.container}>

        <Text style={styles.textTitleQuestion}>Who are you?</Text>
        <Text style={styles.textTitleQuestion}>In order to predefine search for you we need you to answer some questions</Text>
            {/* <View style={styles.roundL}>
              <Pressable onPress={handlePress}>
                <Text>welcome</Text>
              </Pressable> */}
          
              {/* <FlatList
                data={type}
                renderItem={({item}) => (
              <TouchableOpacity onPress={()=>navigation.navigate('ResultInfoScreen'
                )}>
                <View style={styles.bubble}>
              <Text> {item.title}</Text>
              </View>
                </TouchableOpacity>
                  )}
                /> */}
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.bubble}><Text style={styles.textBubble}>{type[0].option}</Text></View>
        </TouchableOpacity>
        <View style={styles.bubble}><Text style={styles.textBubble}>{type[1].option}</Text></View>
        <View style={styles.bubble}><Text style={styles.textBubble}>{type[2].option}</Text></View>
      
    </View>
  );
};

export default PersonType;


