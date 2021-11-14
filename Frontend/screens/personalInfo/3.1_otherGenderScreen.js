import React from "react";
import {
  Text,
  ImageBackground,
  View,
  Pressable,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { FontAwesome5, FontAwesome, Ionicons } from "@expo/vector-icons";
import { styles } from "../needsScreens/bComponentStyles";
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
      selectedGender: "M",
    });
  };

  return (
    <ScrollView keyboardShouldPersistTaps="always">
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.titleTextStyle}>
          Please specify a gender identity
        </Text>
        <View>
          <View style={styles.container1}>
            <View style={styles.bubbleContainer}>
              <Pressable
                style={styles.circleButton}
                onPress={() => handlePress("M")}
              >
                <Text style={styles.textStyle}>Non-binary</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.container1}>
            <View style={styles.bubbleContainer}>
              <Pressable
                style={styles.circleButton}
                onPress={() => handlePress("M")}
              >
                <Text style={styles.textStyle}>Gender-fluid</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.container1}>
            <View style={styles.bubbleContainer}>
              <Pressable
                style={styles.circleButton}
                onPress={() => handlePress("M")}
              >
                <Text style={styles.textStyle}>Agender</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.container1}>
            <Pressable
              style={styles.circleButton}
              onPress={() => handlePress("M")}
            >
              <Text style={styles.textStyle}>Intersex</Text>
            </Pressable>
          </View>
          <View style={styles.containerInput}>
            <View
              style={styles.circleButtonInput}
              onPress={() => handlePress("M")}
            >
              <TextInput
                placeholder="Another (please specify)"
                placeholderTextColor={"#8A449D"}
                style={styles.textStyleInput}
              ></TextInput>
              <NextButton handlePress={handlePress} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default OtherGender;