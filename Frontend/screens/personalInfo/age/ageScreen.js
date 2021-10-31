import React, {useState} from "react";
import {
  Text,
  SafeAreaView,
  Pressable,
  View,
} from "react-native";
import { styles } from "./ageStyles";


const InfoAge = ({navigation}) => {

  // const [age, SetAge] = useState()

  const handlePress = () =>{
    console.log("i just clicked on the text and it prints this!")
    navigation.navigate('ResultInfoScreen',)
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text>How old are you?</Text>
      <Text>How old is a person you seek help for?</Text>
        
        <View style={styles.box}>

              <View style={styles.bubble}>
                <Pressable onPress={handlePress}>
                  <Text>0 - 12</Text>
                </Pressable>
              </View>
        
              <View style={styles.bubble}>
              <Pressable onPress={handlePress}><Text>12 - 22</Text>
              </Pressable>
              </View>

              <View style={styles.bubble}><Text>0 - 12</Text></View>
              <View style={styles.bubble}><Text>0 - 12</Text></View>
              <View style={styles.bubble}><Text>0 - 12</Text></View>
          </View>
    </SafeAreaView>
  );
};

export default InfoAge;


