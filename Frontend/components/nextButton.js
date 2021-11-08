import React from "react";
import { Text, Pressable } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { StyleSheet } from "react-native";

const NextButton = (props) => {
  return (
    <Pressable style={styles.nextButton} onPress={props.handlePress}>
      <Text>
        <FontAwesome style={styles.nextButtonText} name="angle-right" />
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    nextButton: {
        color: "#921CB1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",
        width: "15%",
        height: "15%",
        marginRight: 20,
      },
      nextButtonText: {
        color: "#A169B1",
        fontSize: 75,
        fontWeight: "bold",
      }
})
export default NextButton;
