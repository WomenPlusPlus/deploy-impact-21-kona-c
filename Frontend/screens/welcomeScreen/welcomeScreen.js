import React from "react";
import { View, Text, Button, TouchableHighlight, Image } from 'react-native';
import { styles } from "./welcomeScreenStyles";



const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>WELCOME TO KONA CONNECT</Text>

        <Text style={styles.textTitle}>Find the help you need</Text>

  
        <Button title='go to Counter'
        onPress={()=>navigation.navigate('Counter')} />


<TouchableHighlight onPress={() => console.log("image tapped")}>
        <Image
          source={{
            width: 300,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
          // blurRadius={3}
        />
      </TouchableHighlight>
        <View style={styles.button}>
      <Button title=' FIND HELP NOW'
        onPress={()=>navigation.navigate('PromptMessage')} 
        color= 'white'
        />
        </View>
        <Text style={styles.textInfo}>Dots, we help you finding help</Text>
      </View>
   
    );
  };

  export default HomeScreen;