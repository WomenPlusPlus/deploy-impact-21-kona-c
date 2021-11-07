import { StyleSheet, Dimensions } from "react-native";
import normalize from "react-native-normalize";

const { width, height } = Dimensions.get("window");
let partialHeight = 0.22 * height;
let bubbleWidth = 0.33 * width;
let bubbleSize = Math.round((bubbleWidth + partialHeight) / 2);

export const styles = StyleSheet.create({
  bubbleContainer: {},
  container1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "Roboto",
    color: "white",
    fontSize: normalize(20),
  },
  titleTextStyle: {
    fontFamily: "Roboto",
    color: "#921CB1",
    fontSize: normalize(25),
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  circleButton: {
    width: bubbleSize * 2.5,
    height: bubbleSize / 2.25,
    borderRadius: bubbleSize / 2,
    backgroundColor: "#A169B1",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderColor: "white",
    borderWidth: 2,
    margin: bubbleSize / 35,
    paddingLeft: 5,
    paddingRight: 5,
  },
  userImage: {
    fontSize: normalize(46),
    color: "white",
    paddingBottom: "1%",
  },
  image: {
    height: height,
  },
});
