import React from "react";
import { Text, ScrollView, View, Pressable } from "react-native";
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
    <ScrollView>
      <Text style={styles.titleTextStyle}>
        Whom are you seeking help for...
      </Text>
      <View>
        <View style={styles.container1for2options}>
          <Pressable onPress={() => handlePress(0)}>
            <View style={styles.circleButton}>
              <FontAwesome name="user" style={styles.userImage} />
              <Text style={styles.textStyle}>Myself</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.container2for2options}>
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

export default HelpForWho;
