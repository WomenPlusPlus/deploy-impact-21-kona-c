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
  Image,
  View,
  Pressable,
} from "react-native";
import normalize from "react-native-normalize";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import data from "../../assets/organisations.json";

const sdgs = [
  {
    id: 1,
    image: require("../../assets/E-WEB-Goal-01.png"),
  },
  {
    id: 2,
    image: require("../../assets/E-WEB-Goal-02.png"),
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
        <View style={styles.container}>
          {sdgs.map((sdg) => (
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.button}
                onPress={() => handlePress(sdg.id)}
              >
                <Image
                  resizeMode="contain"
                  source={sdg.image}
                  style={styles.im}
                />
              </Pressable>
            </View>
          ))}
        </View>
        {newData.map((organisation) => (
          <View key={"listview" + organisation} style={styles.container}>
            <Text key={"name" + organisation} style={styles.textBoxName}>
              {data[organisation]["Name of Organisation"]}
            </Text>
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
  im: {
    height: 70,
    width: 70,
  },
  button: {
    backgroundColor: "white",
    height: 70,
    width: 70,
  },
  buttonText: {
    color: "#8A449D",
    fontSize: normalize(22),
  },
  buttonContainer: {
    alignItems: "center",
    margin: 8,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default SdgScreen;
