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
    marginTop: "15%",
  },
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    width: width,
    height: "100%",
  },
  bubbleContainer: {
    marginBottom: "5%",
    width: "33%",
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
    marginTop: "2%",
  },
  textStyle: {
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    color: "#DCDCDC",
    fontSize: 15,
    marginTop: 0.02 * width,
    fontWeight: "bold",
  },
  circleButton: {
    width: 0.29 * width,
    height: 0.29 * width,
    borderRadius: 5,
    backgroundColor: "#141414",
    justifyContent: "flex-start",
    padding: "3%",
    paddingTop: "10%",
    alignItems: "center",
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "gray",
  },
  squareButtonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  userImage: {
    fontSize: 40,
    color: "#DCDCDC",
  },
  severalIconsButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  severalIconsText: {
    fontSize: 40,
    color: "#DCDCDC",
  },
  backgroundImage: {
    height: "100%",
    width: width,
    alignSelf: "center",
  },
});
