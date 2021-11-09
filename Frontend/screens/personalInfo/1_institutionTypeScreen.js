import React from "react";
import { Text, View, Pressable, ImageBackground } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "../../screens/needsScreens/aComponentStyles";

const InstitutionType = ({ route, navigation }) => {
  const selectedRegion = route.params["selectedRegion"];
  
  const handlePress = (selectedInstitutionType) => {
    navigation.navigate("HelpForWho", {
      selectedRegion: selectedRegion,
      selectedInstitutionType: selectedInstitutionType,
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
            <View style={styles.bubbleContainer}>
              <Pressable
                style={styles.circleButton}
                onPress={() => handlePress("Person/Individual")}
              >
                <View style={styles.severalIconsButton}>
                  <FontAwesome5 name="user" style={styles.userImage} />
                </View>
              </Pressable>
              <Text style={styles.textStyle}>Person/Individual</Text>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.bubbleContainer}>
              <Pressable
                style={styles.circleButton}
                onPress={() => handlePress("Company/Organisation")}
              >
                <View style={styles.severalIconsButton}>
                  <FontAwesome5 name="building" style={styles.userImage} />
                </View>
              </Pressable>
              <Text style={styles.textStyle}>Company/Organisation</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default InstitutionType;
