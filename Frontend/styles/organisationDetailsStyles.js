import { StyleSheet, Dimensions } from "react-native";
let width = null;
if (Dimensions.get("window").width > 500) {
  width = 500;
} else {
  width = Dimensions.get("window").width;
}

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
    backgroundColor: "white",
    width: 0.93 * width,
    alignSelf: "center",
    borderRadius: 5,
    overflow: "hidden",
    padding: "3%",
    marginTop: 0.04 * width,
    marginBottom: 0.04 * width,
  },
  textBoxName: {
    color: "#A169B1",
    fontSize: 24,
    marginBottom: "10%",
    textAlign: "center",
    fontWeight: "bold",
  },
  textBox: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: 18,
  },
  textBoxTitle: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: 20,
    fontWeight: "bold",
  },
  textBoxWebsite: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: 18,
    textDecorationLine: "underline",
    fontStyle: "italic",
  },
  textBoxPhone: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: 18,
    textDecorationLine: "underline",
    fontStyle: "italic",
  },
  flexContainer: {
    flexDirection: "row",
    marginBottom: 0.04 * width,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "justify",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    paddingBottom: 0.02 * width
  },
  iconText: {
    color: "#A169B1",
    fontSize: 20,
    fontWeight: "bold",
  },
  backgroundImage: {
    height: "100%",
    width: width,
    alignSelf: "center",
  },
});
