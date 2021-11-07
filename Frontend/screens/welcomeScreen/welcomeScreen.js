import React from "react";
import {
  View,
  Text,

  ImageBackground,
  Pressable,

} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./welcomeScreenStyles";

const HomeScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("LocationScreen");
  };

  return (
    <View>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.containerRoundXL}>
          <Pressable style={styles.roundXL} onPress={handlePress}>
            <Text style={styles.textButton}>
              If you are in a vulnerable situation...
            </Text>
          </Pressable>
        </View>
        <View style={styles.containerRoundMS}>
          <Pressable style={styles.roundS} onPress={handlePress}>
            <Text style={styles.textButton}>If you are at risk...</Text>
          </Pressable>
          <Pressable style={styles.roundM} onPress={handlePress}>
            <Text style={styles.textButton}>If someone else needs help...</Text>
          </Pressable>
        </View>
        <Text style={styles.bottomText}>Dots can find the help you need</Text>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
