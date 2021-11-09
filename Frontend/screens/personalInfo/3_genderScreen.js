import React from "react";
import { Text, ImageBackground, View, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "../../screens/needsScreens/aComponentStyles";


const InfoGender = ({ route, navigation }) => {
  const selectedRegion = route.params["selectedRegion"];
  const selectedInstitutionType = route.params["selectedInstitutionType"];
  const selectedForWho = route.params["selectedForWho"];

  const handlePress = (selectedGender) => {
    navigation.navigate("InfoAge", {
      selectedRegion: selectedRegion,
      selectedInstitutionType: selectedInstitutionType,
      selectedForWho: selectedForWho,
      selectedGender: selectedGender,
    });
  };

  return (
    <View>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.titleTextStyle}>Gender?</Text>
        <View>
          <View style={styles.container1}>
            <View style={styles.bubbleContainer}>
              <Pressable 
                style={styles.circleButton}
                onPress={() => handlePress("Female")}>
                <View style={styles.severalIconsButton}> 
                  <FontAwesome5 name="female" style={styles.userImage} />
                </View>
              </Pressable>
              <Text style={styles.textStyle}>Female</Text>
            </View>
            <View style={styles.bubbleContainer}>
              <Pressable 
                style={styles.circleButton}
                onPress={() => handlePress("Male")}>
                <View style={styles.severalIconsButton}> 
                  <FontAwesome5 name="male" style={styles.userImage} />
                </View>
              </Pressable>
              <Text style={styles.textStyle}>Male</Text>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.bubbleContainer}>
              <Pressable 
                style={styles.circleButton}
                onPress={() => handlePress("Other")}>
                <View style={styles.severalIconsButton}> 
                </View>
              </Pressable>
              <Text style={styles.textStyle}>Other</Text>
            </View>
            <View style={styles.bubbleContainer}>
              <Pressable 
                style={styles.circleButton}
                onPress={() => handlePress("PNTS")}>
                <View style={styles.severalIconsButton}> 
                </View>
              </Pressable>
              <Text style={styles.textStyle}>Prefer not to say</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default InfoGender;
