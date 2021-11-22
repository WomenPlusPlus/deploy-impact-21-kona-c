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
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  container: {
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  textTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 23,
    fontWeight: "bold",
    textShadowRadius: 10,
    alignSelf: "center",
    color: "white",
  },
  textButton: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
  },
  textInfo: {
    fontSize: 22,
    fontWeight: "normal",
    fontStyle: "italic",
  },
  containerRoundMS: {
    flexDirection: "row",
    paddingLeft: 0.06 * width,
  },
  containerRoundXL: {
    flexDirection: "row",
    paddingTop: 0.01 * width,
  },
  roundS: {
    width: 0.35 * width,
    height: 0.35 * width,
    borderRadius: 200,
    backgroundColor: "#A169B1",
    padding: 10,
    justifyContent: "center",
    marginLeft: "3%",
    borderWidth: 2,
    borderColor: "white",
  },
  roundM: {
    width: 0.44 * width,
    height: 0.44 * width,
    borderRadius: 200,
    backgroundColor: "#A169B1",
    justifyContent: "center",
    padding: 10,
    marginLeft: "4%",
    marginTop: "10%",
    borderWidth: 2,
    borderColor: "white",
  },
  roundXL: {
    width: 0.58 * width,
    height: 0.58 * width,
    borderRadius: 200,
    backgroundColor: "#8A449D",
    justifyContent: "center",
    padding: 10,
    marginLeft: "30%",
    borderWidth: 2,
    borderColor: "white",
  },
  bottomText: {
    color: "#921CB1",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 18,
    width: 0.5 * width,
    marginBottom: 0.1 * width,
  },
  backgroundImage: {
    height: "100%",
    width: width,
    alignSelf: "center",
  },
  image: {
    width: 22,
    height: 15,
  },
  imageTop: {
    width: 22,
    height: 15,
    marginRight: -10,
  },
  dropdownMainContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 100,
    marginLeft: 10,
  },
  dropdownStyle: {
    marginTop: -49,
    marginLeft: -18,
    padding: 0,
  },
  textStyle: {
    fontSize: 16,
    margin: 6,
  },
  button: {
    width: 75,
    height: 30,
    backgroundColor: "transparent",
    margin: 0,
    textAlign: "left",
  },
  rowStyle: {
    width: 70,
    height: 30,
    borderColor: "#921CB1",
  },
  dropdownIcon: {
    color: "#921CB1",
    fontSize: 16,
    margin: 0,
    padding: 0,
  },
  buttonDown: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9,
  },
});
