import React from "react";
import { Text, ImageBackground, View, Pressable, FlatList } from "react-native";
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons,} from "@expo/vector-icons";
import { styles } from "./emergencyScreenStyles";

const EmergencyScreen = ({ route, navigation }) => {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container1}>
          <Text style={styles.titleTextStyle}>Emergency Numbers{"\n"}</Text>
        </View>
        <View style={styles.flexContainer}>
          <View style={styles.containerParent}> 
            <View style={styles.containerItem}>
              <View style={styles.container2}>
                <MaterialIcons
                    name="local-police"
                    style={styles.userImage}
                  />
                <Text style={styles.textBoldStyle}> Police:</Text>
              </View>
            </View>
            <Text style={styles.textStyle}>22117</Text>
          </View>
          <Text style={styles.textStyle}>{"\n"}</Text>
          <View style={styles.containerParent}> 
            <View style={styles.containerItem}>
              <View style={styles.container2}>
                <FontAwesome5 name="fire" style={styles.userImage} />
                <Text style={styles.textBoldStyle}>  Fire:</Text>
              </View>
            </View>
            <Text style={styles.textStyle}>22118</Text>
          </View>
          <Text style={styles.textStyle}>{"\n"}</Text>
          <View style={styles.containerParent}> 
            <View style={styles.containerItem}>
              <View style={styles.container2}>
                <FontAwesome5 name="hospital-symbol" style={styles.userImage} />
                <Text style={styles.textBoldStyle}>  SOS Medicine:</Text>
              </View>
            </View>
            <Text style={styles.textStyle}>(221)338891515</Text>
          </View>
        </View>
        <View style={styles.container1}>
          <Text style={styles.titleTextStyle}>{"\n\n\n\n"}Organisations{"\n"}</Text>
        </View>
        <View style={styles.flexContainer}>
          <Text style={styles.textStyle}>{"\t\t"}Association des Jeunes pour le Developpement (AJD/PASTEEF)</Text>
          <View style={styles.container2}>
            <FontAwesome5 name="phone-alt" style={styles.userImage} />
            <Text style={styles.textBoldStyle}> 221338778798</Text> 
          </View>
          <Text style={styles.textStyle}>{"\n"}</Text>
          <Text style={styles.textStyle}>{"\t\t"}Samu Social Sénégal</Text>
            <View style={styles.container2}>
              <FontAwesome5 name="phone-alt" style={styles.userImage} />
              <Text style={styles.textBoldStyle}> 221338602806</Text> 
            </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default EmergencyScreen;
