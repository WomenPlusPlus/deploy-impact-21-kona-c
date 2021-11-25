import React from "react";
import {
  Text,
  ImageBackground,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/roundButtonsScreenStyles";

const HelpForWho = ({ route, navigation }) => {
  const selectedRegion = route.params["selectedRegion"];
  const selectedInstitutionType = route.params["selectedInstitutionType"];

  const handlePress = (selectedForWho) => {
    navigation.navigate("InfoGender", {
      selectedRegion: selectedRegion,
      selectedInstitutionType: selectedInstitutionType,
      uniqueRegionsArray: route.params["uniqueRegionsArray"],
      selectedForWho: selectedForWho,
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
                onPress={() => handlePress("Myself")}
              >
                <View style={styles.squareButtonContainer}>
                  <Ionicons name="person" style={styles.userImage} />
                  <Text style={styles.textStyle}>Myself</Text>
                </View>
              </Pressable>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.bubbleContainer}>
            <Pressable
              style={styles.circleButton}
              onPress={() => handlePress("Others")}
            >
              <View style={styles.squareButtonContainer}>
                <FontAwesome5 name="users" style={styles.userImage} />
                <Text style={styles.textStyle}>Others</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HelpForWho;
