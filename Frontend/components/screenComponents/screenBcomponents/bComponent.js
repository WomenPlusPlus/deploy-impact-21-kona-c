import React from "react";
import { Text, ImageBackground, View, Pressable } from "react-native";
import options from "../../../assets/options_map.json";
import { styles } from "./bComponentStyles";

const ComponentB = ({ route, navigation }) => {
  const selectedOptionScreenA = route.params["selectedOptionScreenA"];
  const optionsFilteredA = options.filter((option) => {
    return option["First_layer"] === selectedOptionScreenA;
  });

  const handlePress = (selectedOptionScreenB) => {
    const optionsFilteredB = optionsFilteredA.filter((option) => {
      return option["Second_layer"] === selectedOptionScreenB;
    });
    if (optionsFilteredB.length === 1) {
      navigation.navigate("OrganisationsListScreen", {
        selectedOptionScreenB: selectedOptionScreenB,
        SDG_Id: optionsFilteredB[0]["SDG_Id"]
      });
    } else {
      navigation.navigate("NeedsScreenC", {
        selectedOptionScreenA: selectedOptionScreenA,
        selectedOptionScreenB: selectedOptionScreenB,
        arrayFilteredA: optionsFilteredA,
        optionsFilteredB: optionsFilteredB,
      });
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
        {[
          ...new Set(optionsFilteredA.map((option) => option.Second_layer)),
        ].map((option) => (
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
