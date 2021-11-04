import React from "react";
import { Text, View, ScrollView, ImageBackground } from "react-native";
import data from "../../assets/organisations.json";
import { StyleSheet, Dimensions } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import NextButton from "../../components/nextButton";
const { width, height } = Dimensions.get("window");

const LocationScreen = ({ navigation }) => {
  let regionsArray = [];
  let selectedIndex = -1;

  const handlePress = () => {
    navigation.navigate("InstitutionType", {
      LocationIndex: selectedIndex,
    });
  };
  for (let i = 0; i < data.length; i++) {
    regionsArray.push(data[i]["Code_region"]);
  }

  let uniqueRegionsArray = [...new Set(regionsArray)];

  return (
    <ScrollView>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container}>
          <Text style={styles.titleTextStyle}>Enter your location</Text>
          <SelectDropdown
            buttonTextStyle={styles.textStyle}
            buttonStyle={styles.button}
            defaultButtonText={"Select region"}
            renderDropdownIcon={() => {
              return (
                <FontAwesome name="chevron-down" style={styles.dropdownicon} />
              );
            }}
            dropdownIconPosition={"right"}
            data={uniqueRegionsArray}
            onSelect={(selectedItem, index) => {
              selectedIndex = index;
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
                  <Text style={styles.textStyle}>{selectedItem}</Text>
                </View>
              );
            }}
          />
        </View>
        <NextButton handlePress={handlePress} />
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#A169B1",
    width: "80%",
    marginBottom: "90%",
  },
  buttonDown: {
    backgroundColor: "#A169B1",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 0.5,
  },
  textStyle: {
    color: "white",
    fontSize: 20,
  },
  titleTextStyle: {
    color: "#921CB1",
    fontSize: 25,
    margin: 25,
  },
  dropdownicon: {
    color: "white",
    marginRight: 15,
    fontSize: 20,
  },
  image: {
    height: height,
  },
});

export default LocationScreen;
