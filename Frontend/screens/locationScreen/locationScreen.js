import React from "react";
import { Text, View, ImageBackground, Alert, Pressable,StyleSheet, Dimensions  } from "react-native";
import data from "../../assets/jsonFiles/organisations.json";
import normalize from "react-native-normalize";
const { width, height } = Dimensions.get("window");

const LocationScreen = ({ navigation }) => {
  let regionsArray = [];
  let selectedRegion = "";

  const handlePress = () => {
    navigation.navigate("InstitutionType", {
      selectedRegion: selectedRegion,
    });
  };
  for (let i = 0; i < data.length; i++) {
    regionsArray.push(data[i]["Code_region"]);
  }

  let uniqueRegionsArray = [...new Set(regionsArray)];
  return (
    <View>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.titleTextStyle}>Please select a region</Text>
        {uniqueRegionsArray.map((region) => (
        <View key = {region} style={styles.container1}>
        <View style={styles.bubbleContainer}>
          <Pressable
            style={styles.circleButton}
            onPress={() => handlePress(region)}
            >
            <Text style={styles.textStyle}>{region}</Text>
            </Pressable>
          </View>
        </View>))}
      </ImageBackground>
    </View>
  );
};
let partialHeight = 0.22 * height;
let bubbleWidth = 0.33 * width;
let bubbleSize = Math.round((bubbleWidth + partialHeight) / 2);
const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontSize: 20,
  },
  titleTextStyle: {
    fontFamily: "Roboto-Regular",
    color: "#921CB1",
    fontSize: normalize(25),
    margin: 25,
    textAlign: "center",
  },
  image: {
    height: height,
  },
  bubbleContainer: {},
  container1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  circleButton: {
    width: bubbleSize * 2.6,
    height: bubbleSize / 2.25,
    borderRadius: bubbleSize / 2,
    backgroundColor: "#A169B1",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderColor: "white",
    borderWidth: 2,
    margin: bubbleSize / 35,
    paddingLeft: 8.5,
    paddingRight: 8,
  },
});

export default LocationScreen;
