import React from "react";
import { Text, ImageBackground, View, Pressable } from "react-native";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { styles } from "./stylesPInfo";

const InfoAge = ({ route, navigation }) => {
  const selectedRegionIndex = Object.values(route.params)[0];
  const selectedInstitutionType = Object.values(route.params)[1];
  const selectedForWho = Object.values(route.params)[2];
  const selectedGender = Object.values(route.params)[3];

  const handlePress = (id) => {
    navigation.navigate("PersonType", {
      selectedRegionIndex: selectedRegionIndex,
      selectedInstitutionType: selectedInstitutionType,
      selectedForWho: selectedForWho,
      selectedGender: selectedGender,
      selectedAge: id,
    });
  };

  return (
    <View>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.titleTextStyle}>How old are you?</Text>
        <View>
          <View style={styles.container1}>
            <Pressable onPress={() => handlePress(0)}>
              <View style={styles.circleButton}>
                <FontAwesome5 name="baby" style={styles.userImage} />
                <Text style={styles.textStyle}>0-12</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => handlePress(1)}>
              <View style={styles.circleButton}>
                <MaterialCommunityIcons
                  name="human-child"
                  style={styles.userImage}
                />
                <Text style={styles.textStyle}>12-18</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.container2}>
            <Pressable onPress={() => handlePress(2)}>
              <View style={styles.circleButtonOnlyText}>
                <MaterialCommunityIcons
                  name="human-male"
                  style={styles.userImage}
                />

                <Text style={styles.textStyle}>18-65</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => handlePress(3)}>
              <View style={styles.circleButtonOnlyText}>
                <MaterialIcons name="elderly" style={styles.userImage} />
                <Text style={styles.textStyle}>65+</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default InfoAge;
