import React from "react";
import { Text, Pressable, Keyboard } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { styles } from "../styles/componentsStyles/nextButtonStyles";

const NextButton = (props) => {
  return (
    <Pressable style={styles.nextButton} onPress={props.handlePress}>
      <Text>
        <FontAwesome style={styles.nextButtonText} name="angle-right" />
      </Text>
    </Pressable>
  );
};

export default NextButton;
