import React from "react";
import { View } from "react-native";
import ComponentA from "../../components/screenComponents/screenAcomponents/aComponent";

const NeedsScreenA = ({ route, navigation }) => {
  return (
    <View>
      <ComponentA navigation={navigation} />
    </View>
  );
};

export const styles = StyleSheet.create({
  bubblesContainer: {
  },
  container1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3%",
    paddingRight: "7%",
  },
  container1for2options: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: "30%",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2%",
    paddingLeft: "6%",
  },
  container2for2options: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2%",
    paddingLeft: "23%",
  },
  textStyle: {
    fontFamily: "Roboto-Regular",
    color: "white",
    fontSize: normalize(16),
    textAlign: "center",
  },
  titleTextStyle: {
    fontFamily: "Roboto-Regular",
    color: "#921CB1",
    fontSize: normalize(25),
    marginTop: 15,
    textAlign: "center",
  },
  circleButton: {
    width: bubbleSize / 1.18,
    height: bubbleSize / 1.18,
    borderRadius: bubbleSize / 2,
    backgroundColor: "#A169B1",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 14,
    marginLeft: 7,
    marginRight: 7,
    marginTop: 3

  },
  userImage: {
    fontSize: normalize(45),
    color: "white",
  },
  severalIconsButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  severalIconsText: {
    fontSize: normalize(40),
    color: "white",
  },
});

export default NeedsScreenA;
