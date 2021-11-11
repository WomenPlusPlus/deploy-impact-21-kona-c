import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  View,
  Pressable,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import normalize from "react-native-normalize";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import data from "../../assets/organisations.json";

const { width, height } = Dimensions.get("window");
let partialHeight = 0.22 * height;
let bubbleWidth = 0.33 * width;
let bubbleSize = Math.round((bubbleWidth + partialHeight) / 2);
const sdgs = [
  {
    id: 1,
    image: require("../../assets/E-WEB-Goal-01.png"),
    title: "1. No poverty",
  },
  {
    id: 2,
    image: require("../../assets/E-WEB-Goal-02.png"),
    title: "2. Zero hunger",
  },
  {
    id: 3,
    image: require("../../assets/E-WEB-Goal-03.png"),
    title: "3. Good health and well-being",
  },
  {
    id: 4,
    image: require("../../assets/E-WEB-Goal-04.png"),
    title: "4. Quality education",
  },
  {
    id: 5,
    image: require("../../assets/E-WEB-Goal-05.png"),
    title: "5. Gender equality",
  },
  {
    id: 6,
    image: require("../../assets/E-WEB-Goal-06.png"),
    title: "6. Clean water and sanitation",
  },
  {
    id: 7,
    image: require("../../assets/E-WEB-Goal-07.png"),
    title: "7. Affordable and clean energy",
  },
  {
    id: 8,
    image: require("../../assets/E-WEB-Goal-08.png"),
    title: "8. Decent work and economic growth",
  },
  {
    id: 9,
    image: require("../../assets/E-WEB-Goal-09.png"),
    title: "9. Industry, innovation and infrastructure",
  },
  {
    id: 10,
    image: require("../../assets/E-WEB-Goal-10.png"),
    title: "10. Reduced inequalities",
  },
  {
    id: 11,
    image: require("../../assets/E-WEB-Goal-11.png"),
    title: "11. Sustainable cities and communities",
  },
  {
    id: 12,
    image: require("../../assets/E-WEB-Goal-12.png"),
    title: "12.Responsible consumption and production",
  },
  {
    id: 13,
    image: require("../../assets/E-WEB-Goal-12.png"),
    title: "13. Climate action",
  },
  {
    id: 14,
    image: require("../../assets/E-WEB-Goal-14.png"),
    title: "14.Life below water",
  },
  {
    id: 15,
    image: require("../../assets/E-WEB-Goal-15.png"),
    title: "15. Life on land",
  },
  {
    id: 16,
    image: require("../../assets/E-WEB-Goal-16.png"),
    title: "16. Peace, justice and strong institutions",
  },
  {
    id: 17,
    image: require("../../assets/E-WEB-Goal-17.png"),
    title: "17. Partnerships for the goals",
  },
];

const SdgScreen = () => {
  let scrollYPos = 0;
  const [scroller, setScroller] = useState(0)
  const [sdgId, setSdgId] = useState(0);
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

  const handlePress = (sdgId) => {
    setSdgId(sdgId);
  };
  const scrollToOrg = () => {
    scrollYPos = height * 1;
    scroller.scrollTo({ x: 0, y: scrollYPos + height/3});
  };

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <ScrollView ref={(scroller) => {setScroller(scroller)}}>
        <Text style={styles.titleTextStyle}>
          Choose one of the 17 goal and see organisations that can help!
        </Text>
        <View style={styles.container}>
          {sdgs.map((sdg) => (
            <View style={styles.buttonContainer}>
              <TouchableHighlight
                style={styles.button}
                onPress={() => {
                  scrollToOrg();
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
        {newData.map((organisation) => (
          <View
            key={"listview" + organisation}
            style={styles.containerOrganisation}
          >
            <Text name="Org" key={"name" + organisation} style={styles.textBoxName}>
            {data[organisation]["Name of Organisation"]}
            </Text>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
