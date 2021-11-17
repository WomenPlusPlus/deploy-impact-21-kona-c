import { StyleSheet, Dimensions } from "react-native";
import normalize from "react-native-normalize";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  mainContainer: {
    marginTop: "10%",
  },
  container1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 16,
  },
  containerParent: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  containerItem: {
    flexBasis: "49%",
  },
  flexContainer: {
    flexGrow: 0.5,
    flexDirection: "column",
    backgroundColor: "white",
    margin: 15,
    borderRadius: 5,
    overflow: "hidden",
    padding: "1.5%",
  },
  container: {
    backgroundColor: "white",
    margin: 15,
    borderRadius: 5,
    overflow: "hidden",
    padding: "1.5%",
  },
  titleTextStyle: {
    fontFamily: "Roboto-Regular",
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
