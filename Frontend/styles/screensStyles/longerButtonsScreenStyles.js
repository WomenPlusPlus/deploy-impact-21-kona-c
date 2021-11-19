import { StyleSheet, Dimensions } from "react-native";
import normalize from "react-native-normalize";

const { width, height } = Dimensions.get("window");
let partialHeight = 0.22 * height;
let bubbleWidth = 0.33 * width;
let bubbleSize = Math.round((bubbleWidth + partialHeight) / 2);

export const styles = StyleSheet.create({
  container1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerD: {
    flexDirection: "column",
    alignItems: "center",
  },
  containerInput: {
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "1%",
    alignItems: "center",
  },
  circleButtonInput: {
    width: bubbleSize * 2.6,
    height: bubbleSize / 2.25,
    borderRadius: bubbleSize / 2,
    backgroundColor: "#E4C9E5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 2,
    paddingLeft: 8.5,
    paddingRight: 8,
    marginTop: 8,
  },
  
  textStyleInput: {
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    color: "#8A449D",
    paddingLeft: 70,
    fontSize: normalize(20),
  },
  textStyle: {
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    color: "white",
    fontSize: normalize(20),
  },
  titleTextStyle: {
    fontFamily: "Roboto-Regular",
    color: "#921CB1",
    fontSize: normalize(25),
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
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
    paddingLeft: 8.5,
    paddingRight: 8,
    marginTop: 8,
  },
  userImage: {
    fontSize: normalize(46),
    color: "white",
  },
  image: {
    height: height,
  },
});