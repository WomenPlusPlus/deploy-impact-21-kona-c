import React from "react";
import { View } from "react-native";
import ComponentB from "../../components/screenComponents/screenBcomponents/bComponent";

const NeedsScreenB = ({ route, navigation }) => {

  return (
    <View>
      <ComponentB route={route} navigation={navigation} />
    </View>
  );
};

export default NeedsScreenB;
