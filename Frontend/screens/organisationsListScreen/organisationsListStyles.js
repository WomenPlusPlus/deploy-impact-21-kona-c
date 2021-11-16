import { StyleSheet, Dimensions, PixelRatio } from "react-native";
import normalize from "react-native-normalize";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  mainContainer: {
    height: height,
  },
  container: {
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
    fontStyle: "italic",
  },
  textBoxPhone: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: normalize(20),
    marginRight: 10,
    textDecorationLine: "underline",
    fontStyle: "italic",
  },
  titleTextStyle: {
    fontFamily: "Roboto-Regular",
    color: "#921CB1",
    fontSize: normalize(25),
    marginBottom: 15,
    marginTop: 10,
    textAlign: "center",
  },
  notFoundTextStyle: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: normalize(25),
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 150,
  },
  flexContainer: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageBackground: {
    height: "100%",
  },
  image: {
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: -22,
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
  textStyle: {
    color: "#921CB1",
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 5,
    width: "93%",
  },
  buttonDown: {
    color: "#921CB1",
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  dropdownicon: {
    color: "#921CB1",
  },
});
