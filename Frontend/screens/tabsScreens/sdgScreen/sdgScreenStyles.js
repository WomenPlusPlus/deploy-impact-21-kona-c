import {
    StyleSheet,  } from "react-native";
    import normalize from "react-native-normalize";

const styles = StyleSheet.create({
    mainContainer: {
      marginTop: "10%",
    },
    imageBackground: {
      height: "100%",
    },

    button: {
      backgroundColor: "white",
      width: 100,
      height: 100,
      margin: 5,
    },

    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      marginBottom: 50,
    },
    titleTextStyle: {
      fontFamily: "Roboto-Regular",
      color: "#A169B1",
      fontSize: normalize(25),
      margin: 25,
      textAlign: "center",
    },
  });