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
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "space-between",
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
    fontStyle: "italic",
  },
  containerRoundMS: {
    flexDirection: "row",
  },
  roundS: {
    width: sizeS,
    height: sizeS,
    borderRadius: 100,
    backgroundColor: "#A169B1",
    padding: 10,
    justifyContent: "center",
    marginLeft: "3%",
    borderWidth: 2,
    borderColor: "white",
  },
  roundM: {
    width: sizeM,
    height: sizeM,
    borderRadius: 100,
    backgroundColor: "#A169B1",
    justifyContent: "center",
    padding: 10,
    marginLeft: "4%",
    marginTop: "8%",
    borderWidth: 2,
    borderColor: "white",
  },
  containerRoundXL: {
    marginTop: "3%",
  },
  roundXL: {
    width: sizeXL,
    height: sizeXL,
    borderRadius: 200,
    backgroundColor: "#8A449D",
    justifyContent: "center",
    padding: 10,
    marginLeft: "30%",
    borderWidth: 2,
    borderColor: "white",
  },
  bottomText: {
    color: "#921CB1",
    textAlign: "center",
    alignSelf: "center",
    fontSize: normalize(18),
    width: "50%",
    marginTop: "8%",
  },
  image: {
    height: height,
  },
});
