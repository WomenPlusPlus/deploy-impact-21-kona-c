import React from "react";
import {
  Text,
  ImageBackground,
  View,
  Pressable,
  ScrollView,
} from "react-native";
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
      <View style={styles.mainContainer}>
        <View style={styles.container1}>
          <Pressable
            style={styles.circleButton}
            onPress={() => handlePress("refugee")}
          >
            <Text style={styles.textStyle}>Refugee/asylum seeker</Text>
          </Pressable>
        </View>
        <View style={styles.container1}>
          <Pressable
            style={styles.circleButton}
            onPress={() => handlePress("Another")}
          >
            <Text style={styles.textStyle}>Other</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PersonType;
