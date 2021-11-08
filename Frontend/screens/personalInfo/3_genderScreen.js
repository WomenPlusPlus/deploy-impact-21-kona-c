import React from "react";
import { Text, ImageBackground, View, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "../../components/screenComponents/screenAcomponents/aComponentStyles";

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
                onPress={() => handlePress(0)}>
                <View style={styles.severalIconsButton}> 
                  <FontAwesome5 name="female" style={styles.userImage} />
                </View>
              </Pressable>
              <Text style={styles.textStyle}>Female</Text>
            </View>
            <View style={styles.bubbleContainer}>
              <Pressable 
                style={styles.circleButton}
                onPress={() => handlePress(1)}>
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
                onPress={() => handlePress(2)}>
                <View style={styles.severalIconsButton}> 
                </View>
              </Pressable>
              <Text style={styles.textStyle}>Other</Text>
            </View>
            <View style={styles.bubbleContainer}>
              <Pressable 
                style={styles.circleButton}
                onPress={() => handlePress(3)}>
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
