import React from "react";
import {
  Text,
  ScrollView,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
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
      <ScrollView style={styles.mainContainer}>
        {uniqueRegionsArray.map((region) => (
          <View key={region} style={styles.container1}>
            <View style={styles.circleButton}
            >
              <Pressable
                style={styles.circleButton}
                onPress={() => handlePress(region)}
              >
                <Text style={styles.textStyle}>{region}</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default LocationScreen;
