import React from "react";
import { Text, View, Pressable, ImageBackground } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./stylesPInfo";

const InstitutionType = ({ route, navigation }) => {
  const selectedRegionIndex = parseInt(Object.values(route.params));

  const handlePress = (id) => {
    navigation.navigate("HelpForWho", {
      selectedRegionIndex: selectedRegionIndex,
      selectedInstitutionType: id,
    });
  };

  return (
    <View>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.titleTextStyle}>
          Are you looking for help for...
        </Text>
        <View>
          <View style={styles.container1}>
            <Pressable onPress={() => handlePress(0)}>
              <View style={styles.circleButton}>
                <FontAwesome name="user" style={styles.userImage} />
                <Text style={styles.textStyle}>Person</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.container2}>
            <Pressable onPress={() => handlePress(1)}>
              <View style={styles.circleButton}>
                <FontAwesome name="institution" style={styles.userImage} />
                <Text style={styles.textStyle}>Institution</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => handlePress(2)}>
              <View style={styles.circleButton}>
                <FontAwesome name="building" style={styles.userImage} />
                <Text style={styles.textStyle}>Company</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default InstitutionType;
