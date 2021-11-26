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
  const handlePress = (selectedPersonType) => {
    navigation.navigate("NeedsScreenA", {
      selectedRegion: route.params["selectedRegion"],
      selectedGender: route.params["selectedGender"],
      selectedAge: route.params["selectedAge"],
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
