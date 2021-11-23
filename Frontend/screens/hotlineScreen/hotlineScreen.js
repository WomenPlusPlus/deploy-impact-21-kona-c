import React from "react";
import { Text, ImageBackground, View, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "../../styles/hotlineScreenStyles";
import { makeCall } from "../../utils/makeCall";

const HotlineScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
        <ScrollView style={styles.mainContainer}>
          <View style={styles.container1}>
            <Text style={styles.titleTextStyle}>Organisations</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.textStyle}>
              Association des Jeunes pour le Developpement (AJD/PASTEEF)
            </Text>
            <View style={styles.container2}>
              <FontAwesome style={styles.iconText} name="phone" />
              <Text
                style={styles.textBoxPhone}
                onPress={() => makeCall("221338778798")}
              >
                {" "}
                (221) 338778798
              </Text>
            </View>
            <Text style={styles.textStyle}>{"\n"}Samu Social Sénégal</Text>
            <View style={styles.container2}>
              <FontAwesome style={styles.iconText} name="phone" />
              <Text
                style={styles.textBoxPhone}
                onPress={() => makeCall("221338602806")}
              >
                {" "}
                (221) 338602806
              </Text>
            </View>
          </View>
        </ScrollView>
    </ImageBackground>
  );
};
export default HotlineScreen;
