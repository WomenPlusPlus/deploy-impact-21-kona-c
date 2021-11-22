import React from "react";
import { Text, ImageBackground, View, ScrollView } from "react-native";
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
        <View style={styles.flexContainer}>
          <View style={styles.containerParent}>
            <View style={styles.containerItem}>
              <View style={styles.container2}>
                <MaterialIcons name="local-police" style={styles.iconText} />
                <Text style={styles.textBoldStyle}> Police:</Text>
              </View>
            </View>
            <FontAwesome style={styles.iconText} name="phone" />
            <Text style={styles.textBoxPhone} onPress={() => makeCall("22117")}>
              {" "}
              22117
            </Text>
          </View>
          <View style={styles.containerParent}>
            <View style={styles.containerItem}>
              <View style={styles.container2}>
                <FontAwesome5 name="fire" style={styles.iconText} />
                <Text style={styles.textBoldStyle}> Fire:</Text>
              </View>
            </View>
            <FontAwesome style={styles.iconText} name="phone" />
            <Text style={styles.textBoxPhone} onPress={() => makeCall("22118")}>
              {" "}
              22118
            </Text>
          </View>
          <View style={styles.containerParent}>
            <View style={styles.containerItem}>
              <View style={styles.container2}>
                <FontAwesome5 name="hospital-symbol" style={styles.iconText} />
                <Text style={styles.textBoldStyle}> SOS Medicine:</Text>
              </View>
            </View>
            <FontAwesome style={styles.iconText} name="phone" />
            <Text
              style={styles.textBoxPhone}
              onPress={() => makeCall("(221)338891515")}
            >
              {" "}
              (221) 338891515
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default EmergencyScreen;
