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

const InfoAge = ({ route, navigation }) => {
  const selectedRegion = route.params["selectedRegion"];
  const selectedInstitutionType = route.params["selectedInstitutionType"];
  const selectedForWho = route.params["selectedForWho"];
  const selectedGender = route.params["selectedGender"];

  const handlePress = (selectedAge) => {
    navigation.navigate("PersonType", {
      selectedRegion: selectedRegion,
      selectedInstitutionType: selectedInstitutionType,
      selectedForWho: selectedForWho,
      selectedGender: selectedGender,
      uniqueRegionsArray: route.params["uniqueRegionsArray"],
      selectedAge: selectedAge,
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
              onPress={() => handlePress("C")}
            >
              <View style={styles.squareButtonContainer}>
                <FontAwesome5 name="baby" style={styles.userImage} />
                <Text style={styles.textStyle}>0-12</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.bubbleContainer}>
            <Pressable
              style={styles.circleButton}
              onPress={() => handlePress("Y")}
            >
              <View style={styles.squareButtonContainer}>
                <FontAwesome5 name="child" style={styles.userImage} />
                <Text style={styles.textStyle}>12-18</Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.bubbleContainer}>
            <Pressable
              style={styles.circleButton}
              onPress={() => handlePress("E")}
            >
              <View style={styles.squareButtonContainer}>
                <Ionicons name="man" style={styles.userImage} />
                <Text style={styles.textStyle}>18-25</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.bubbleContainer}>
            <Pressable
              style={styles.circleButton}
              onPress={() => handlePress("A")}
            >
              <View style={styles.squareButtonContainer}>
                <Ionicons name="man-sharp" style={styles.userImage} />
                <Text style={styles.textStyle}>25+</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default InfoAge;
