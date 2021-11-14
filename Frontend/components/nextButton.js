import React from "react";
import { Text, Pressable, Keyboard } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { StyleSheet } from "react-native";

const NextButton = (props) => {
  return (
    <Pressable
      style={styles.nextButton}
      onPress={props.handlePress}
    >
      <Text>
        <FontAwesome style={styles.nextButtonText} name="angle-right" />
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  nextButton: {
    color: "#921CB1",
    justifyContent: "center",
    alignItems: "flex-end",
    alignSelf: "flex-end",
    width: 24,
  },
  nextButtonText: {
    color: "#A169B1",
    fontSize: 55,
    fontWeight: "bold",
  },
});
export default NextButton;
