import React from "react";
import { Text, ScrollView } from "react-native";
import { styles } from "./stylesPInfo";

const NewScreen = ({ route, navigation }) => {
  const selectedRegionIndex = Object.values(route.params)[0];
  const selectedInstitutionType = Object.values(route.params)[1];
  const selectedForWho = Object.values(route.params)[2];
  const selectedGender = Object.values(route.params)[3];
  const selectedAge = Object.values(route.params)[4];
  const selectedPersonType = Object.values(route.params)[5];

  console.log(selectedRegionIndex);
  console.log(selectedInstitutionType);
  console.log(selectedForWho);
  console.log(selectedGender);
  console.log(selectedAge);
  console.log(selectedPersonType);

  return (
    <ScrollView>
      <Text style={styles.titleTextStyle}>I am a new screen! </Text>
      <Text style={styles.titleTextStyle}>Who are you?</Text>
    </ScrollView>
  );
};

export default NewScreen;
