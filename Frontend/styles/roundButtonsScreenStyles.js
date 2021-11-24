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
    color: "#DCDCDC",
    fontSize: 18,
    marginTop: "2%",
    fontWeight: "bold",
  },
  circleButton: {
    width: 0.28 * width,
    height: 0.28 * width,
    borderRadius: 200,
    backgroundColor: "black",
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
    color: "#DCDCDC",
    paddingBottom: "1%",
  },
  severalIconsButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  severalIconsText: {
    fontSize: 38,
    color: "#DCDCDC",
  },
  backgroundImage: {
    height: "100%",
    width: width,
    alignSelf: "center",
  },
});
