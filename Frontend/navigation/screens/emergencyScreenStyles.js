import { StyleSheet, Dimensions, PixelRatio } from "react-native";
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
  container2: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  containerParent: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  containerItem: {
    flexBasis: "50%",
  },
  flexContainer: {
    flexGrow: 0.5,
    flexDirection: "column",
    backgroundColor: "white",
    margin: 15,
    borderRadius: 5,
    overflow: "hidden",
    padding: "2%",
  },
  container: {
    backgroundColor: "white",
    margin: 15,
    borderRadius: 5,
    overflow: "hidden",
    padding: "2%",
  },
  titleTextStyle: {
    fontFamily: "Roboto",
    color: "#921CB1",
    fontSize: normalize(25),
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  textStyle: {
    fontFamily: "Roboto-Regular",
    color: "#921CB1",
    fontSize: normalize(22),
  },
  textBoldStyle: {
    fontFamily: "Roboto-Regular",
    color: "#921CB1",
    fontSize: normalize(20),
    fontWeight: "bold",
  },
  textBoxPhone: {
    fontFamily: "Roboto-Regular",
    color: "#921CB1",
    fontSize: normalize(20),
    marginRight: 10,
    textDecorationLine: "underline",
    fontStyle: "italic",
  },
  iconText: {
    color: "#921CB1",
    fontSize: normalize(23),
    paddingTop: "1%",
  },
  image: {
    height: height,
  },
});