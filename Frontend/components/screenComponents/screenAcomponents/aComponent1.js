import React from "react";
import { Text, ImageBackground, View, Pressable } from "react-native";
import {
  FontAwesome5,
  FontAwesome,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";
import options from "../../../assets/options_map.json";
import { styles } from "./aComponentsStyles";

const Component1 = ({ route, navigation }) => {
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
    <ImageBackground
      source={require("../../../assets/background.png")}
      resizeMode="cover"
      style={styles.image}
    >
      <Text style={styles.titleTextStyle}>Need help with...</Text>
      <View>
        <View style={styles.container1}>
          <View style={styles.bubbleContainer}>
            <Pressable
              style={styles.circleButton}
              onPress={() => handlePress(1)}
            >
              <View style={styles.severalIconsButton}>
                <Ionicons
                  name="restaurant-outline"
                  style={styles.severalIconsText}
                />
                <FontAwesome5 name="home" style={styles.severalIconsText} />
              </View>
            </Pressable>
            <Text style={styles.textStyle}>{uniqueOptionsArray[0]}</Text>
          </View>
          <View style={styles.bubbleContainer}>
            <Pressable
              style={styles.circleButton}
              onPress={() => handlePress(2)}
            >
              <Ionicons name="shield-checkmark" style={styles.userImage} />
            </Pressable>
            <Text style={styles.textStyle}>{uniqueOptionsArray[1]}</Text>
          </View>
          <View style={styles.bubbleContainer}>
            <Pressable
              style={styles.circleButton}
              onPress={() => handlePress(3)}
            >
              <FontAwesome5 name="briefcase" style={styles.userImage} />
            </Pressable>
            <Text style={styles.textStyle}>{uniqueOptionsArray[2]}</Text>
          </View>
        </View>
        <View style={styles.container1}>
          <View style={styles.bubbleContainer}>
            <Pressable
              style={styles.circleButton}
              onPress={() => handlePress(4)}
            >
              <FontAwesome5 name="heartbeat" style={styles.userImage} />
            </Pressable>
            <Text style={styles.textStyle}>{uniqueOptionsArray[3]}</Text>
          </View>
          <View style={styles.bubbleContainer}>
            <Pressable
              style={styles.circleButton}
              onPress={() => handlePress(5)}
            >
              <View style={styles.severalIconsButton}>
                <FontAwesome name="graduation-cap" style={styles.userImage} />
              </View>
            </Pressable>
            <Text style={styles.textStyle}>{uniqueOptionsArray[4]}</Text>
          </View>
          <View style={styles.bubbleContainer}>
            <Pressable
              style={styles.circleButton}
              onPress={() => handlePress(6)}
            >
              <Entypo name="tree" style={styles.userImage} />
            </Pressable>
            <Text style={styles.textStyle}>{uniqueOptionsArray[5]}</Text>
          </View>
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.bubbleContainer}>
          <Pressable
            style={styles.severalIconsButton}
            onPress={() => handlePress(7)}
          >
            <View style={styles.circleButton}>
              <FontAwesome name="balance-scale" style={styles.userImage} />
            </View>
          </Pressable>
          <Text style={styles.textStyle}>{uniqueOptionsArray[6]}</Text>
        </View>
        <View style={styles.bubbleContainer}>
          <Pressable style={styles.circleButton} onPress={() => handlePress(8)}>
            <FontAwesome5 name="building" style={styles.userImage} />
          </Pressable>
          <Text style={styles.textStyle}>{uniqueOptionsArray[7]}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Component1;
