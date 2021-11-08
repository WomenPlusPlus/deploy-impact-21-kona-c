import React from "react";
import { Text, ImageBackground, View, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "../../components/screenComponents/screenAcomponents/aComponentStyles";

const HelpForWho = ({ route, navigation }) => {
  const selectedRegionIndex = Object.values(route.params)[0];
  const selectedInstitutionType = Object.values(route.params)[1];

  const handlePress = (id) => {
    navigation.navigate("InfoGender", {
      selectedRegionIndex: selectedRegionIndex,
      selectedInstitutionType: selectedInstitutionType,
      selectedForWho: id,
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
          Whom are you seeking help for...
        </Text>
        <View>
          <View style={styles.container1}>
            <View style={styles.bubbleContainer}>
              <Pressable 
                style={styles.circleButton}
                onPress={() => handlePress(0)}>
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
                onPress={() => handlePress(1)}>
                <View style={styles.severalIconsButton}> 
                  <FontAwesome5 name="users" style={styles.userImage} />
                </View>
              </Pressable>
              <Text style={styles.textStyle}>Others</Text>
              <Text style={styles.textBracketStyle}>(Family, Friends, etc.)</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HelpForWho;
