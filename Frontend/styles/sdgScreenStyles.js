import { StyleSheet, Dimensions } from "react-native";
let width = null;
if (Dimensions.get("window").width > 500) {
  width = 500;
} else {
  width = Dimensions.get("window").width;
}

export const styles = StyleSheet.create({
  textBoxName: {
    color: "#A169B1",
    fontSize: 22,
    padding: 8,
    textAlign: "center",
    fontWeight: "bold",
  },
  backgroundImage: {
    height: "100%",
    width: width,
    alignSelf: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  button: {
    backgroundColor: "white",
    width: 100,
    height: 100,
    margin: 5,
  },
  buttonText: {
    color: "#8A449D",
    fontSize: 22,
  },
  buttonContainer: {
    margin: 8,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 50,
  },
  containerOrganisation: {
    flexGrow: 1,
    backgroundColor: "white",
    margin: 15,
    borderRadius: 5,
    overflow: "hidden",
    padding: "3%",
  },
  titleTextStyle: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: 25,
    margin: 25,
    textAlign: "center",
  },
});