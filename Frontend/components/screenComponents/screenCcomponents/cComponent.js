import React from "react";
import { Text, ImageBackground, View, Pressable } from "react-native";
import { styles } from "../screenBcomponents/bComponentStyles";

const ComponentB = ({ route, navigation }) => {
  const selectedOptionScreenA = route.params["selectedOptionScreenA"];
  const selectedOptionScreenB = route.params["selectedOptionScreenB"];
  const optionsFilteredB = route.params["optionsFilteredB"];

  const handlePress = (selectedOptionScreenC) => {
    for (i = 0; i < optionsFilteredB.length; i++) {
      if (selectedOptionScreenC === optionsFilteredB[i]["Third_layer"]) {
        navigation.navigate("OrganisationsListScreen", {
          selectedOptionScreenA: selectedOptionScreenA,
          selectedOptionScreenB: selectedOptionScreenB,
          selectedOptionScreenC: selectedOptionScreenC,
          SDG_Id: optionsFilteredB[i]["SDG_Id"],
        });
      }
    }
  };

  return (
    <View>
      <ImageBackground
        source={require("../../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.titleTextStyle}>Need help with...</Text>
        {optionsFilteredB
          .map((option) => option.Third_layer)
          .map((option) => (
            <View style={styles.container1}>
              <View style={styles.bubbleContainer}>
                <Pressable
                  style={styles.circleButton}
                  onPress={() => handlePress(option)}
                >
                  <Text style={styles.textStyle}>{option}</Text>
                </Pressable>
              </View>
            </View>
          ))}
      </ImageBackground>
    </View>
  );
};

export default ComponentB;
