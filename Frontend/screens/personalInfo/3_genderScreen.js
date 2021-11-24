import React from "react";
import {
  Text,
  ImageBackground,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5, FontAwesome, Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/roundButtonsScreenStyles";

const InfoGender = ({ route, navigation }) => {
  const selectedRegion = route.params["selectedRegion"];
  const selectedInstitutionType = route.params["selectedInstitutionType"];
  const selectedForWho = route.params["selectedForWho"];

  const handlePress = (selectedGender) => {
    if (selectedGender === "O") {
      navigation.navigate("OtherGender", {
        selectedRegion: selectedRegion,
        selectedInstitutionType: selectedInstitutionType,
        selectedForWho: selectedForWho,
        uniqueRegionsArray: route.params["uniqueRegionsArray"],
        selectedGender: selectedGender,
      });
    } else {
      navigation.navigate("InfoAge", {
        selectedRegion: selectedRegion,
        selectedInstitutionType: selectedInstitutionType,
        selectedForWho: selectedForWho,
        uniqueRegionsArray: route.params["uniqueRegionsArray"],
        selectedGender: selectedGender,
      });
    }
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
                onPress={() => handlePress("F")}
              >
                <View style={styles.squareButtonContainer}>
                  <Ionicons name="woman-sharp" style={styles.userImage} />
                  <Text style={styles.textStyle}>Female</Text>
                </View>
              </Pressable>
          </View>
          <View style={styles.bubbleContainer}>
              <Pressable
                style={styles.circleButton}
                onPress={() => handlePress("M")}
              >
                <View style={styles.squareButtonContainer}>
                  <Ionicons name="man-sharp" style={styles.userImage} />
                  <Text style={styles.textStyle}>Male</Text>
                </View>
              </Pressable>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.bubbleContainer}>
              <Pressable
                style={styles.circleButton}
                onPress={() => handlePress("O")}
              >
                <View style={styles.squareButtonContainer}>
                  <FontAwesome name="heart" style={styles.userImage} />
                  <Text style={styles.textStyle}>Other</Text>
                </View>
              </Pressable>
          </View>
          <View style={styles.bubbleContainer}>
              <Pressable
                style={styles.circleButton}
                onPress={() => handlePress("N")}
              >
                <View style={styles.squareButtonContainer}>
                  <FontAwesome5 name="question" style={styles.userImage} />
                  <Text style={styles.textStyle}>Prefer not to say</Text>
                </View>
              </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default InfoGender;
