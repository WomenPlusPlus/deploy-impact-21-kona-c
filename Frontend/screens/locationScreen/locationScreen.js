import { Link } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, Image, Button, Linking } from "react-native";
import data from "../../assets/organisations.json";
import { StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const LocationScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("InstitutionType");
  };

  let regionsArray = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i]["Region"].toUpperCase().substring(0, 5) == "DAKAR") {
      regionsArray.push("DAKAR");
    } else if (data[i]["Region"] === "") {
      regionsArray.push("WORLDWIDE");
    } else {
      regionsArray.push(data[i]["Region"].toUpperCase());
    }
  }
  let uniqueRegionsArray = [...new Set(regionsArray)];

  console.log(uniqueRegionsArray);

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
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 5,
    backgroundColor: "#A169B1",
    width: "80%",
  },
  buttonDown: {
    backgroundColor: "#A169B1",
    margin: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
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
