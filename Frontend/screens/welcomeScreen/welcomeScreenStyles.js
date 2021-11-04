import { black } from "ansi-colors";
import { StyleSheet, Dimensions, PixelRatio } from "react-native";
import normalize from "react-native-normalize";

const { width, height } = Dimensions.get("window");

let partialHeight = 0.25 * height;
let bubbleXLwidth = 0.75 * width;
let bubbleXL = Math.round((bubbleXLwidth + partialHeight) / 2);
let bubbleMwidth = 0.45 * width;
let bubbleM = Math.round((bubbleMwidth + partialHeight) / 2);
let bubbleSwidth = 0.3 * width;
let bubbleS = Math.round((bubbleSwidth + partialHeight) / 2);
let sizeS = bubbleS;
let sizeM = bubbleM;
let sizeXL = bubbleXL;

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    // alignItems: 'stretch',
    backgroundColor: "white",
    flex: 1,
  },
  image: {
    width: 100,
  },
  textTitle: {
    fontFamily: "Roboto",
    fontSize: normalize(23),
    fontWeight: "bold",
    textShadowRadius: 10,
    alignSelf: "center",
    color: "white",
  },
  textButton: {
    color: "white",
    textAlign: "center",
    fontSize: normalize(22),
  },
  textInfo: {
    fontSize: 100 / PixelRatio.getFontScale(),
    fontWeight: "normal",
    marginTop: 60,
    fontStyle: "italic",
  },
  roundS: {
    width: sizeS,
    height: sizeS,
    borderRadius: 100,
    padding: 11,
    justifyContent: "center",
    backgroundColor: "#A169B1",
    alignSelf: "flex-start",
    marginTop: -(1.3 * partialHeight),
    marginLeft: 0.1 * width,
    marginRight: (1 - bubbleS - 0.02) * width,
  },
  roundM: {
    width: sizeM,
    height: sizeM,
    borderRadius: 100,
    padding: 11,
    backgroundColor: "#A169B1",
    alignSelf: "flex-end",
    justifyContent: "center",
    marginLeft: (1 - bubbleM - 0.02) * width,
    marginRight: 0.05 * width,
    marginTop: "5%",
  },
  roundXL: {
    width: sizeXL,
    height: sizeXL,
    borderRadius: 200,
    padding: 13,
    alignSelf: "flex-end",
    backgroundColor: "#921CB1",
    elevation: 3,
    marginTop: 0.04 * height,
    marginRight: "8%",
    marginBottom: 0.015 * height,
    justifyContent: "center",
  },
  bottomText: {
    color: "#8A449D",
    textAlign: "center",
    alignSelf: "center",
    fontSize: normalize(22),
    marginTop: "25%",
    width: "50%",
  },
});
