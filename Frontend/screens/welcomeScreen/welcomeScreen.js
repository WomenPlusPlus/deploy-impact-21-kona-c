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




      </View>
      </ScrollView>
    );
  };

  

  export default HomeScreen;