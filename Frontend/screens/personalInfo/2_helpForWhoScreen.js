import React from "react";
import { Text, ImageBackground, View, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "../../screens/needsScreens/aComponentStyles";

const HelpForWho = ({ route, navigation }) => {
  const selectedRegion = route.params["selectedRegion"];
  const selectedInstitutionType = route.params["selectedInstitutionType"];

  const handlePress = (selectedForWho) => {
    navigation.navigate("InfoGender", {
      selectedRegion: selectedRegion,
      selectedInstitutionType: selectedInstitutionType,
      selectedForWho: selectedForWho,
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
          Seeking help for...
        </Text>
        <View>
          <View style={styles.container1}>
            <View style={styles.bubbleContainer}>
              <Pressable 
                style={styles.circleButton}
                onPress={() => handlePress("Myself")}>
                <View style={styles.severalIconsButton}> 
                  <FontAwesome5 name="user" style={styles.userImage} />
                </View>
              </Pressable>
              <Text style={styles.textStyle}>Myself</Text>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.bubbleContainer}>
              <Pressable 
                style={styles.circleButton}
                onPress={() => handlePress("Others")}>
                <View style={styles.severalIconsButton}> 
                  <FontAwesome5 name="users" style={styles.userImage} />
                </View>
              </Pressable>
              <Text style={styles.textStyle}>Others</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HelpForWho;
