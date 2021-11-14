import React from "react";
import { Text, ImageBackground, View, Pressable } from "react-native";
import options from "../../assets/jsonFiles/options_map.json";
import { styles } from "./bComponentStyles";

const NeedsScreenB = ({ route, navigation }) => {
  const selectedRegion = route.params["selectedRegion"];
  const selectedInstitutionType = route.params["selectedInstitutionType"];
  const selectedForWho = route.params["selectedForWho"];
  const selectedGender = route.params["selectedGender"];
  const selectedAge = route.params["selectedAge"];
  const selectedPersonType = route.params["selectedPersonType"];
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
        selectedRegion: selectedRegion,
        selectedInstitutionType: selectedInstitutionType,
        selectedForWho: selectedForWho,
        selectedGender: selectedGender,
        selectedAge: selectedAge,
        selectedPersonType: selectedPersonType,
        selectedOptionScreenB: selectedOptionScreenB,
        uniqueRegionsArray: route.params["uniqueRegionsArray"],
        SDG_Id: optionsFilteredB[0]["SDG_Id"],
      });
    } else {
      navigation.navigate("NeedsScreenC", {
        selectedRegion: selectedRegion,
        selectedInstitutionType: selectedInstitutionType,
        selectedForWho: selectedForWho,
        selectedGender: selectedGender,
        selectedAge: selectedAge,
        selectedPersonType: selectedPersonType,
        selectedOptionScreenA: selectedOptionScreenA,
        selectedOptionScreenB: selectedOptionScreenB,
        arrayFilteredA: optionsFilteredA,
        optionsFilteredB: optionsFilteredB,
        uniqueRegionsArray: route.params["uniqueRegionsArray"],
      });
    }
  };
  return (
    <View>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.titleTextStyle}>Need help with...</Text>
        {[
          ...new Set(optionsFilteredA.map((option) => option.Second_layer)),
        ].map((option) => (
          <View key={option} style={styles.container1}>
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

export default NeedsScreenB;
