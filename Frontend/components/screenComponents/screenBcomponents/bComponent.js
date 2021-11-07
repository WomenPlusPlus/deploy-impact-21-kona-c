import React from "react";
import { Text, ImageBackground, View, Pressable } from "react-native";
import options from "../../../assets/options_map.json";
import { styles } from "./bComponentStyles";

const ComponentB = ({ route, navigation }) => {
  const selectedOptionScreenA = route.params["selectedOptionScreenA"];
  const optionsFiltered = options.filter((option) => {
    return option["First_layer"] === selectedOptionScreenA;
  });
  console.log(optionsFiltered);

  const handlePress = (optionScreenB) => {
    navigation.navigate("NeedsScreenC", {
      selectedOptionScreenA: optionScreenB,
      arrayFiltered: optionsFiltered,
    });
  };

  return (
    <View>
      <ImageBackground
        source={require("../../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.titleTextStyle}>Need help with...</Text>
        {[...new Set(optionsFiltered.map((option) => option.Second_layer))].map(
          (option) => (
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
          )
        )}
      </ImageBackground>
    </View>
  );
};

export default ComponentB;
