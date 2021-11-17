import { StyleSheet, Dimensions } from "react-native";
import normalize from "react-native-normalize";
const { width, height } = Dimensions.get("window");
let partialHeight = 0.22 * height;
let bubbleWidth = 0.33 * width;
let bubbleSize = Math.round((bubbleWidth + partialHeight) / 2);

export const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontSize: 20,
  },
  titleTextStyle: {
    fontFamily: "Roboto-Regular",
    color: "#921CB1",
    fontSize: normalize(25),
    margin: 25,
    textAlign: "center",
  },
  image: {
    height: height,
  },
  container1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  circleButton: {
    width: bubbleSize * 2.6,
    height: bubbleSize / 2.25,
    borderRadius: bubbleSize / 2,
    backgroundColor: "#A169B1",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderColor: "white",
    borderWidth: 2,
    margin: bubbleSize / 35,
    paddingLeft: 8.5,
    paddingRight: 8,
  },
});
