import React from "react";
import { Text, ImageBackground, View, Pressable } from "react-native";
import { styles } from "../needsScreens/bComponentStyles";
import companies_options from "../../assets/companies_options_map.json";

const NeedsScreenD = ({ route, navigation }) => {
  const handlePress = (selectedOptionD) => {
    navigation.navigate("CompaniesOrganisationsList", {
      selectedOptionD: selectedOptionD,
    });
  };

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        {companies_options
          .map((option) => option.First_layer)
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
      </View>
    </ImageBackground>
  );
};

export default NeedsScreenD;
