import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Counter = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>this is just amazing!</Text>
      <StatusBar style="auto" />
      <Hooks />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "deepskyblue",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-around",
  },
  containerButtons: {
    flexDirection: "row",
  },
  buttonPlus: {
    backgroundColor: "pink",
    borderBottomColor: "green",
    alignSelf: "flex-start",
    marginEnd: 10,
  },
  buttonMinus: {
    backgroundColor: "green",
    borderBottomColor: "green",
    alignSelf: "flex-end",
  },
  result: {
    alignItems: "center",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    backgroundColor: "white",
    // opacity: 10,
  },
  text: {
    fontFamily: "Cochin",
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    textDecorationColor: "yellow",
    textShadowColor: "black",
    textShadowRadius: 10,
    backgroundColor: "grey",
  },
});

const Hooks = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <View style={styles.containerButtons}>
        <View style={styles.buttonPlus}>
          <Button
            title="Click me to add 1"
            color="white"
            onPress={() => setCount(count + 1)}
          />
        </View>
        <View style={styles.buttonMinus}>
          <Button
            title="Click me to extract 1"
            onPress={() => setCount(count - 1)}
            color="black"
          />
        </View>
      </View>
      <View style={styles.result}>
        <Text style={styles.text}>Counter: {count} lalala</Text>
      </View>
    </View>
  );
};

export default Counter;
