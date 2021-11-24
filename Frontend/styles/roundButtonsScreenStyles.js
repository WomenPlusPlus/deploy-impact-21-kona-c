import { StyleSheet, Dimensions } from "react-native";
let height = Dimensions.get("window").height;
let width = null;
if (Dimensions.get("window").width > 500) {
  width = 500;
} else {
  width = Dimensions.get("window").width;
}

export const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    width: width,
    height: "100%",
  },
  bubbleContainer: {
    marginBottom: "1.5%",
    width: 0.32 * width,
    flexDirection: "column",
    alignItems: "center",
  },
  container1: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  container2: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: "3%",
  },
  textStyle: {
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    color: "white",
    fontSize: 18,
    marginTop: "2%",
    fontWeight: "bold",
  },
  titleTextStyle: {
    fontFamily: "Roboto-Regular",
    color: "white",
    fontSize: 28,
    margin: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  circleButton: {
    width: 0.28 * width,
    height: 0.28 * width,
    borderRadius: 200,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginLeft: 0.01 * width,
    marginRight: 0.01 * width,
    borderWidth: 2,
    borderColor: "#474747",
  },
  userImage: {
    fontSize: 46,
    color: "white",
    paddingBottom: "1%",
  },
  severalIconsButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  severalIconsText: {
    fontSize: 38,
    color: "white",
  },
  backgroundImage: {
    height: "100%",
    width: width,
    alignSelf: "center",
  },
  text: {
    color: "black",
    fontSize: 14,
  },
});
