import React from "react";
import { View } from "react-native";
import ComponentA from "../../components/screenComponents/screenAcomponents/aComponent";

const NeedsScreenA = ({ route, navigation }) => {
  return (
    <View>
      <ComponentA route={route} navigation={navigation} />
    </View>
  );
};

export default NeedsScreenA;
