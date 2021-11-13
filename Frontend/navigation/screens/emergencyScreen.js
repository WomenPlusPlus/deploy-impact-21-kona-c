import React from "react";
import {
  Text,
  ImageBackground,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
  Linking,
  Platform,
} from "@expo/vector-icons";
import { styles } from "./emergencyScreenStyles";
import { makeCall } from "../../utils/makeCall";

const EmergencyScreen = ({ route, navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={styles.image}
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
export default EmergencyScreen;
