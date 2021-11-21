import { StyleSheet, Dimensions } from "react-native";
let height = Dimensions.get("window").height;
let width = null;
if (Dimensions.get("window").width > 500) {
  width = 500;
} else {
  width = Dimensions.get("window").width;
}

export const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontSize: 20,
  },
  titleTextStyle: {
    fontFamily: "Roboto-Regular",
    color: "#921CB1",
    fontSize: 25,
    margin: 25,
    textAlign: "center",
  },
  backgroundImage: {
    height: "100%",
    width: width,
    alignSelf: "center",
  },
  container1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  circleButton: {
    width: 0.96 * width,
    height: 0.17 * width,
    borderRadius: 200,
    backgroundColor: "#A169B1",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderColor: "white",
    borderWidth: 2,
    margin: 0.02 * width,
    paddingLeft: 8.5,
    paddingRight: 8,
  },
});
