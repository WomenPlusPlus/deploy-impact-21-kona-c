import React from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  ScrollView,
  Pressable,
  PixelRatio,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./welcomeScreenStyles";

const HomeScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("LocationScreen");
  };

  return (
    <ScrollView style={styles.container}>
      {/* <Image 
      style={styles.image}
      source={require('../../assets/DOTS_logo_trans.png')}/> */}
       <ImageBackground source={require("../../assets/background.png")} resizeMode="cover" style={styles.image}>
      <View style={styles.roundXL}>
        <Pressable onPress={handlePress}>
          <Text style={styles.textButton}>If you are in a vulnerable situation...</Text>
        </Pressable>
      </View>
      <View style={styles.roundM}>
        <Pressable onPress={handlePress}>
          <Text style={styles.textButton}>If someone else needs help...</Text>
        </Pressable>
      </View>
      <View style={styles.roundS}>
        <Pressable onPress={handlePress}>
          <Text style={styles.textButton}>If you are at risk...</Text>
        </Pressable>
      </View>
      <Text style={styles.bottomText}>Dots can find the help you need</Text>
      </ImageBackground>
      </ScrollView>
  );
};

export default HomeScreen;
