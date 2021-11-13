import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Button } from "react-native";
import { styles } from "./developmentStyles";

const Development = ({ navigation }) => {
  const handlePress1 = () => {
    navigation.navigate("HomeScreen");
  };
  
  const handleMainContainer = () => {
    navigation.navigate("MainContainer");
  };
  const handleNeedsScreenD = () => {
    navigation.navigate("NeedsScreenD");
  };
  

  return (
    <View style={styles.container}>
      <Text>Click one of the below to go to the screen you want to see</Text>
      <StatusBar style="auto" />
      <Button title="Go to Navigation Bar" onPress={handleMainContainer} />
      <Button title="Go to HomeScreen" onPress={handlePress1} />
      <Button title="NeedsScreenD" onPress={handleNeedsScreenD} />

    </View>
  );
};

export default Development;

// create a new screen, new const, copy const name, go to app.js
// in App.js copy the Stack and adjust with the const name
// then go to the developmentScreen.js, create button and handler and you're done :)
