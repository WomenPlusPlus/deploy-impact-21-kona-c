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


const InfoPersonType = ({navigation}) => {
const[type, setType] = useState([
  {title: 'refugee'},
  {title: 'immigrant'},
  {title: 'just looking for help'},
])

  // const handlePress = () =>{
  //   navigation.navigate('ResultInfoScreen',)
  // }

  return (
    <View style={styles.container}>

        <Text>Who are you?</Text>
        <Text>In order to predefine search for you we need you to answer some questions</Text>
        {/* <View style={styles.roundL}>
          <Pressable onPress={handlePress}>
            <Text>welcome</Text>
          </Pressable> */}
          
          <FlatList
            data={type}
            renderItem={({item}) => (
          <TouchableOpacity onPress={()=>navigation.navigate('ResultInfoScreen'
            )}>
            <View style={styles.roundM}>
          <Text> {item.title}</Text>
          </View>
            </TouchableOpacity>
              )}
            />
      
        {/* // <View style={styles.roundXL}><Text>refugee</Text></View>
        // <View style={styles.roundM}><Text>homeless</Text></View>
        // <View style={styles.roundXXL}><Text>just searching for help</Text></View>
       */}
    </View>
  );
};

export default InfoPersonType;


