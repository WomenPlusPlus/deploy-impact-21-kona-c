import React from "react";
import {
  Text,
  ImageBackground,
  View,
  Pressable,
  TextInput,
} from "react-native";
import { styles } from "../../styles/longerButtonsScreenStyles";
import NextButton from "../../components/nextButton";

const OtherGender = ({ route, navigation }) => {
  const handlePress = (selectedGender) => {
    navigation.navigate("InfoAge", {
      selectedRegion: route.params["selectedRegion"],
      uniqueRegionsArray: route.params["uniqueRegionsArray"],
      selectedGender: selectedGender,
    });
  };

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <View style={styles.mainContainer} keyboardShouldPersistTaps="always">
        <View style={styles.container1}>
          <Pressable
            style={styles.circleButton}
            onPress={() => handlePress("O")}
          >
            <Text style={styles.textStyle}>Non-binary</Text>
          </Pressable>
        </View>

        <View style={styles.container1}>
          <Pressable
            style={styles.circleButton}
            onPress={() => handlePress("O")}
          >
            <Text style={styles.textStyle}>Gender-fluid</Text>
          </Pressable>
        </View>
        <View style={styles.container1}>
          <Pressable
            style={styles.circleButton}
            onPress={() => handlePress("O")}
          >
            <Text style={styles.textStyle}>Agender</Text>
          </Pressable>
        </View>
        <View style={styles.containerInput}>
          <View
            style={styles.circleButtonInput}
            onPress={() => handlePress("O")}
          >
            <TextInput
              placeholder="Another (please specify)"
              placeholderTextColor={"#DCDCDC"}
              style={styles.textStyleInput}
            ></TextInput>
            <NextButton handlePress={handlePress} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default OtherGender;
