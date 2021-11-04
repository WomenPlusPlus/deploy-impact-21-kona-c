import * as React from "react";
import { View, Text } from "react-native";

export default function SearchScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => alert('This is the "Search" screen.')}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Search Screen
      </Text>
    </View>
  );
}
