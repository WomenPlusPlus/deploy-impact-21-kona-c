import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Pressable,
  Linking,
  ImageBackground,
} from "react-native";
import data from "../../assets/organisations.json";
import { styles } from "./organisationsListStyles";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const OrganisationsListScreen = ({ route, navigation }) => {
  const [selectedRegion, setSelectedRegion] = useState(
    route.params["selectedRegion"]
  );
  const selectedGender = route.params["selectedGender"];
  const selectedAge = route.params["selectedAge"];
  const selectedPersonType = route.params["selectedPersonType"];
  const SDG_Id = route.params["SDG_Id"].split(",");

  let newData = Object.keys(data).filter((orgId) => {
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
        data[orgId]["SDGs"]
          .replace(/[^0-9]/g, " ")
          .split(" ")
          .filter((n) => n)[i] === SDG_Id[0] ||
        SDG_Id[1]
      ) {
        if (
          (selectedRegion === "Worldwide" ||
            data[orgId]["Code_region"] === selectedRegion) &&
          data[orgId]["Age Category"].includes(selectedAge)
        ) {
          if (selectedAge === "E" || "A") {
            return data[orgId]["Gender"].includes(selectedGender);
          } else {
            return true;
          }
        } else {
          return false;
        }
      }
    }
  });
  if (newData.length === 0) {
    setSelectedRegion("Worldwide");
  }
  // Make list random
  for (let i = newData.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let newDataElement = newData[i];
    newData[i] = newData[j];
    newData[j] = newDataElement;
  }
  // Filter by "refugge" on Target Group and put those first on the list
  for (let i = 0; i < newData.length; i++) {
    if (
      data[newData[i]]["Target Group"]
        .toLowerCase()
        .includes(selectedPersonType)
    ) {
      let element = newData[i];
      newData.splice(i, 1);
      newData.splice(0, 0, element);
    }
  }

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={styles.image}
    >
      <ScrollView>
        <Text style={styles.titleTextStyle}>
          List of organisations that could provide help
        </Text>
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
                <Text
                  style={styles.textBoxWebsite}
                  onPress={() =>
                    Linking.openURL(data[organisation]["Web Address"])
                  }
                >
                  {` ${data[organisation]["Web Address"]}`}
                </Text>
              </Text>
            )}
            {data[organisation]["Phone Number"] === ""
              ? null
              : data[organisation]["Phone Number"]
                  .split("/")
                  .map((num) => num.trim())
                  .map((num) => {
                    console.log(num);
                    return (
                      <Text
                        key={"phone" + organisation}
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
                        <Text style={styles.textBoxWebsite}>{` ${num}`}</Text>
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

export default OrganisationsListScreen;
