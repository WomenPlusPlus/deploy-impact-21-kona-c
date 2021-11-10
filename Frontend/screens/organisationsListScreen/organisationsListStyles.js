import { StyleSheet, Dimensions, PixelRatio } from "react-native";
import normalize from "react-native-normalize";

const { width, height } = Dimensions.get("window");
let partialHeight = 0.22 * height;
let bubbleWidth = 0.33 * width;
let bubbleSize = Math.round((bubbleWidth + partialHeight) / 2);

export const styles = StyleSheet.create({
  mainContainer: {
    height: height,
  },
  container: {
    flexGrow: 1,
    backgroundColor: "white",
    margin: 15,
    borderRadius: 5,
    overflow: "hidden",
    padding: "3%",
  },
  textBoxName: {
    color: "#A169B1",
    fontSize: normalize(22),
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  textBox: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: normalize(20),
    marginRight: 10,
  },
  textBoxTitle: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: 16,
  },
  textBoxWebsite: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: normalize(20),
    marginRight: 10,
    textDecorationLine: "underline",
  },
  titleTextStyle: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: normalize(25),
    margin: 25,
    textAlign: "center",
  },
  flexContainer: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    height: "100%",
  },

  nextButton: {
    color: "#A169B1",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  nextButtonText: {
    color: "#A169B1",
    fontSize: normalize(38),
    fontWeight: "bold",
    justifyContent: "center",
  },
  iconText: {
    color: "#A169B1",
    fontSize: normalize(22),
  },
});
