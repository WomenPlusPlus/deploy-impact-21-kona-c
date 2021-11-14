import React from "react";
import {
  Text,
  ImageBackground,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import { styles } from "../needsScreens/bComponentStyles";
import companies_options from "../../assets/jsonFiles/companies_options_map.json";

const NeedsScreenD = ({ route, navigation }) => {
  const handlePress = (selectedOptionD) => {
    navigation.navigate("CompaniesOrganisationsList", {
      selectedOptionD: selectedOptionD,
    });
  };

  return (
    <ScrollView style={styles.container}>
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={styles.image}
    >
        {companies_options
          .map((option) => option.First_layer)
          .map((option) => (
            <View key={option} style={styles.containerD}>
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
    </ScrollView>

  );
};

export default NeedsScreenD;
