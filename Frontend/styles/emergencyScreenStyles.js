import { StyleSheet, Dimensions } from "react-native";
let width = null;
if (Dimensions.get("window").width > 500) {
  width = 500;
} else {
  width = Dimensions.get("window").width;
}

export const styles = StyleSheet.create({
  mainContainer: {
    marginTop: "17%",
  },
  container1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  titleTextStyle: {
    fontFamily: "Roboto-Regular",
    color: "#DCDCDC",
    fontSize: 28,
    margin: "1%",
    textAlign: "center",
    fontWeight: "bold",
  },
  textBoldStyle: {
    fontFamily: "Roboto-Regular",
    color: "#5FAFE8",
    fontSize: 18,
    fontStyle: "italic",
  },
  iconText: {
    color: "#DCDCDC",
    fontSize: 18,
    paddingTop: "5%",
    textAlign: "center",
    textAlignVertical: "center"
  },
  mainIconText: {
    color: "#DCDCDC",
    fontSize: 42,
    textAlign: "center",
    textAlignVertical: "center",
  },
  backgroundImage: {
    height: "100%",
    width: width,
    alignSelf: "center",
  },
  roundLeftM: {
    width: 0.4 * width,
    height: 0.4 * width,
    borderRadius: 15,
    backgroundColor: "#141414",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2%",
    marginLeft: "8%",
    marginTop: "6%",
    borderWidth: 1,
    borderColor: "gray",
  },
  roundRightM: {
    width: 0.4 * width,
    height: 0.4 * width,
    borderRadius: 15,
    backgroundColor: "#141414",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2%",
    marginLeft: "5%",
    marginTop: "18%",
    borderWidth: 1,
    borderColor: "gray",
  },
  roundSingleM: {
    width: 0.4 * width,
    height: 0.4 * width,
    borderRadius: 15,
    backgroundColor: "#141414",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2%",
    marginLeft: "40%",
    marginTop: "10%",
    borderWidth: 1,
    borderColor: "gray",
  },
  roundContainer: {
    flexDirection: "row",
  },
  textMiddleStyle: {
    fontFamily: "Roboto-Regular",
    color: "#DCDCDC",
    fontSize: 18,
    textAlign: "center",
    marginBottom: "6%",
    marginTop: "2%"
  }
});
