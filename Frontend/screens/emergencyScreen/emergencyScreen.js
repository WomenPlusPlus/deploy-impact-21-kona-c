import React from "react";
import {
  Text,
  ImageBackground,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import { FontAwesome5, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { styles } from "../../styles/emergencyScreenStyles";
import { makeCall } from "../../utils/makeCall";

const EmergencyScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <ScrollView style={styles.mainContainer}>
        <View style={styles.container1}>
          <Text style={styles.titleTextStyle}>Emergency Numbers</Text>
        </View>
        <View style={styles.roundSingleM}
        >
          <Pressable onPress={() => makeCall("22117")}>
            <MaterialIcons name="local-police" style={styles.mainIconText} />
            <Text style={styles.textMiddleStyle}>Police</Text>
            <View style={styles.container2}>
              <FontAwesome style={styles.iconText} name="phone" />
              <Text style={styles.textBoldStyle}> 22117</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.roundContainer}>
          <View style={styles.roundLeftM}
          >
            <Pressable onPress={() => makeCall("22118")}>
              <FontAwesome5 name="fire" style={styles.mainIconText} />
              <Text style={styles.textMiddleStyle}>Fire</Text>
              <View style={styles.container2}>
                <FontAwesome style={styles.iconText} name="phone" />
                <Text style={styles.textBoldStyle}> 22118</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.roundRightM}
          >
            <Pressable onPress={() => makeCall("(221)338891515")}>
              <FontAwesome5
                name="hospital-symbol"
                style={styles.mainIconText}
              />
              <Text style={styles.textMiddleStyle}>SOS Medicine</Text>
              <View style={styles.container2}>
                <FontAwesome style={styles.iconText} name="phone" />
                <Text style={styles.textBoldStyle}> 338891515</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default EmergencyScreen;
