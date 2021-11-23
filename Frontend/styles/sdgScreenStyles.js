import { StyleSheet, Dimensions } from "react-native";
let width = null;
if (Dimensions.get("window").width > 500) {
  width = 500;
} else {
  width = Dimensions.get("window").width;
}

export const styles = StyleSheet.create({
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
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "black"
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
    color: "white",
    fontSize: 28,
    margin: 25,
    marginTop: 55,
    padding: 6,
    textAlign: "center",
    fontWeight: "bold"
  },
});
