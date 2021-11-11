import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  View,
  Pressable,
} from "react-native";
import normalize from "react-native-normalize";
import data from "../../assets/organisations.json";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const sdgs = [
  {
    id: 1,
    title: "1. No poverty",
  },
  {
    id: 2,
    title: "2. Zero hunger",
  },
  {
    id: 3,
    title: "3. Good health and well-being",
  },

  {
    id: 4,
    title: "4. Quality education",
  },
  {
    id: 5,
    title: "5. Gender equality",
  },
  {
    id: 6,
    title: "6. Clean water and sanitation",
  },
  {
    id: 7,
    title: "7. Affordable and clean energy",
  },
  {
    id: 8,
    title: "8. Decent work and economic growth",
  },
  {
    id: 9,
    title: "9. Industry, innovation and infrastructure",
  },
  {
    id: 10,
    title: "10. Reduced inequalities",
  },
  {
    id: 11,
    title: "11. Sustainable cities and communities",
  },
  {
    id: 12,
    title: "12. Responsible consumption and production",
  },
  {
    id: 13,
    title: "13. Climate action",
  },
  {
    id: 14,
    title: "14. Life below water",
  },
  {
    id: 15,
    title: "15. Life on land",
  },
  {
    id: 16,
    title: "16. Peace, justice and strong institutions",
  },
  {
    id: 17,
    title: "17. Partnerships for the goals",
  },
];

const SdgScreen = () => {
  const [sdgId, setSdgId] = useState(null);
  let newData = Object.keys(data).filter((orgId) => {
    for (let i = 0; i < data[orgId]["SDGs"].split(",").length; i++) {
      let a = data[orgId]["SDGs"].split(",").filter((n) => n)[i];
      if (a !== undefined) {
        if (parseInt(a.replace(/\D/g, "")) === sdgId) {
          return true;
        }
      }
    }
  });
  console.log(newData);

  const handlePress = (sdgId) => {
    setSdgId(sdgId);
  };

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={styles.image}
    >
      <ScrollView>
        {sdgs.map((sdg) => (
          <View style={styles.container}>
            <Pressable
              style={styles.button}
              onPress={() => handlePress(sdg.id)}
            >
              <Text style={styles.buttonText}>{sdg.title}</Text>
            </Pressable>
          </View>
        ))}
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

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    height: "100%",
  },
  button: {
    backgroundColor: "#E4C9E5",
    height: 50,
  },
  buttonText: {
    color: "#8A449D",
    fontSize: normalize(22),
  },
  buttonContainer: {
    marginBottom: 50,
  },
  container: {
    flexGrow: 1,
    margin: 8,
    borderRadius: 5,
    padding: "3%",
  },
});

export default SdgScreen;
