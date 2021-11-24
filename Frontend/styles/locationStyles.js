import { StyleSheet, Dimensions } from "react-native";
let height = Dimensions.get("window").height;
let width = null;
if (Dimensions.get("window").width > 500) {
  width = 500;
} else {
  width = Dimensions.get("window").width;
}

export const styles = StyleSheet.create({
  mainContainer: {
    marginTop: "10%",
  },
  textStyle: {
    color: "#DCDCDC",
    fontSize: 19,
    fontWeight: "bold",
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
    width: 0.92 * width,
    height: 0.17 * width,
    borderRadius: 5,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderWidth: 2,
    borderColor: "#474747",
    margin: 0.015 * width,
    paddingLeft: 7,
    paddingRight: 7,
  },
});
