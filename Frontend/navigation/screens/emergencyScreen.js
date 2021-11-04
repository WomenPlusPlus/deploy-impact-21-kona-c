import * as React from "react";
import { View, Text } from "react-native";

export default function EmergencyScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => alert('This is the "Emergency" screen.')}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Emergency Screen
      </Text>
    </View>
  );
}
