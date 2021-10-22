import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import {styles} from './counterStyles';

const Counter = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>this is just amazing!</Text>
      <StatusBar style="auto" />
      <Hooks />
    </View>
  );
};

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
