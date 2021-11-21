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
  },
  container1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerD: {
    flexDirection: "column",
    alignItems: "center",
  },
  containerInput: {
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "1%",
    alignItems: "center",
  },

  textStyleInput: {
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    color: "#8A449D",
    paddingLeft: 70,
    fontSize: 20,
  },
  textStyle: {
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    color: "white",
    fontSize: 20,
  },
  titleTextStyle: {
    fontFamily: "Roboto-Regular",
    color: "#921CB1",
    fontSize: 25,
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
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
    margin: 0.01 * width,
    paddingLeft: 8.5,
    paddingRight: 8,
  },
  circleButtonInput: {
    width: 0.96 * width,
    height: 0.17 * width,
    borderRadius: 200,
    backgroundColor: "#E4C9E5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 2,
    margin: 0.01 * width,
    paddingLeft: 8.5,
    paddingRight: 8,

    marginLeft: 0.01 * width,
    marginRight: 0.01 * width,
  },
  userImage: {
    fontSize: 46,
    color: "white",
  },
  backgroundImage: {
    height: "100%",
    width: width,
    alignSelf: "center",

  },
});
