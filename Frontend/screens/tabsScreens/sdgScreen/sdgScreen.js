import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  View,
  TouchableHighlight,
} from "react-native";
import normalize from "react-native-normalize";
import sdgs from "../../../utils/sdgs";
import styles from '../sdgScreen/sdgScreenStyles';

const SdgScreenNEW = ({ navigation }) => {
  const handlePress = (sdgId) => {
    navigation.navigate("SdgOrganisationsList", {
      sdgId: sdgId,
    });
  };

  return (
    <ImageBackground
      source={require("../../../assets/background.png")}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <ScrollView style={styles.mainContainer}>
        <Text style={styles.titleTextStyle}>
          NEW Choose one of the 17 goal and see organisations that can help!
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



export default SdgScreenNEW;
