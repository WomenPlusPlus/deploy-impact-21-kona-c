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
    backgroundColor: "white",
    width: 0.93 * width,
    borderRadius: 5,
    overflow: "hidden",
    padding: "3%",
    alignSelf: "center",
    marginTop: 0.04 * width,
    marginBottom: 0.02 * width,
  },
  textBoxName: {
    color: "#A169B1",
    fontSize: 22,
    padding: 0.03 * width,
    textAlign: "center",
    fontWeight: "bold",
  },
  textBox: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: 20,
  },
  textBoxTitle: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: 16,
  },
  textBoxWebsite: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: 20,
    textDecorationLine: "underline",
    fontStyle: "italic",
  },
  textBoxPhone: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: 20,
    textDecorationLine: "underline",
    fontStyle: "italic",
  },
  titleTextStyle: {
    fontFamily: "Roboto-Regular",
    color: "white",
    fontSize: 25,
    marginBottom: 0.06 * width,
    marginTop: 0.03 * width,
    textAlign: "center",
    fontWeight: "bold"
  },
  notFoundTextStyle: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: 25,
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 0.03 * width,
    marginBottom: 0.03 * width,
  },
  flexContainer: {
    marginBottom: 0.02 * width,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    marginBottom: "8%",
    borderWidth: 2,
    borderColor: "white"
  },
  nextButton: {
    color: "#A169B1",

    flexDirection: "row",
    justifyContent: "flex-end",
  },
  nextButtonText: {
    color: "#A169B1",
    fontSize: 38,
    fontWeight: "bold",
    justifyContent: "center",
  },
  iconText: {
    color: "#A169B1",
    fontSize: 22,
  },
  textStyle: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "black",
    alignSelf: "center",
    borderRadius: 5,
    width: 0.92 * width,
    borderWidth: 2,
    borderColor: "white",
    marginBottom: "3%",
  },
  dropdownRow: {
    backgroundColor: "black",
    alignSelf: "center",
    borderRadius: 5,
    width: 0.92 * width,
    borderWidth: 1,
    borderColor: "white",
  },
  dropdownStyle: {
    marginTop: -49,
    padding: 0,
    backgroundColor: "black"
  },
  buttonDown: {
    backgroundColor: "black",
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
