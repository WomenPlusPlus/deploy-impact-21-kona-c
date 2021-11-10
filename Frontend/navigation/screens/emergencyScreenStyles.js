import { StyleSheet, Dimensions, PixelRatio } from "react-native";
import normalize from "react-native-normalize";

const { width, height } = Dimensions.get("window");
let partialHeight = 0.22 * height;
let bubbleWidth = 0.33 * width;
let bubbleSize = Math.round((bubbleWidth + partialHeight) / 2);

export const styles = StyleSheet.create({
    container1: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    container2: {
        flexDirection: "row",
        flexWrap: "wrap",
      },
    containerParent: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
      },
    containerItem: {
        flexBasis: "50%",
    },
    flexContainer: {
        flexDirection: "column",
        paddingLeft: 10,
        paddingBottom: 10,
      },
    containerOrganisation: {
        flexDirection: "row",
        paddingLeft: 10,
        paddingBottom: 10,
        flexWrap: "wrap",
      },
    titleTextStyle: {
        fontFamily: "Roboto",
        color: "#921CB1",
        fontSize: normalize(25),
        marginTop: 20,
        marginBottom: 10,
        textAlign: "center",
        fontWeight: "bold",
      },
      textStyle: {
        fontFamily: "Roboto-Regular",
        color: "#921CB1",
        fontSize: normalize(22),
      },
      textSmallStyle: {
        fontFamily: "Roboto-Regular",
        color: "#921CB1",
        fontSize: normalize(20),
        flexWrap: "wrap",
      },
      textBoldStyle: {
        fontFamily: "Roboto-Regular",
        color: "#921CB1",
        fontSize: normalize(20),
        fontWeight: "bold",
      },
    userImage: {
        fontSize: normalize(26),
        color: "#921CB1",
        paddingBottom: "1%",
      },
    image: {
        height: height,
      },
});