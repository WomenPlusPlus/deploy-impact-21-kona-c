import React from "react";
import { Text, ScrollView, View, Pressable } from "react-native";
import {
  FontAwesome5,
  FontAwesome,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";
import { StyleSheet, Dimensions, PixelRatio } from "react-native";
import normalize from "react-native-normalize";

const { width, height } = Dimensions.get("window");
let partialHeight = 0.22 * height;
let bubbleWidth = 0.33 * width;
let bubbleSize = Math.round((bubbleWidth + partialHeight) / 2);

const NeedsScreenA = ({ route, navigation }) => {
  const handlePress = (id) => {
    navigation.navigate("InfoAge", {
      selectedRegionIndex: selectedRegionIndex,
      selectedInstitutionType: selectedInstitutionType,
      selectedForWho: selectedForWho,
      selectedGender: id,
    });
  };

  return (
    <ScrollView>
      <Text style={styles.titleTextStyle}>Select a help area</Text>
      <View style={styles.bubblesContainer}>
        <View style={styles.container1}>
          <Pressable onPress={() => handlePress(1)}>
            <View style={styles.circleButton}>
              <View style={styles.severalIconsButton}>
                <Ionicons
                  name="restaurant-outline"
                  style={styles.severalIconsText}
                />
                <FontAwesome5 name="home" style={styles.severalIconsText} />
              </View>
              <Text style={styles.textStyle}>Food {`&`} Shelter</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress(2)}>
            <View style={styles.circleButton}>
              <Ionicons name="shield-checkmark" style={styles.userImage} />
              <Text style={styles.textStyle}>Social {`&`} Protection</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.container2}>
          <Pressable onPress={() => handlePress(3)}>
            <View style={styles.circleButton}>
              <FontAwesome5 name="briefcase" style={styles.userImage} />
              <Text style={styles.textStyle}>Job {`&`} Finance</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress(4)}>
            <View style={styles.circleButton}>
              <FontAwesome5 name="heartbeat" style={styles.userImage} />
              <Text style={styles.textStyle}>Heath</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.container1}>
          <Pressable onPress={() => handlePress(0)}>
            <View style={styles.circleButton}>
              <View style={styles.severalIconsButton}>
                <FontAwesome name="graduation-cap" style={styles.userImage} />
              </View>
              <Text style={styles.textStyle}>Education</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress(1)}>
            <View style={styles.circleButton}>
              <Entypo name="tree" style={styles.userImage} />
              <Text style={styles.textStyle}>Environment</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.container2}>
        <Pressable onPress={() => handlePress(0)}>
          <View style={styles.circleButton}>
            <View style={styles.severalIconsButton}>
              <FontAwesome name="balance-scale" style={styles.userImage} />
            </View>
            <Text style={styles.textStyle}>Rights</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => handlePress(1)}>
          <View style={styles.circleButton}>
            <FontAwesome5 name="building" style={styles.userImage} />
            <Text style={styles.textStyle}>
              Innovation {`&`} Infrastructure
            </Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  bubblesContainer: {

  },
  container1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3%",
    paddingRight: "7%",
  },
  container1for2options: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: "30%",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2%",
    paddingLeft: "6%",
  },
  container2for2options: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2%",
    paddingLeft: "23%",
  },
  textStyle: {
    fontFamily: "Roboto",
    color: "white",
    fontSize: normalize(16),
    textAlign: "center",
  },
  titleTextStyle: {
    fontFamily: "Roboto",
    color: "#921CB1",
    fontSize: normalize(25),
    marginTop: 15,
    textAlign: "center",
  },
  circleButton: {
    width: bubbleSize / 1.18,
    height: bubbleSize / 1.18,
    borderRadius: bubbleSize / 2,
    backgroundColor: "#A169B1",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 14,
    marginLeft: 7,
    marginRight: 7,
    marginTop: 3

  },
  userImage: {
    fontSize: normalize(45),
    color: "white",
  },
  severalIconsButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  severalIconsText: {
    fontSize: normalize(40),
    color: "white",
  },
});

export default NeedsScreenA;
