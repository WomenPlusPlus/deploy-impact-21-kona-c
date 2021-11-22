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
    marginTop: 0.01 * height
  },
  bubbleContainer: {
    margin: 0,
    width: 0.3 * width,
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2.5%",
  },
  container1: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: "3%",
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
    color: "#921CB1",
    fontSize: 16,
    marginTop: "1%",
  },
  titleTextStyle: {
    fontFamily: "Roboto-Regular",
    color: "#921CB1",
    fontSize: 25,
    marginTop: 15,
    textAlign: "center",
  },
  circleButton: {
    width: 0.28 * width,
    height: 0.28 * width,
    borderRadius: 200,
    backgroundColor: "#A169B1",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderColor: "white",
    borderWidth: 2,
    marginLeft: 0.01 * width,
    marginRight: 0.01 * width,
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
