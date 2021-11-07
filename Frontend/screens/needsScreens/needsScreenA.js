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

export default NeedsScreenA;
