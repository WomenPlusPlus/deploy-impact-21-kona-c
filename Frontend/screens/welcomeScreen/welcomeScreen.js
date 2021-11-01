import React from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  Pressable,
  PixelRatio,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./welcomeScreenStyles";

const HomeScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("InstitutionType");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Image 
      style={styles.image}
      source={require('../../assets/DOTS_logo_trans.png')}/> */}

      <View style={styles.roundXL}>
        <Pressable onPress={() => console.warn("big bubble tapped")} />
        <Text style={styles.textButton}>
          If you are in a vulnerable situation...
        </Text>
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
    </SafeAreaView>
  );
};

export default HomeScreen;
