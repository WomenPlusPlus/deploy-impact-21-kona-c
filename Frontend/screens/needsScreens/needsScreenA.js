import React from "react";
import { Text, ScrollView, View, Pressable } from "react-native";
import {
  FontAwesome5,
  FontAwesome,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";
import options from "../../assets/options_map.json";
import { StyleSheet, Dimensions, PixelRatio } from "react-native";
import normalize from "react-native-normalize";

const { width, height } = Dimensions.get("window");
let partialHeight = 0.22 * height;
let bubbleWidth = 0.33 * width;
let bubbleSize = Math.round((bubbleWidth + partialHeight) / 2);

const NeedsScreenA = ({ route, navigation }) => {
  let optionsArray = [];
  
  const handlePress = (id) => {
    navigation.navigate("NeedsScreenB", {
      selectedOptionLayer1: id,
    });
  };

  for (let i = 0; i < options.length; i++) {
    optionsArray.push(options[i]["First_layer"]);
  }

  let uniqueOptionsArray = [...new Set(optionsArray)];

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
              <Text style={styles.textStyle}>{uniqueOptionsArray[0]}</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress(2)}>
            <View style={styles.circleButton}>
              <Ionicons name="shield-checkmark" style={styles.userImage} />
              <Text style={styles.textStyle}>{uniqueOptionsArray[1]}</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress(3)}>
            <View style={styles.circleButton}>
              <FontAwesome5 name="briefcase" style={styles.userImage} />
              <Text style={styles.textStyle}>{uniqueOptionsArray[2]}</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.container1}>
          <Pressable onPress={() => handlePress(4)}>
            <View style={styles.circleButton}>
              <FontAwesome5 name="heartbeat" style={styles.userImage} />
              <Text style={styles.textStyle}>{uniqueOptionsArray[3]}</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress(5)}>
            <View style={styles.circleButton}>
              <View style={styles.severalIconsButton}>
                <FontAwesome name="graduation-cap" style={styles.userImage} />
              </View>
              <Text style={styles.textStyle}>{uniqueOptionsArray[4]}</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress(6)}>
            <View style={styles.circleButton}>
              <Entypo name="tree" style={styles.userImage} />
              <Text style={styles.textStyle}>{uniqueOptionsArray[5]}</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.container2}>
        <Pressable onPress={() => handlePress(7)}>
          <View style={styles.circleButton}>
            <View style={styles.severalIconsButton}>
              <FontAwesome name="balance-scale" style={styles.userImage} />
            </View>
            <Text style={styles.textStyle}>{uniqueOptionsArray[6]}</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => handlePress(8)}>
          <View style={styles.circleButton}>
            <FontAwesome5 name="building" style={styles.userImage} />
            <Text style={styles.textStyle}>{uniqueOptionsArray[7]}</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  bubblesContainer: {},
  container1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8%",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8%",
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
    marginTop: 35,
    textAlign: "center",
  },
  circleButton: {
    width: bubbleSize / 1.2,
    height: bubbleSize / 1.2,
    borderRadius: bubbleSize / 2,
    backgroundColor: "#A169B1",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderColor: "white",
    borderWidth: 2,
    paddingLeft: "9%",
    paddingRight: "9%",
    paddingBottom: "15%",
    paddingTop: "10%",
    marginLeft: bubbleSize / 38,
    marginRight: bubbleSize / 38,
  },
  userImage: {
    fontSize: normalize(38),
    color: "white",
    paddingBottom: "1%",
  },
  severalIconsButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  severalIconsText: {
    fontSize: normalize(38),
    color: "white",
  },
});

export default NeedsScreenA;
