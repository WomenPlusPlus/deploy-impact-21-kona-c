import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "deepskyblue",
      alignItems: "center",
      justifyContent: "center",
      justifyContent: "space-around",
    },
    containerButtons: {
      flexDirection: "row",
    },
    buttonPlus: {
      backgroundColor: "pink",
      borderBottomColor: "green",
      alignSelf: "flex-start",
      marginEnd: 10,
    },
    buttonMinus: {
      backgroundColor: "green",
      borderBottomColor: "green",
      alignSelf: "flex-end",
    },
    result: {
      alignItems: "center",
      borderWidth: 5,
      borderBottomLeftRadius: 20,
      backgroundColor: "white",
      // opacity: 10,
    },
    text: {
      fontFamily: "Cochin",
      fontSize: 20,
      fontWeight: "bold",
      color: "red",
      textDecorationColor: "yellow",
      textShadowColor: "black",
      textShadowRadius: 10,
      backgroundColor: "grey",
    },

  });