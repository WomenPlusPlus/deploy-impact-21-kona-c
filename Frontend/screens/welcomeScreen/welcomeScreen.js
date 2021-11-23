import React, { useState } from "react";
import { View, Text, ImageBackground, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import { styles } from "../../styles/welcomeScreenStyles";

const HomeScreen = ({ navigation }) => {
  const languages = [
    {
      language: "EN",
      flag: require("../../assets/languagesFlags/EN_flag.png"),
    },
    {
      language: "FR",
      flag: require("../../assets/languagesFlags/FR_flag.png"),
    },
    {
      language: "DE",
      flag: require("../../assets/languagesFlags/DE_flag.png"),
    },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages[0].language
  );
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);

  const handlePress = () => {
    navigation.navigate("LocationScreen");
  };

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <View style={styles.mainContainer}>
        <View>
          <View style={styles.dropdownMainContainer}>
            <Image
              resizeMode="contain"
              source={languages[selectedLanguageIndex].flag}
              style={styles.imageTop}
            />
            <SelectDropdown
              buttonTextStyle={styles.textStyle}
              buttonStyle={styles.button}
              dropdownStyle={styles.dropdownStyle}
              rowStyle={styles.rowStyle}
              defaultButtonText={selectedLanguage}
              renderDropdownIcon={() => {
                return (
                  <FontAwesome
                    name="chevron-down"
                    style={styles.dropdownIcon}
                  />
                );
              }}
              dropdownIconPosition={"right"}
              data={languages.map((a) => a.language)}
              onSelect={(selectedItem, index) => {
                setSelectedLanguageIndex(index);
                setSelectedLanguage(selectedItem);
                return <Text style={styles.textStyle}>{selectedItem}</Text>;
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              renderCustomizedRowChild={(selectedItem, index) => {
                return (
                  <View style={styles.buttonDown}>
                    <Image
                      resizeMode="contain"
                      source={languages[index].flag}
                      style={styles.image}
                    />
                    <Text style={styles.textStyle}>{selectedItem}</Text>
                  </View>
                );
              }}
            />
          </View>
          <LinearGradient
            // Button Linear Gradient
            colors={["#323438", "black", "black"]}
            style={styles.roundXL}
          >
            <Pressable onPress={handlePress}>
              <Text style={styles.textButton}>
                If you are in a vulnerable situation...
              </Text>
            </Pressable>
          </LinearGradient>

          <View style={styles.containerRoundMS}>
            <LinearGradient
              // Button Linear Gradient
              colors={["#323438", "black", "black"]}
              style={styles.roundS}
            >
              <Pressable onPress={handlePress}>
                <Text style={styles.textButton}>If you are at risk...</Text>
              </Pressable>
            </LinearGradient>
            <LinearGradient
              // Button Linear Gradient
              colors={["#323438", "black", "black"]}
              style={styles.roundM}
            >
              <Pressable onPress={handlePress}>
                <Text style={styles.textButton}>
                  If someone else needs help...
                </Text>
              </Pressable>
            </LinearGradient>
          </View>
        </View>
        <Text style={styles.bottomText}>Dots can find the help you need</Text>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
