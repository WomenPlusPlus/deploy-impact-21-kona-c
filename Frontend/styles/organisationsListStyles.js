import { StyleSheet, Dimensions } from "react-native";
let width = null;
if (Dimensions.get("window").width > 500) {
  width = 500;
} else {
  width = Dimensions.get("window").width;
}

export const styles = StyleSheet.create({
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
    color: "#921CB1",
    fontSize: 25,
    marginBottom: 0.03 * width,
    marginTop: 0.03 * width,
    textAlign: "center",
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
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
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
    color: "#921CB1",
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 5,
    width: 0.92 * width,
  },
  buttonDown: {
    color: "#921CB1",
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  dropdownicon: {
    color: "#921CB1",
  },
});
