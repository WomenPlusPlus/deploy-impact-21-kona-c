import React, {useState} from "react";
import {
  Text,
  SafeAreaView,
  Pressable,
  View,
} from "react-native";
import { styles } from "./stylesPInfo";


const InfoAge = ({navigation}) => {

  const [age, SetAge] = useState()

  const handlePress = () =>{
    console.log("i just clicked on the text and it prints this!")
    navigation.navigate('PersonType',)
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.textTitleQuestion}>How old are you?</Text>
      <Text style={styles.textTitleQuestion}>How old is a person you seek help for?</Text>
        
        <View style={styles.box}>

              <View style={styles.bubble}>
                <Pressable onPress={handlePress}>
                  <Text style={styles.textBubble}>0 - 12</Text>
                </Pressable>
              </View>
        
              <View style={styles.bubble}>
              <Pressable onPress={handlePress}><Text style={styles.textBubble}>12 - 22</Text>
              </Pressable>
              </View>

              <View style={styles.bubble}><Text style={styles.textBubble}>0 - 12</Text></View>
              <View style={styles.bubble}><Text style={styles.textBubble}>0 - 12</Text></View>
              <View style={styles.bubble}><Text style={styles.textBubble}>0 - 12</Text></View>
          </View>
    </SafeAreaView>
  );
};

export default InfoAge;


