import React from "react";
import {
  Text,
  ImageBackground,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import { styles } from "../styles/screensStyles/longerButtonsScreenStyles";

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
            <Pressable
              style={styles.circleButton}
              onPress={() => props.handlePress(option)}
            >
              <Text style={styles.textStyle}>{option}</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};
export default NeedsB_to_D;
