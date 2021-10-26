import React from "react";
import { View, Text, Button } from "react-native";

//this is currently not used anymore in the App. js

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="go to the Details...again"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go to Home" onPress={() => navigation.push("Home")} />
      {/* navigation.popToTop(), which goes back to the first screen in the stack */}
    </View>
  );
};

export default DetailsScreen;
