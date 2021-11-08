import React from "react";
import { Text, ImageBackground, View, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "./stylesPInfo";

const InfoGender = ({ route, navigation }) => {
  const selectedRegionIndex = Object.values(route.params)[0];
  const selectedInstitutionType = Object.values(route.params)[1];
  const selectedForWho = Object.values(route.params)[2];

  const handlePress = (id) => {
    navigation.navigate("InfoAge", {
      selectedRegionIndex: selectedRegionIndex,
      selectedInstitutionType: selectedInstitutionType,
      selectedForWho: selectedForWho,
      selectedGender: id,
    });
  };

  return (
    <View>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.titleTextStyle}>What is your gender?</Text>
        <View>
          <View style={styles.container1}>
            <Pressable onPress={() => handlePress(0)}>
              <View style={styles.circleButton}>
                <FontAwesome5 name="female" style={styles.userImage} />
                <Text style={styles.textStyle}>Female</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => handlePress(1)}>
              <View style={styles.circleButton}>
                <FontAwesome5 name="male" style={styles.userImage} />
                <Text style={styles.textStyle}>Male</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.container2}>
            <Pressable onPress={() => handlePress(2)}>
              <View style={styles.circleButtonOnlyText}>
                <Text style={styles.textStyle}>Others</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => handlePress(3)}>
              <View style={styles.circleButtonOnlyText}>
                <Text style={styles.textStyle}>I prefer not to say</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default InfoGender;
