import { StyleSheet, Dimensions } from "react-native";
let width = null;
if (Dimensions.get("window").width > 500) {
  width = 500;
} else {
  width = Dimensions.get("window").width;
}

export const styles = StyleSheet.create({
  mainContainer: {
    marginTop: "15%",
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
    color: "#DCDCDC",
    fontSize: 18,
    fontWeight: "bold",
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
    width: 0.43 * width,
    height: 0.43 * width,
    borderRadius: 200,
    backgroundColor: "transparent",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2%",
    marginLeft: "8%",
    marginTop: "-2%",
    borderWidth: 2,
    borderColor: "#474747",
  },
  roundRightM: {
    width: 0.43 * width,
    height: 0.43 * width,
    borderRadius: 200,
    backgroundColor: "transparent",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2%",
    marginLeft: "5%",
    marginTop: "10%",
    borderWidth: 2,
    borderColor: "#474747",
  },
  roundSingleM: {
    width: 0.43 * width,
    height: 0.43 * width,
    borderRadius: 200,
    backgroundColor: "transparent",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2%",
    marginLeft: "40%",
    marginTop: "10%",
    borderWidth: 2,
    borderColor: "#474747",
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
