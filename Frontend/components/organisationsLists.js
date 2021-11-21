import React from "react";
import {
  Text,
  View,
  ScrollView,
  Pressable,
  Linking,
  ImageBackground,
  Image,
} from "react-native";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import data from "../assets/jsonFiles/organisations.json";
import { styles } from "../styles/componentsStyles/organisationsListStyles";
import sdgsLarge from "../utils/sdgsLarge";
import { makeCall } from "../utils/makeCall";

const OrganisationsLists = (props) => {
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <ScrollView>
        {props.SDG_Id ? (
          <Image
            resizeMode="contain"
            source={sdgsLarge[props.SDG_Id[0] - 1].image}
            style={styles.image}
          />
        ) : null}
        {props.newData.length === 0 ? (
          <Text style={styles.notFoundTextStyle}>
            No organisations available. Try to change the location or search for
            another goal.
          </Text>
        ) : (
          <Text style={styles.titleTextStyle}>
            List of organisations that could provide help
          </Text>
        )}
        <View>
          <SelectDropdown
            buttonTextStyle={styles.textStyle}
            buttonStyle={styles.button}
            defaultButtonText={props.selectedRegion}
            renderDropdownIcon={() => {
              return (
                <FontAwesome name="chevron-down" style={styles.dropdownicon} />
              );
            }}
            dropdownIconPosition={"right"}
            data={props.uniqueRegionsArray}
            onSelect={(selectedItem, index) => {
              props.setSelectedRegion(selectedItem);
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
                  <Text style={styles.textStyle}> {selectedItem}</Text>
                </View>
              );
            }}
          />
        </View>

        {props.newData.map((organisation) => (
          <View key={"listview" + organisation} style={styles.container}>
            <Text key={"name" + organisation} style={styles.textBoxName}>
              {data[organisation]["Name of Organisation"]}
            </Text>
            {data[organisation]["Address"] === "" ? null : (
              <Text key={"address" + organisation} style={styles.flexContainer}>
                <Ionicons style={styles.iconText} name="home" />
                <Text
                  style={styles.textBox}
                >{` ${data[organisation]["Address"]}`}</Text>
              </Text>
            )}
            <Text key={"region" + organisation} style={styles.flexContainer}>
              <Ionicons style={styles.iconText} name="location" />
              <Text style={styles.textBox}>
                {data[organisation]["Region"] === ""
                  ? `Worldwide`
                  : ` ${data[organisation]["Region"]}`}
              </Text>
            </Text>
            {data[organisation]["Web Address"] === "" ? null : (
              <Text key={"website" + organisation} style={styles.flexContainer}>
                <MaterialCommunityIcons style={styles.iconText} name="web" />
                <Text style={styles.textBox}>{` `}</Text>
                <Text
                  style={styles.textBoxWebsite}
                  onPress={() =>
                    Linking.openURL(data[organisation]["Web Address"])
                  }
                >
                  {data[organisation]["Web Address"]}
                </Text>
              </Text>
            )}
            {data[organisation]["Phone Number"] === ""
              ? null
              : data[organisation]["Phone Number"]
                  .split("/")
                  .map((num) => num.trim())
                  .map((num) => {
                    return (
                      <Text
                        key={"phone" + num}
                        style={styles.flexContainer}
                        onPress={() => makeCall(num)}
                      >
                        <FontAwesome style={styles.iconText} name="phone" />
                        <Text style={styles.textBox}>{` `}</Text>
                        <Text style={styles.textBoxPhone}>{`${num}`}</Text>
                      </Text>
                    );
                  })}
            <Pressable
              style={styles.nextButton}
              onPress={() => {
                props.navigation.navigate("OrganisationDetailsScreen", {
                  org: organisation,
                });
              }}
            >
              <Text style={styles.nextButtonText}>
                <FontAwesome style={styles.nextButtonText} name="angle-right" />
                <FontAwesome style={styles.nextButtonText} name="angle-right" />
              </Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};
export default OrganisationsLists;
