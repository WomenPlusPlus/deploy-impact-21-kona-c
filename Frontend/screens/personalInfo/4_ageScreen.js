import React from "react";
import { Text, ImageBackground, View, Pressable } from "react-native";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { styles } from "../../components/screenComponents/screenAcomponents/aComponentStyles";

const InfoAge = ({ route, navigation }) => {
  const selectedRegionIndex = Object.values(route.params)[0];
  const selectedInstitutionType = Object.values(route.params)[1];
  const selectedForWho = Object.values(route.params)[2];
  const selectedGender = Object.values(route.params)[3];

  const handlePress = (id) => {
    navigation.navigate("PersonType", {
      selectedRegionIndex: selectedRegionIndex,
      selectedInstitutionType: selectedInstitutionType,
      selectedForWho: selectedForWho,
      selectedGender: selectedGender,
      selectedAge: id,
    });
  };

  return (
    <View>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.titleTextStyle}>Age Range?</Text>
        <View>
          <View style={styles.container1}>
           <View style={styles.bubbleContainer}>
              <Pressable 
                style={styles.circleButton}
                onPress={() => handlePress(0)}>
                <View style={styles.severalIconsButton}> 
                  <FontAwesome5 name="baby" style={styles.userImage} />
                </View>
              </Pressable>
              <Text style={styles.textStyle}>0-12</Text>
            </View>
            <View style={styles.bubbleContainer}>
              <Pressable 
                style={styles.circleButton}
                onPress={() => handlePress(1)}>
                <View style={styles.severalIconsButton}> 
                  <MaterialCommunityIcons
                    name="human-child"
                    style={styles.userImage}
                  />
                </View>
              </Pressable>
              <Text style={styles.textStyle}>12-18</Text>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.bubbleContainer}>
              <Pressable 
                style={styles.circleButton}
                onPress={() => handlePress(2)}>
                <View style={styles.severalIconsButton}> 
                  <MaterialCommunityIcons
                    name="human-male"
                    style={styles.userImage}
                  />
                </View>
              </Pressable>
              <Text style={styles.textStyle}>18-65</Text>
            </View>
            <View style={styles.bubbleContainer}>
              <Pressable 
                style={styles.circleButton}
                onPress={() => handlePress(3)}>
                <View style={styles.severalIconsButton}> 
                  <MaterialIcons
                    name="elderly"
                    style={styles.userImage}
                  />
                </View>
              </Pressable>
              <Text style={styles.textStyle}>65+</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default InfoAge;
