import React from "react";
import {
  Text,
  View,
  Pressable,
  ImageBackground,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "../../styles/screensStyles/roundButtonsScreenStyles";

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
      <ScrollView>
        <Text style={styles.titleTextStyle}>
          Whom are you seeking help for?
        </Text>
        <View>
          <View style={styles.container1}>
            <View style={styles.bubbleContainer}>
              <Pressable
                style={styles.circleButton}
                onPress={() => handlePressPerson("Person")}
              >
                <View style={styles.severalIconsButton}>
                  <FontAwesome5 name="user" style={styles.userImage} />
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
      </ScrollView>
    </ImageBackground>
  );
};

export default InstitutionType;
