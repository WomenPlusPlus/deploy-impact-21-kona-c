import React from "react";
import { View, Text, Button, TouchableHighlight, Image, Pressable, ScrollView} from 'react-native';
import { styles } from "./welcomeScreenStyles";

import Emoji from 'react-native-emoji';



const HomeScreen = ({navigation}) => {

  const handlePress = () =>{
    console.log('Button pressed');
    console.warn('Pressed Pressed')
    navigation.navigate('PromptMessage')
  }

  const handlePressNGO = () =>{
    console.log('Button pressedNGO');
    navigation.navigate('Search')
  }

  //below is a temporary screen where we can link 
  //all the screens that are in development and we 
  //would like to get their visibility

  const handlePressDev = () => {
    navigation.navigate('Development')
  }

    return (
      <ScrollView >
      <View style={styles.container}>
<View style={styles.bubblesContainer}>
            <TouchableHighlight onPress={() => console.log("image tapped")}>
              <View style={styles.roundXL}>
              <Text style={styles.textTitle}>If you are in a vulnerable situation...</Text>
              </View>    
            </TouchableHighlight>
                
                <View style={styles.roundM}>
                <Text style={styles.textButton}>If someone else needs help...</Text>
                  <Button title='...'
                          onPress={handlePress} 
                          color= 'white'
                          />
            </View>
            <View style={styles.roundS}>
              <Pressable
                onPress={handlePressNGO}>

                  <Text style={styles.textButton}>
                  If you are at risk...</Text>  

              </Pressable>
              </View>

              </View>

            <Text style={styles.textInfo}>Dots, we help you finding help</Text>
            <Emoji name="owl" style={{fontSize: 50}} 
            onPress={handlePressDev}/>



      </View>
      </ScrollView>
    );
  };

  

  export default HomeScreen;