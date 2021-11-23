import React from "react";
import {
  Text,
  ImageBackground,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../styles/longerButtonsScreenStyles";

const NeedsB_to_D = (props) => {
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <ScrollView style={styles.mainContainer}>
        <Text style={styles.titleTextStyle}>Need help with...</Text>
        {props.arr.map((option) => (
          <View key={option} style={styles.container1}>
                <LinearGradient
                // Button Linear Gradient
                colors={["#202121", "black", "black", "black"]}
                style={styles.circleButton}
              >
              <Pressable
                style={styles.circleButton}
                onPress={() => props.handlePress(option)}
              >
                <Text style={styles.textStyle}>{option}</Text>
              </Pressable>
            </LinearGradient>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};
export default NeedsB_to_D;
