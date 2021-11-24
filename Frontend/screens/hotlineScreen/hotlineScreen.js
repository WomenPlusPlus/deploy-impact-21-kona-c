import React from "react";
import {
  Text,
  ImageBackground,
  View,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { styles } from "../../styles/organisationsListStyles";
import { makeCall } from "../../utils/makeCall";
import data from "../../assets/jsonFiles/organisations.json";

const HotlineScreen = ({ navigation }) => {
  let newData = [];
  let newDataIndex = [];
  for (let i = 0; i < data.length; i++) {
    if (
      data[i]["Name of Organisation"] === "Samu Social Sénégal" ||
      data[i]["Name of Organisation"] ===
        "Association des Jeunes pour le Developpement (AJD/PASTEEF)"
    ) {
      newData.push(data[i]);
      newDataIndex.push(i);
    }
  }
  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <ScrollView style={styles.mainContainer}>
      <View>
          <Text style={styles.titleTextStyle}>Hotlines</Text>
        </View>
        {newData.map((organisation) => (
          <View
            key={"listview" + organisation["Name of Organisation"]}
            style={styles.container}
          >
            <Text
              key={"name" + organisation["Name of Organisation"]}
              style={styles.textBoxName}
            >
              {organisation["Name of Organisation"]}
            </Text>
            {organisation["Web Address"] === "" ? null : (
              <Text
                key={"website" + organisation["Name of Organisation"]}
                style={styles.flexContainer}
              >
                <MaterialCommunityIcons style={styles.iconText} name="web" />
                <Text style={styles.textBox}>{` `}</Text>
                <Text
                  style={styles.textBoxWebsite}
                  onPress={() => Linking.openURL(organisation["Web Address"])}
                >
                  {organisation["Web Address"]}
                </Text>
              </Text>
            )}
            {organisation["Email"] === "" ? null : (
              <Text
                key={"email" + organisation["Name of Organisation"]}
                style={styles.flexContainer}
              >
                <MaterialCommunityIcons style={styles.iconText} name="email" />
                <Text style={styles.textBox}>{` `}</Text>
                <Text
                  style={styles.textBoxWebsite}
                  onPress={() =>
                    Linking.openURL(`mailto:${organisation["Email"]}`)
                  }
                >
                  {organisation["Email"]}
                </Text>
              </Text>
            )}
            {organisation["Phone Number"] === ""
              ? null
              : organisation["Phone Number"]
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
              style={styles.nextButtonLarge}
              onPress={() => {
                if (
                  organisation["Name of Organisation"] === "Samu Social Sénégal"
                ) {
                  navigation.navigate("OrganisationDetailsScreen", {
                    org: 63,
                  });
                } else if (
                  organisation["Name of Organisation"] ===
                  "Association des Jeunes pour le Developpement (AJD/PASTEEF)"
                ) {
                  navigation.navigate("OrganisationDetailsScreen", {
                    org: 8,
                  });
                }
              }}
            >
              <Text style={styles.textBoxName}>More info</Text>
              <FontAwesome style={styles.nextButtonText} name="angle-right" />
              <FontAwesome style={styles.nextButtonText} name="angle-right" />
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};
export default HotlineScreen;
