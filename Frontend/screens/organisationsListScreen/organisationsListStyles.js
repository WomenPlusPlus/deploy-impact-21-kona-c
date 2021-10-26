import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  boxShadow:
    Platform.OS === "ios"
      ? {
          shadowColor: "gray",
          shadowOffset: { width: 6, height: 6 },
          shadowOpacity: 0.5,
          shadowRadius: 15,
        }
      : {
          elevation: 20,
          shadowColor: "gray",
        },
  container: {
    flexGrow: 1,
    backgroundColor: "white",
    margin: 15,
    borderRadius: 20,
    overflow: "hidden",
  },
  textBoxName: {
    color: "black",
    fontSize: 20,
    padding: 10,
    fontWeight: "bold",
  },
  textBox: {
    color: "black",
    fontSize: 16,
    marginRight: 10,
  },
  textBoxTitle: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },

  flexContainer: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingBottom: 10,
  },
});
