import React, { useState } from "react";
import { Text, ScrollView, View, Pressable } from "react-native";
import { StyleSheet, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import normalize from "react-native-normalize";

const { width, height } = Dimensions.get("window");
let partialHeight = 0.22 * height;
let bubbleWidth = 0.33 * width;
let bubbleSize = Math.round((bubbleWidth + partialHeight) / 2);

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
    <ScrollView style={styles.container}>
      <Text style={[styles.titleTextStyle, styles.container]}>
        What is your gender?
      </Text>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    textAlign: "center",
  },
  container1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    paddingRight: "8%",

  },
  container2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    paddingLeft: "8%",

  },
  textStyle: {
    color: "white",
    fontSize: 23,
    textAlign: "center",
  },
  titleTextStyle: {
    color: "#921CB1",
    fontSize: 25,
    margin: 35,
  },
  circleButtonOnlyText: {
    width: bubbleSize,
    height: bubbleSize,
    borderRadius: bubbleSize / 2,
    backgroundColor: "#A169B1",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 8,
    margin: "3%",
  },
  circleButton: {
    width: bubbleSize,
    height: bubbleSize,
    borderRadius: bubbleSize / 2,
    backgroundColor: "#A169B1",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 8,
    margin: "3%",
  },
  userImage: {
    fontSize: 60,
    color: "white",
  },
});

export default InfoGender;
