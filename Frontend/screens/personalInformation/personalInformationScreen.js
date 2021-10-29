import { StylesContext } from "@material-ui/styles";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  View,
  Button,
  Alert,
} from "react-native";
import { styles } from "./personalInformationStyles";

const InfoScreen = () => {
  const handlePress = () =>
    console.log("i just clicked on the text and it prints this!");

  return (
    <SafeAreaView style={styles.container}>
      <Text>How old are you?!</Text>
<View style={styles.roundS}><Text>0 - 12</Text></View>
<View style={styles.roundM}><Text>0 - 12</Text></View>
<View style={styles.roundL}><Text>0 - 12</Text></View>
<View style={styles.roundXL}><Text>0 - 12</Text></View>
<View style={styles.roundXXL}><Text>0 - 12</Text></View>


      <StatusBar style="auto" />
      
      <Button
        color="orange"
        title="ClickMe"
        onPress={() =>
          Alert.prompt("my prompt title", "my prompt message", (text) =>
            console.log(text)
          )
        }
      />
    </SafeAreaView>
  );
};

export default InfoScreen;


