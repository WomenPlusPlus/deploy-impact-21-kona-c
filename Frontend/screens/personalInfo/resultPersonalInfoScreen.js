import React from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  Pressable,
  PixelRatio,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./stylesPInfo";
import UserData from "../../components/userData";

// this is a future feature where we return user data gathered from the personal information
// based on your answers, we found help for you
const ResultInfoScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {/* <UserData />  */}
          <Text>hello i am a new screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResultInfoScreen;
