import React from "react";
import { Text, ImageBackground, View, Pressable } from "react-native";
import { styles } from "../needsScreens/bComponentStyles";

const PersonType = ({ route, navigation }) => {
  const selectedRegion = route.params["selectedRegion"];
  const selectedInstitutionType = route.params["selectedInstitutionType"];
  const selectedForWho = route.params["selectedForWho"];
  const selectedGender = route.params["selectedGender"];
  const selectedAge = route.params["selectedAge"];

  const handlePress = (selectedPersonType) => {
    navigation.navigate("NeedsScreenA", {
      selectedRegion: selectedRegion,
      selectedInstitutionType: selectedInstitutionType,
      selectedForWho: selectedForWho,
      selectedGender: selectedGender,
      selectedAge: selectedAge,
      selectedPersonType: selectedPersonType,
    });
  };

  return (
    <View>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.titleTextStyle}>
          What best describes the current situation?
        </Text>
        <View style={styles.container1}>
          <View style={styles.bubbleContainer}>
            <Pressable
              style={styles.circleButton}
              onPress={() => handlePress("Refugee/asylum seeker")}
            >
              <Text style={styles.textStyle}>Refugee/asylum seeker</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.container1}>
          <View style={styles.bubbleContainer}>
            <Pressable
              style={styles.circleButton}
              onPress={() => handlePress("Illegal imigrant")}
            >
              <Text style={styles.textStyle}>Illegal imigrant</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.container1}>
          <View style={styles.bubbleContainer}>
            <Pressable
              style={styles.circleButton}
              onPress={() => handlePress("None of the above")}
            >
              <Text style={styles.textStyle}>None of the above</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PersonType;
