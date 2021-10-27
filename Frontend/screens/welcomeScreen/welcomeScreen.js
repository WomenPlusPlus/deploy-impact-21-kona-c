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
            <Text>WELCOME TO KONA CONNECT</Text>

            <Text style={styles.textTitle}>Find the help you need</Text>
<View style={styles.bubblesContainer}>
            <TouchableHighlight onPress={() => console.log("image tapped")}>
              <View style={styles.roundXL}>
            {/* <Image
                  source={{
                    width: 300,
                    height: 300,
                   
                    uri: "https://picsum.photos/200/300",
                  }}/> */}
              </View>    
            </TouchableHighlight>
                
                <View style={styles.roundM}>
                <Text style={styles.textButton}>Press here to</Text>
                  <Button title='FIND HELP NOW'
                          onPress={handlePress} 
                          color= 'white'
                          />
            </View>
            <View style={styles.roundS}>
              <Pressable
                onPress={handlePressNGO}>

                  <Text style={styles.textButton}>
                  go to organisation search</Text>  

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