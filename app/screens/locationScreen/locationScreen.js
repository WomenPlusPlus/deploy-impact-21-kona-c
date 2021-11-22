import React from "react";
import {
  Text,
  ScrollView,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";
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
      <ReactNativeZoomableView
        maxZoom={1.5}
        minZoom={0.9}
        zoomStep={0.5}
        initialZoom={1}
        bindToBorders={true}
      >
        <ScrollView>
          <Text style={styles.titleTextStyle}>Please select a region</Text>
          {uniqueRegionsArray.map((region) => (
            <View key={region} style={styles.container1}>
              <View style={styles.bubbleContainer}>
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
      </ReactNativeZoomableView>
    </ImageBackground>
  );
};

export default LocationScreen;
