import React from "react";
import { View } from "react-native";
import ComponentC from "../../components/screenComponents/screenCcomponents/cComponent";

const NeedsScreenC = ({ route, navigation }) => {

  return (
    <View>
      <ComponentC route={route} navigation={navigation} />
    </View>
  );
};

export default NeedsScreenC;
