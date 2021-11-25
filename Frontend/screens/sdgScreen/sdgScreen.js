import React from "react";
import {
  Text,
  ScrollView,
  ImageBackground,
  Image,
  View,
  TouchableHighlight,
} from "react-native";
import sdgs from "../../utils/sdgs";
import { styles } from "../../styles/sdgScreenStyles";

const SdgScreen = ({ navigation }) => {
  const handlePress = (sdgId) => {
    navigation.navigate("SdgOrganisationsList", {
      sdgId: sdgId,
    });
  };

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
        <ScrollView style={styles.mainContainer}>
          <Text style={styles.titleTextStyle}>
            Choose one of the 17 goals and see organisations that can help!
          </Text>
          <View style={styles.container}>
            {sdgs.map((sdg) => (
              <View key={sdg.id} style={styles.buttonContainer}>
                <TouchableHighlight
                  style={styles.button}
                  onPress={() => {
                    handlePress(sdg.id);
                  }}
                >
                  <Image
                    resizeMode="contain"
                    source={sdg.image}
                    style={styles.image}
                  />
                </TouchableHighlight>
              </View>
            ))}
          </View>
        </ScrollView>
    </ImageBackground>
  );
};

export default SdgScreen;
