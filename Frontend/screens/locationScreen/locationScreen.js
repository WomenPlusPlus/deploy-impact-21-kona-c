import React from "react";
import {
  Text,
  ScrollView,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import data from "../../assets/jsonFiles/organisations.json";
import { styles } from "../../styles/locationStyles";

const LocationScreen = ({ navigation }) => {
  let regionsArray = [];

  const handlePress = (region) => {
    navigation.navigate("InstitutionType", {
      selectedRegion: region,
      uniqueRegionsArray: uniqueRegionsArray,
    });
  };

  for (let i = 0; i < data.length; i++) {
    regionsArray.push(data[i]["Code_region"]);
  }

  let uniqueRegionsArray = [...new Set(regionsArray)];

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <ScrollView>
        <Text style={styles.titleTextStyle}>Please select a region</Text>
        {uniqueRegionsArray.map((region) => (
          <View key={region} style={styles.container1}>
            <LinearGradient
              // Button Linear Gradient
              colors={["#323438", "black", "black"]}
              style={styles.circleButton}
            >
              <Pressable
                style={styles.circleButton}
                onPress={() => handlePress(region)}
              >
                <Text style={styles.textStyle}>{region}</Text>
              </Pressable>
            </LinearGradient>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default LocationScreen;
