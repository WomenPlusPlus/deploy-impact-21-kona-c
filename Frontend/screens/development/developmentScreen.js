import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { styles } from "./developmentStyles";

const Development = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("OrganisationsListScreen");
  };

  const handlePress1 = () => {
    navigation.navigate("HomeScreen");
  };

  const handlePress3 = () => {
    navigation.navigate("PromptMessage");
  };

  const handlePress4 = () => {
    navigation.navigate("OrganisationDetailsScreen");
  };

  return (
    <View style={styles.container}>
      <Text>Click one of the below to go to the screen you want to see</Text>
      <StatusBar style="auto" />
      <Button title="Go to HomeScreen" onPress={handlePress1} />
      <Button title="Go to OrganisationsListScreen" onPress={handlePress} />
      <Button title="Go to OrganisationDetailsScreen" onPress={handlePress4} />
      <Button title="Go to PromptMessage" onPress={handlePress3} />
    </View>
  );
};

export default Development;
