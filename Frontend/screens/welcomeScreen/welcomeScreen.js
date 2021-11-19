import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import { styles } from "../../styles/screensStyles/welcomeScreenStyles";

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
      <ScrollView>
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
            defaultButtonText={selectedLanguage}
            rowStyle={styles.rowStyle}
            renderDropdownIcon={() => {
              return (
                <FontAwesome name="chevron-down" style={styles.dropdownIcon} />
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
        <View style={styles.containerRoundXL}>
          <Pressable style={styles.roundXL} onPress={handlePress}>
            <Text style={styles.textButton}>
              If you are in a vulnerable situation...
            </Text>
          </Pressable>
        </View>
        <View style={styles.containerRoundMS}>
          <Pressable style={styles.roundS} onPress={handlePress}>
            <Text style={styles.textButton}>If you are at risk...</Text>
          </Pressable>
          <Pressable style={styles.roundM} onPress={handlePress}>
            <Text style={styles.textButton}>If someone else needs help...</Text>
          </Pressable>
        </View>
        <Text style={styles.bottomText}>Dots can find the help you need</Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;
