import { StyleSheet, Dimensions } from "react-native";
let width = null;
let height = Dimensions.get("window").height;
if (Dimensions.get("window").width > 500) {
  width = 500;
} else {
  width = Dimensions.get("window").width;
}

export const styles = StyleSheet.create({
  mainContainerScroll: {
    height: height - width / 3,
  },
  mainContainer: {
    marginTop: "12%",
  },
  container: {
    backgroundColor: "#303030",
    width: 0.93 * width,
    borderRadius: 5,
    overflow: "hidden",
    padding: "3%",
    alignSelf: "center",
    marginTop: 0.04 * width,
    marginBottom: 0.02 * width,
    borderWidth: 2,
    borderColor: "gray",
  },
  textBoxName: {
    color: "#C2C4BE",
    fontSize: 22,
    padding: 0.03 * width,
    textAlign: "center",
    fontWeight: "bold",
  },
  textBox: {
    fontFamily: "Roboto-Regular",
    color: "#DCDCDC",
    fontSize: 20,
  },
  textBoxTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#DCDCDC",
  },
  textBoxWebsite: {
    fontFamily: "Roboto-Regular",
    color: "#5FAFE8",
    fontSize: 20,
    textDecorationLine: "underline",
    fontStyle: "italic",
  },
  textBoxPhone: {
    fontFamily: "Roboto-Regular",
    color: "#5FAFE8",
    fontSize: 20,
    fontStyle: "italic",
  },
  titleTextStyle: {
    fontFamily: "Roboto-Regular",
    color: "#DCDCDC",
    fontSize: 28,
    margin: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  notFoundTextStyle: {
    fontFamily: "Roboto-Regular",
    color: "#DCDCDC",
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
    width: "92%",
    height: 0.33 * width,
    alignSelf: "center",
    marginBottom: "5%",
    borderWidth: 2,
    borderColor: "gray",
    backgroundColor: "black",
  },
  nextButton: {
    color: "#DCDCDC",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  nextButtonLarge: {
    color: "#DCDCDC",
    flexDirection: "row",
    backgroundColor: "#141414",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "gray",
    margin: 0,
    width: "108%",
    height: 0.14 * width,
    marginBottom: "-3.5%"
  },
  nextButtonText: {
    color: "#DCDCDC",
    fontSize: 38,
    fontWeight: "bold",
    justifyContent: "center",
  },
  iconText: {
    color: "#DCDCDC",
    fontSize: 28,
  },
  textStyle: {
    color: "#DCDCDC",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#141414",
    alignSelf: "center",
    borderRadius: 5,
    width: 0.92 * width,
    height: 0.14 * width,
    borderWidth: 2,
    borderColor: "gray",
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
    color: "#DCDCDC",
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  dropdownicon: {
    color: "#DCDCDC",
  },
});
