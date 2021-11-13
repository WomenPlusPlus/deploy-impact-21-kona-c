import { StyleSheet, Dimensions } from "react-native";
import normalize from "react-native-normalize";

const { width, height } = Dimensions.get("window");
let partialHeight = 0.22 * height;
let bubbleWidth = 0.33 * width;
let bubbleSize = Math.round((bubbleWidth + partialHeight) / 2);

export const styles = StyleSheet.create({
  bubbleContainer: {
    height: "100%",
  },
  container1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "6%",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "6%",
  },
  textStyle: {
    width: bubbleSize / 1.3,
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    color: "#921CB1",
    fontSize: normalize(16),
    marginTop: "2%",
  },
  textBracketStyle: {
    width: bubbleSize / 1.5,
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    color: "#921CB1",
    fontSize: normalize(14),
    marginTop: "2%",
  },
  titleTextStyle: {
    fontFamily: "Roboto-Regular",
    color: "#921CB1",
    fontSize: normalize(25),
    marginTop: 15,
    textAlign: "center",
  },
  circleButton: {
    width: bubbleSize / 1.3,
    height: bubbleSize / 1.3,
    borderRadius: bubbleSize / 2,
    backgroundColor: "#A169B1",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderColor: "white",
    borderWidth: 2,
    marginLeft: bubbleSize / 38,
    marginRight: bubbleSize / 38,
  },
  userImage: {
    fontSize: normalize(46),
    color: "white",
    paddingBottom: "1%",
  },
  severalIconsButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  severalIconsText: {
    fontSize: normalize(38),
    color: "white",
  },
  image: {
    height: height,
  },
  text: {
    color: "black",
    fontSize: 14,
  },
});
