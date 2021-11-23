import React from "react";
import {
  Text,
  ImageBackground,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../styles/longerButtonsScreenStyles";

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
      uniqueRegionsArray: route.params["uniqueRegionsArray"],
      selectedPersonType: selectedPersonType,
    });
  };

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <ScrollView>
        <Text style={styles.titleTextStyle}>
          What is the current situation of the person seeking help?
        </Text>
        <View style={styles.container1}>
          <LinearGradient
            // Button Linear Gradient
            colors={["#323438", "black", "black"]}
            style={styles.circleButton}
          >
            <Pressable
              style={styles.circleButton}
              onPress={() => handlePress("refugee")}
            >
              <Text style={styles.textStyle}>Refugee/asylum seeker</Text>
            </Pressable>
          </LinearGradient>
        </View>
        <View style={styles.container1}>
          <LinearGradient
            // Button Linear Gradient
            colors={["#323438", "black", "black"]}
            style={styles.circleButton}
          >
            <Pressable
              style={styles.circleButton}
              onPress={() => handlePress("Another")}
            >
              <Text style={styles.textStyle}>Another</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default PersonType;
