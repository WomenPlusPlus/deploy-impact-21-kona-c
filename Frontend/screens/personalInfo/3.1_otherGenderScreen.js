import React from "react";
import {
  Text,
  ImageBackground,
  View,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import { styles } from "../../styles/longerButtonsScreenStyles";
import NextButton from "../../components/nextButton";

const OtherGender = ({ route, navigation }) => {
  const selectedRegion = route.params["selectedRegion"];
  const selectedInstitutionType = route.params["selectedInstitutionType"];
  const selectedForWho = route.params["selectedForWho"];

  const handlePress = (selectedender) => {
    navigation.navigate("InfoAge", {
      selectedRegion: selectedRegion,
      selectedInstitutionType: selectedInstitutionType,
      selectedForWho: selectedForWho,
      uniqueRegionsArray: route.params["uniqueRegionsArray"],
      selectedGender: "O",
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
            onPress={() => handlePress("M")}
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
