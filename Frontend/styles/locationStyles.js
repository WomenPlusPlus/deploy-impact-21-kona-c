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
    marginTop: "10.5%",
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
    borderRadius: 15,
    backgroundColor: "#141414",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "gray",
    margin: 0.015 * width,
    paddingLeft: 7,
    paddingRight: 7,
  },
});
