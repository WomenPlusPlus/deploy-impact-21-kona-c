import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export const styles = StyleSheet.create({
  mainContainer: {
    marginTop: "10%",
  },
  textBoxName: {
    color: "#A169B1",
    fontSize: normalize(22),
    padding: 8,
    textAlign: "center",
    fontWeight: "bold",
  },
  imageBackground: {
    height: "100%",
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
    fontSize: normalize(22),
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
    fontSize: normalize(25),
    margin: 25,
    textAlign: "center",
  },
});
