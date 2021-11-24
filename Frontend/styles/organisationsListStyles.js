import { StyleSheet, Dimensions } from "react-native";
let width = null;
let height = Dimensions.get("window").height;
if (Dimensions.get("window").width > 500) {
  width = 500;
} else {
  width = Dimensions.get("window").width;
}

export const styles = StyleSheet.create({
  mainContainer: {
    height: height - width / 3,
  },
  container: {
    backgroundColor: "transparent",
    width: 0.93 * width,
    borderRadius: 5,
    overflow: "hidden",
    padding: "3%",
    alignSelf: "center",
    marginTop: 0.04 * width,
    marginBottom: 0.02 * width,
    borderWidth: 2,
    borderColor: "#474747",
  },
  textBoxName: {
    color: "white",
    fontSize: 22,
    padding: 0.03 * width,
    textAlign: "center",
    fontWeight: "bold",
  },
  textBox: {
    fontFamily: "Roboto-Regular",
    color: "white",
    fontSize: 20,
  },
  textBoxTitle: {
    fontFamily: "Roboto-Regular",
    color: "white",
    fontSize: 16,
  },
  textBoxWebsite: {
    fontFamily: "Roboto-Regular",
    color: "white",
    fontSize: 20,
    textDecorationLine: "underline",
    fontStyle: "italic",
  },
  textBoxPhone: {
    fontFamily: "Roboto-Regular",
    color: "white",
    fontSize: 20,
    textDecorationLine: "underline",
    fontStyle: "italic",
  },
  titleTextStyle: {
    fontFamily: "Roboto-Regular",
    color: "white",
    fontSize: 28,
    margin: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  notFoundTextStyle: {
    fontFamily: "Roboto-Regular",
    color: "white",
    fontSize: 28,
    margin: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  flexContainer: {
    marginBottom: 0.02 * width,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "transparent",
    borderBottomColor: "#202121",
    borderWidth: 2,
    paddingTop: 10,
    paddingBottom: 5,
  },
  backgroundImage: {
    height: "100%",
    width: width,
    alignSelf: "center",
  },
  image: {
    width: "23%",
    height: 0.23 * width,
    alignSelf: "center",
    marginBottom: "5%",
    borderWidth: 2,
    borderColor: "#474747",
    backgroundColor: "#474747",
  },
  nextButton: {
    color: "#A169B1",

    flexDirection: "row",
    justifyContent: "flex-end",
  },
  nextButtonText: {
    color: "white",
    fontSize: 38,
    fontWeight: "bold",
    justifyContent: "center",
  },
  iconText: {
    color: "#B0B0B0",
    fontSize: 28,
  },
  textStyle: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "transparent",
    alignSelf: "center",
    borderRadius: 5,
    width: 0.92 * width,
    height: 0.14 * width,
    borderWidth: 2,
    borderColor: "#474747",
    marginBottom: "3%",
  },
  dropdownRow: {
    backgroundColor: "#141414",
    alignSelf: "center",
    borderRadius: 5,
    width: 0.92 * width,
    height: 0.14 * width,
    borderWidth: 2,
    borderColor: "#474747",
  },
  dropdownStyle: {
    marginTop: -49,
    padding: 0,
    backgroundColor: "transparent",
  },
  buttonDown: {
    backgroundColor: "#141414",
    color: "white",
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  dropdownicon: {
    color: "white",
  },
});
