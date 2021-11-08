import React from "react";
import { Text, ScrollView, View, Pressable } from "react-native";
import { styles } from "./stylesPInfo";

const PersonType = ({ route, navigation }) => {
  const selectedRegionIndex = Object.values(route.params)[0];
  const selectedInstitutionType = Object.values(route.params)[1];
  const selectedForWho = Object.values(route.params)[2];
  const selectedGender = Object.values(route.params)[3];
  const selectedAge = Object.values(route.params)[4];

  const handlePress = (id) => {
    navigation.navigate("NewScreen", {
      selectedRegionIndex: selectedRegionIndex,
      selectedInstitutionType: selectedInstitutionType,
      selectedForWho: selectedForWho,
      selectedGender: selectedGender,
      selectedAge: selectedAge,
      selectedPersonType: id,
    });
  };

  return (
    <ScrollView>
      <Text style={styles.titleTextStyle}>
        What best describe your current situation?
      </Text>
      <View>
        <View style={styles.container1}>
          <Pressable onPress={() => handlePress(0)}>
            <View style={styles.circleButton}>
              <Text style={styles.textStyle}>I'm a refugee/asylum seeker</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress(1)}>
            <View style={styles.circleButton}>
              <Text style={styles.textStyle}>I'm an illegal imigrant</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.container2}>
          <Pressable onPress={() => handlePress(2)}>
            <View style={styles.circleButtonOnlyText}>
              <Text style={styles.textStyle}>I'm none of the above</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default PersonType;
