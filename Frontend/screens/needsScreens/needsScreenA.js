import React from "react";
import {
  Text,
  ImageBackground,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import {
  FontAwesome5,
  FontAwesome,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";
import options from "../../assets/jsonFiles/options_map.json";
import { styles } from "../../styles/roundButtonsScreenStyles";

const NeedsScreenA = ({ route, navigation }) => {
  let optionsArray = [];

  const handlePress = (optionScreenA) => {
    navigation.navigate("NeedsScreenB", {
      selectedRegion: route.params["selectedRegion"],
      selectedInstitutionType: route.params["selectedInstitutionType"],
      selectedForWho: route.params["selectedForWho"],
      selectedGender: route.params["selectedGender"],
      selectedAge: route.params["selectedAge"],
      selectedPersonType: route.params["selectedPersonType"],
      uniqueRegionsArray: route.params["uniqueRegionsArray"],
      selectedOptionScreenA: optionScreenA,
    });
  };

  for (let i = 0; i < options.length; i++) {
    optionsArray.push(options[i]["First_layer"]);
  }

  let uniqueOptionsArray = [...new Set(optionsArray)];

  const iconsArray = [
    <Text style={styles.severalIconsButton}>
      <Ionicons name="restaurant-outline" style={styles.severalIconsText} />
      <FontAwesome5 name="home" style={styles.severalIconsText} />
    </Text>,
    <Text style={styles.severalIconsButton}>
      <Ionicons name="shield-checkmark" style={styles.userImage} />
    </Text>,
    <Text style={styles.severalIconsButton}>
      <FontAwesome5 name="briefcase" style={styles.userImage} />
    </Text>,
    <Text style={styles.severalIconsButton}>
      <FontAwesome5 name="heartbeat" style={styles.userImage} />
    </Text>,
    <Text style={styles.severalIconsButton}>
      <FontAwesome name="graduation-cap" style={styles.userImage} />
    </Text>,
    <Text style={styles.severalIconsButton}>
      <Entypo name="tree" style={styles.userImage} />
    </Text>,
    <Text style={styles.severalIconsButton}>
      <FontAwesome name="balance-scale" style={styles.userImage} />
    </Text>,
    <Text style={styles.severalIconsButton}>
      <FontAwesome5 name="building" style={styles.userImage} />
    </Text>,
  ];

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <ScrollView style={styles.mainContainer}>
        <View style={styles.container}>
          {uniqueOptionsArray.map((option, i) => (
            <View key={option} style={styles.bubbleContainer}>
              <Pressable
                style={styles.circleButton}
                onPress={() => handlePress(option)}
              >
                {iconsArray[i]}
                <Text style={styles.textStyle}>{option}</Text>
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default NeedsScreenA;
