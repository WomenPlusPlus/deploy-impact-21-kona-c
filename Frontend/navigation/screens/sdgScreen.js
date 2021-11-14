import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  View,
  TouchableHighlight,
} from "react-native";
import normalize from "react-native-normalize";
import sdgs from "../../utils/sdgs";

const SdgScreen = ({ navigation }) => {
  const handlePress = (sdgId) => {
    navigation.navigate("SdgOrganisationsList", {
      sdgId: sdgId,
    });
  };

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <ScrollView style={styles.mainContainer}>
        <Text style={styles.titleTextStyle}>
          Choose one of the 17 goal and see organisations that can help!
        </Text>
        <View style={styles.container}>
          {sdgs.map((sdg) => (
            <View key={sdg.id} style={styles.buttonContainer}>
              <TouchableHighlight
                style={styles.button}
                onPress={() => {
                  handlePress(sdg.id);
                }}
              >
                <Image
                  resizeMode="contain"
                  source={sdg.image}
                  style={styles.image}
                />
              </TouchableHighlight>
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: "10%",
  },
  textBoxName: {
    color: "#A169B1",
    fontSize: normalize(22),
    padding: 8,
    textAlign: "center",
    fontWeight: "bold",
  },
  imageBackground: {
    height: "100%",
  },
  image: {
    width: 100,
    height: 100,
  },
  button: {
    backgroundColor: "white",
    width: 100,
    height: 100,
    margin: 5,
  },
  buttonText: {
    color: "#8A449D",
    fontSize: normalize(22),
  },
  buttonContainer: {
    margin: 8,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 50,
  },
  containerOrganisation: {
    flexGrow: 1,
    backgroundColor: "white",
    margin: 15,
    borderRadius: 5,
    overflow: "hidden",
    padding: "3%",
  },
  titleTextStyle: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: normalize(25),
    margin: 25,
    textAlign: "center",
  },
});

export default SdgScreen;
