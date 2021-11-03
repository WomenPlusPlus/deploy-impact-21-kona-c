import React, { useState } from "react";
import { Text, ScrollView, FlatList, View, Pressable } from "react-native";
import { StyleSheet, Dimensions } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const { width, height } = Dimensions.get("window");

let partialHeight = 0.22 * height;

let bubbleWidth = 0.33 * width;
let bubbleSize = Math.round((bubbleWidth + partialHeight) / 2);

const InstitutionType = ({ route, navigation }) => {
  const selectedRegionIndex = parseInt(Object.values(route.params));
  console.log(selectedRegionIndex);

  const [institutionType, setInstitutionType] = useState(-1);

  const handlePress = (id) => {
    setInstitutionType(id);
    navigation.navigate("HelpForWho", {
      selectedRegionIndex: selectedRegionIndex,
      selectedInstitutionType: institutionType,
    });
  };

  console.log(institutionType);
  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.titleTextStyle, styles.container]}>
        Are you looking for help for...
      </Text>
      <View style={styles.circlesContainer}>
        <View style={styles.container1}>
          <Pressable onPress={() => handlePress(0)}>
            <View style={styles.circleButton}>
              <FontAwesome name="user" style={styles.userImage} />
              <Text style={styles.textStyle}>Person</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.container2}>
          <Pressable onPress={() => handlePress(2)}>
            <View style={styles.circleButton}>
              <FontAwesome name="university" style={styles.userImage} />
              <Text style={styles.textStyle}>Institution</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress(1)}>
            <View style={styles.circleButton}>
              <FontAwesome name="building" style={styles.userImage} />
              <Text style={styles.textStyle}>Company</Text>
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "10%",
  },
  container2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "white",
    fontSize: 23,
  },
  titleTextStyle: {
    color: "#921CB1",
    fontSize: 25,
    margin: 35,
  },
  circlesContainer: {},

  circleButton: {
    width: bubbleSize,
    height: bubbleSize,
    borderRadius: bubbleSize / 2,
    backgroundColor: "#A169B1",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: 28,
    paddingTop: 18,
    margin: "4%",
  },
  userImage: {
    fontSize: 60,
    color: "white",
  },
});

export default InstitutionType;
