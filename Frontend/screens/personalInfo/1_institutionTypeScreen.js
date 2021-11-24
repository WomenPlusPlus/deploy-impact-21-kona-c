import React from "react";
import {
  Text,
  View,
  Pressable,
  ImageBackground,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/roundButtonsScreenStyles";

const InstitutionType = ({ route, navigation }) => {
  const selectedRegion = route.params["selectedRegion"];

  const handlePressPerson = (selectedInstitutionType) => {
    navigation.navigate("HelpForWho", {
      selectedRegion: selectedRegion,
      uniqueRegionsArray: route.params["uniqueRegionsArray"],
      selectedInstitutionType: selectedInstitutionType,
    });
  };
  const handlePressCompany = (selectedInstitutionType) => {
    navigation.navigate("NeedsScreenD", {
      selectedRegion: selectedRegion,
      uniqueRegionsArray: route.params["uniqueRegionsArray"],
      selectedInstitutionType: selectedInstitutionType,
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
          <View style={styles.bubbleContainer}>
            <Pressable
              style={styles.circleButton}
              onPress={() => handlePressPerson("Person")}
            >
              <View style={styles.severalIconsButton}>
                <Ionicons name="person" style={styles.userImage} />
              </View>
            </Pressable>
            <Text style={styles.textStyle}>Individual</Text>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.bubbleContainer}>
            <Pressable
              style={styles.circleButton}
              onPress={() => handlePressCompany("Company")}
            >
              <View style={styles.severalIconsButton}>
                <FontAwesome5 name="building" style={styles.userImage} />
              </View>
            </Pressable>
            <Text style={styles.textStyle}>Company/Organisation</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default InstitutionType;
