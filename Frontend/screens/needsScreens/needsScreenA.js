import React from "react";
import { View } from "react-native";
import Component1 from "../../components/screenComponents/screenAcomponents/aComponent1";

const NeedsScreenA = ({ route, navigation }) => {
  return (
    <View>
      <Component1 navigation={navigation} />
    </View>
  );
};

export default NeedsScreenA;
