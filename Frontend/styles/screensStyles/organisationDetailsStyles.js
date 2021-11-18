import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export const styles = StyleSheet.create({
 // boxShadow:
 //   Platform.OS === "ios"
 //     ? {
 //         shadowColor: "lightgray",
 //         shadowOffset: { width: 6, height: 6 },
 //         shadowOpacity: 0.5,
 //         shadowRadius: 8,
 //       }
 //     : {
 //         elevation: 10,
 //         shadowColor: "lightgray",
 //       },
  container: {
    flexGrow: 1,
    backgroundColor: "white",
    margin: 15,
    borderRadius: 5,
    overflow: "hidden",
  },
  textBoxName: {
    color: "#A169B1",
    fontSize: normalize(26),
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  textBox: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: normalize(18),
    marginRight: 10,
  },
  textBoxTitle: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: normalize(22),
    fontWeight: "bold",
  },
  textBoxWebsite: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: normalize(18),
    marginRight: 10,
    textDecorationLine: "underline",
    fontStyle: "italic",
  },
  textBoxPhone: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: normalize(18),
    marginRight: 10,
    textDecorationLine: "underline",
    fontStyle: "italic",
  },
  titleTextStyle: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: normalize(25),
    margin: 25,
    textAlign: "center",
  },
  flexContainer: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    textAlign: "justify",
  },
  iconText: {
    color: "#A169B1",
    fontSize: normalize(20),
    fontWeight: "bold",
  },
});
