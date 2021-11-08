import React from "react";
import { Text, ImageBackground, View, Pressable } from "react-native";
import { styles } from "../../components/screenComponents/screenBcomponents/bComponentStyles";

const PersonType = ({ route, navigation }) => {
  const selectedRegionIndex = Object.values(route.params)[0];
  const selectedInstitutionType = Object.values(route.params)[1];
  const selectedForWho = Object.values(route.params)[2];
  const selectedGender = Object.values(route.params)[3];
  const selectedAge = Object.values(route.params)[4];

  const handlePress = (id) => {
    navigation.navigate("NeedsScreenA", {
      selectedRegionIndex: selectedRegionIndex,
      selectedInstitutionType: selectedInstitutionType,
      selectedForWho: selectedForWho,
      selectedGender: selectedGender,
      selectedAge: selectedAge,
      selectedPersonType: id,
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
                onPress={() => handlePress(0)}
              >
                <Text style={styles.textStyle}>Refugee/asylum seeker</Text>
              </Pressable>
            </View>
        </View>
        <View style={styles.container1}>
            <View style={styles.bubbleContainer}>
              <Pressable
                style={styles.circleButton}
                onPress={() => handlePress(1)}
              >
                <Text style={styles.textStyle}>Iillegal imigrant</Text>
              </Pressable>
            </View>
        </View>
        <View style={styles.container1}>
            <View style={styles.bubbleContainer}>
              <Pressable
                style={styles.circleButton}
                onPress={() => handlePress(2)}
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
