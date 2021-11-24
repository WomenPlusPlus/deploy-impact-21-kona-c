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
    fontFamily: "Roboto-Regular",
    color: "#DCDCDC",
    fontSize: 19,
    fontWeight: "bold",
    alignSelf: "center",
    marginLeft: "19%",
    flexGrow: 1
  },
  textStyle: {
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    color: "#DCDCDC",
    fontSize: 19,
    fontWeight: "bold",
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
    margin: 0.02 * width,
    paddingLeft: 7,
    paddingRight: 7,
  },
  circleButtonInput: {
    width: 0.92 * width,
    height: 0.17 * width,
    borderRadius: 5,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#474747",
    margin: 0.01 * width,
    paddingLeft: 7,
    paddingRight: 3,
    marginLeft: 0.01 * width,
    marginRight: 0.01 * width,
  },
  userImage: {
    fontSize: 46,
    color: "#DCDCDC",
  },
  backgroundImage: {
    height: "100%",
    width: width,
    alignSelf: "center",
  },
});
