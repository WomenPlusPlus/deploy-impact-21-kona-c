import { StyleSheet, Dimensions } from "react-native";
let width = null;
let height = Dimensions.get("window").height ;
if (Dimensions.get("window").width > 500) {
  width = 500;
} else {
  width = Dimensions.get("window").width;
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#303030",
    width: 0.93 * width,
    borderRadius: 5,
    padding: "3%",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 0.04 * width,
    marginBottom: 0.01 * width,
    borderWidth: 1,
    borderColor: "gray",
  },
  textBoxName: {
    color: "#DCDCDC",
    fontSize: 24,
    padding: 0.03 * width,
    textAlign: "center",
    fontWeight: "bold",
  },
  textBox: {
    fontFamily: "Roboto-Regular",
    color: "#DCDCDC",
    fontSize: 18,
  },
  textBoxTitle: {
    fontFamily: "Roboto-Regular",
    color: "#DCDCDC",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 0.5 * width,
  },
  textBoxWebsite: {
    fontFamily: "Roboto-Regular",
    color: "#5FAFE8",
    fontSize: 20,
    textDecorationLine: "underline",
    fontStyle: "italic",
  },
  textBoxPhone: {
    fontFamily: "Roboto-Regular",
    color: "#5FAFE8",
    fontSize: 20,
    fontStyle: "italic",
  },
  flexContainer: {
    marginBottom: 0.02 * width,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "transparent",
    borderBottomColor: "#202121",
    borderWidth: 2,
    paddingTop: 10,
    paddingBottom: 5,
  },
  iconText: {
    color: "#3F7E44",
    fontSize: 24,
    fontWeight: "bold",
  },
  backgroundImage: {
    height: "100%",
    width: width,
    alignSelf: "center",
  },
  image: {
    width: 0.18 * width,
    height: 0.18 * width,
    margin: "2%",
    borderWidth: 2,
    borderColor: "gray",
    backgroundColor: "black",
  },
  sdgsImageContainer : {
    flexDirection: "row",
    flexWrap: "wrap",
  }
});
