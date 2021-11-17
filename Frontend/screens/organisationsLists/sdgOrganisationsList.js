import React, { useState } from "react";
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
import data from "../../assets/jsonFiles/organisations.json";
import { styles } from "../../styles/screensStyles/organisationsListStyles";
import sdgsLarge from "../../utils/sdgsLarge";

const SdgOrganisationsList = ({ route, navigation }) => {
  let regionsArray = [];
  const sdgId = route.params["sdgId"];
  const [selectedRegion, setSelectedRegion] = useState("Worldwide");

  for (let i = 0; i < data.length; i++) {
    regionsArray.push(data[i]["Code_region"]);
  }

  let uniqueRegionsArray = [...new Set(regionsArray)];

  const newData = Object.keys(data).filter((orgId) => {
    for (
      let i = 0;
      i <
      data[orgId]["SDGs"]
        .replace(/[^0-9]/g, " ")
        .split(" ")
        .filter((n) => n).length;
      i++
    ) {
      if (
        parseInt(
          data[orgId]["SDGs"]
            .replace(/[^0-9]/g, " ")
            .split(" ")
            .filter((n) => n)[i]
        ) === sdgId
      ) {
        if (
          selectedRegion === "Worldwide" ||
          data[orgId]["Code_region"] === selectedRegion
        ) {
          return true;
        } else {
          return false;
        }
      }
    }
  });

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <ScrollView>
        <Image
          resizeMode="contain"
          source={sdgsLarge[sdgId - 1].image}
          style={styles.image}
        />
        {newData.length === 0 ? (
          <Text style={styles.notFoundTextStyle}>
            No organisations available for this goal
          </Text>
        ) : (
          <View>
            <Text style={styles.titleTextStyle}>
              List of organisations that could provide help
            </Text>
            <SelectDropdown
              buttonTextStyle={styles.textStyle}
              buttonStyle={styles.button}
              defaultButtonText={selectedRegion}
              renderDropdownIcon={() => {
                return (
                  <FontAwesome
                    name="chevron-down"
                    style={styles.dropdownicon}
                  />
                );
              }}
              dropdownIconPosition={"right"}
              data={uniqueRegionsArray}
              onSelect={(selectedItem, index) => {
                setSelectedRegion(selectedItem);
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
        )}
        {newData.map((organisation) => (
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
                        onPress={() => {
                          if (Platform.OS === "android") {
                            Linking.openURL(`tel:${num.replace(/\D/g, "")}`);
                          } else {
                            Linking.openURL(
                              `telprompt:${num.replace(/\D/g, "")}`
                            );
                          }
                        }}
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
                navigation.navigate("OrganisationDetailsScreen", {
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

export default SdgOrganisationsList;
