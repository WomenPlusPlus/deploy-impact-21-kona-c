import React from "react";
import { View, Text, TouchableHighlight, Image, Button, ScrollView, Pressable} from 'react-native';
import { styles } from "./welcomeScreenStyles";

import Emoji from 'react-native-emoji';



const HomeScreen = ({navigation}) => {

  const handlePress = () =>{
    console.log('Button pressed');
    console.warn('Pressed Pressed')
    navigation.navigate('InfoScreenAge')
  }

  const handlePressNGO = () =>{
    console.log('Button pressedNGO');
    navigation.navigate('Search')
  }


    return (
      <ScrollView >
      <View style={styles.container}>
<View style={styles.bubblesContainer}>

              <View style={styles.roundXL}>
              <Button color='white' title='If you are in a vulnerable situation...' onPress={() => console.warn("big bubble tapped")} />
              <Text style={styles.textTitle}></Text>
              </View>    
               
                <View style={styles.roundM}>
                <Pressable onPress={handlePress}>  
                <Text style={styles.textButton}>If someone else needs help...</Text>
                </Pressable>
            </View>

            <View style={styles.roundS}>
              <Pressable
                onPress={handlePressNGO}
                >
                  <Text style={styles.textButton}>
                  If you are at risk...</Text>  
              </Pressable>
              </View>

              </View>

      </View>
      </ScrollView>
    );
  };

  

  export default HomeScreen;