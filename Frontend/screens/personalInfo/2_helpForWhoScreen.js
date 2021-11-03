import React, { useState } from "react";
import { Text, ScrollView, View, Pressable } from "react-native";
import { StyleSheet, Dimensions } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import normalize from "react-native-normalize";


const { width, height } = Dimensions.get("window");
let partialHeight = 0.22 * height;
let bubbleWidth = 0.33 * width;
let bubbleSize = Math.round((bubbleWidth + partialHeight) / 2);

const HelpForWho = ({ route, navigation }) => {
  const selectedRegionIndex = Object.values(route.params)[0];
  const selectedInstitutionType = Object.values(route.params)[1];
  const [forWho, setforWho] = useState(-1);

  const handlePress = (id) => {
    setforWho(id);
    navigation.navigate("InfoGender", {
      selectedRegionIndex: selectedRegionIndex,
      selectedInstitutionType: selectedInstitutionType,
      selectedForWho: forWho,
    });
  };

  console.log(selectedRegionIndex);
  console.log(selectedInstitutionType);
  console.log(forWho);

  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.titleTextStyle, styles.container]}>
        Whom are you seeking help for...
      </Text>
      <View>
        <View style={styles.container1}>
          <Pressable onPress={() => handlePress(0)}>
            <View style={styles.circleButton}>
              <FontAwesome name="user" style={styles.userImage} />
              <Text style={styles.textStyle}>Myself</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.container2}>
          <Pressable onPress={() => handlePress(1)}>
            <View style={styles.circleButton}>
              <FontAwesome name="users" style={styles.userImage} />
              <Text style={styles.textStyle}>Others</Text>
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
    marginTop: "5%",
    marginRight: "30%",
  },
  container2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "30%",
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
  circleButton: {
    width: bubbleSize,
    height: bubbleSize,
    borderRadius: bubbleSize / 2,
    backgroundColor: "#A169B1",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 8,
    margin: "4%",
  },
  userImage: {
    fontSize: 60,
    color: "white",
  },
});

export default HelpForWho;
