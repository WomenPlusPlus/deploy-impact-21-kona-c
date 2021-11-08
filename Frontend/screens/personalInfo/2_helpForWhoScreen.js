import React from "react";
import { Text, ImageBackground, View, Pressable } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { styles } from "./stylesPInfo";

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
      </ImageBackground>
    </View>
  );
};

export default HelpForWho;
