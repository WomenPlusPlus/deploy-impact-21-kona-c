import { Link } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
} from "react-native";
import data from "../../assets/organisations.json";
import { StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import NextButton from "../../components/nextButton";

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
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          renderCustomizedRowChild={(selectedItem, index) => {
            console.log(selectedIndex);
            return (
              <View style={styles.buttonDown}>
                <Text style={styles.textStyle}>{selectedItem}</Text>
              </View>
            );
          }}
        />
      </View>
      <NextButton handlePress={handlePress}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#A169B1",
    width: "80%",
    marginTop: 15,
    marginBottom: "80%",
  },
  buttonDown: {
    backgroundColor: "#A169B1",
    margin: 0,
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
    margin: 35,
  },
  dropdownicon: {
    color: "white",
    marginRight: 15,
    fontSize: 20,
  },
});

export default LocationScreen;
