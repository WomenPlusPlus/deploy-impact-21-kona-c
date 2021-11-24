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
  textTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 23,
    fontWeight: "bold",
    textShadowRadius: 10,
    alignSelf: "center",
    color: "white",
  },
  textButton: {
    fontFamily: "Roboto-Regular",
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  containerRoundMS: {
    flexDirection: "row",
    paddingLeft: 0.06 * width,
  },
  roundS: {
    width: 0.3 * width,
    height: 0.3 * width,
    borderRadius: 200,
    backgroundColor: "transparent",
    padding: 10,
    justifyContent: "center",
    marginLeft: "3%",
    borderWidth: 2,
    borderColor: "#474747",
  },
  roundM: {
    width: 0.4 * width,
    height: 0.4 * width,
    borderRadius: 200,
    backgroundColor: "transparent",
    justifyContent: "center",
    padding: 10,
    marginLeft: "4%",
    marginTop: "9%",
    borderWidth: 2,
    borderColor: "#474747",
  },
  roundXL: {
    width: 0.5 * width,
    height: 0.5 * width,
    borderRadius: 200,
    backgroundColor: "transparent",
    justifyContent: "center",
    padding: 7,
    marginLeft: "30%",
    borderWidth: 2,
    borderColor: "#474747",
    marginTop: 0.02 * width,
  },
  backgroundImage: {
    height: "100%",
    width: width,
    alignSelf: "center",
    borderWidth: 0,
    margin: 0,
    padding: 0
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
    backgroundColor: "black",
  },
  textStyle: {
    fontSize: 16,
    margin: 6,
    color: "white",
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
    borderColor: "white",
    backgroundColor: "#212121",
    borderWidth: 2,
    borderColor: "#474747",
  },
  dropdownIcon: {
    color: "white",
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
  startButton: {
    backgroundColor: "#40AE49",
    width: "45%",
    height: 0.16 * width,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    color: "white",
    fontSize: 22,
    width: 0.5 * width,
    padding: "2%",
    marginBottom: 0.05 * height,
    borderWidth: 2,
    borderColor: "#575757",
    fontWeight: "bold",
    borderRadius: 5,
  },
  bottomText: {
    fontFamily: "Roboto-Regular",
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
});
