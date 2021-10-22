import React from "react";
import { View, Text, Button, TouchableHighlight, Image } from 'react-native';
import { styles } from "./welcomeScreenStyles";

import Emoji from 'react-native-emoji';



const HomeScreen = ({navigation}) => {

  const handlePress = () =>{
    console.log('Button pressed');
    navigation.navigate('PromptMessage')
  }

    return (
      <View style={styles.container}>
            <Text>WELCOME TO KONA CONNECT</Text>

            <Text style={styles.textTitle}>Find the help you need</Text>

            <TouchableHighlight onPress={() => console.log("image tapped")}>
            <Image
                  source={{
                    width: 300,
                    height: 300,
                    uri: "https://picsum.photos/200/300",
                  }}/>
                  
            </TouchableHighlight>
                
                <View style={styles.button}>


                  <Button title='FIND HELP NOW'
                          onPress={handlePress} 
                          color= 'white'
                          />

                </View>



            <Text style={styles.textInfo}>Dots, we help you finding help</Text>
            <Emoji name="owl" style={{fontSize: 50}} />

      </View>
   
    );
  };

  export default HomeScreen;