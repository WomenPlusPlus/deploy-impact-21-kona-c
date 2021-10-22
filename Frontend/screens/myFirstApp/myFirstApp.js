import { StylesContext } from "@material-ui/styles";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";

const PromptMessage = () => {
  const handlePress = () =>
    console.log("i just clicked on the text and it prints this!");
  // let x = 1;
  // console.log('ap executed') //remove console logs in production. to only use console log during development. not in production

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      {/* the object on the right overrides the properties of the object on the left */}
      {/* // <SafeAreaView style={styles.container}> */}
      {/* // one of the benefits of using StyleSheet.create is that we have an error message if something is misspeled etc. but other ways would do to, they just don't return any info and don't work if there is some error
      // <SafeAreaView style={{backgroundColor:'pink'}}>
      // <SafeAreaView style={containerStyle}> */}

      <Text numberOfLines={4} onPress={handlePress}>
        {" "}
        Hello World!Here I am i therefore i am writingl mmasfmn lalalalksf
        lkasmf alkdf mmasfmn lalalalksf lkasmf alkdf mmasfmn lalalalksf lkasmf
        alkdf mmasfmn lalalalksf lkasmf alkdf mmasf lalalalksf lkasmf alkdf
        mmasf njn
      </Text>

      <TouchableHighlight onPress={() => console.log("image tapped")}>
        <Image
          source={{
            width: 300,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
          // blurRadius={3}
        />
      </TouchableHighlight>

      <StatusBar style="auto" />
      <Text>Hello, we are connected dots!</Text>
      <Button
        color="orange"
        title="ClickMe"
        // onPress={()=>alert('I just clicked a button!')}
        // onPress={()=>Alert.alert(
        //   'Yuppi jej title',
        //   'it is a message',
        //   [{text:'Yes', onPress: ()=> console.log('yes')},
        //   {text:'No', onPress: () => console.log('no')}] ) }
        onPress={() =>
          Alert.prompt("my prompt title", "my prompt message", (text) =>
            console.log(text)
          )
        }
      />
    </SafeAreaView>
  );
};

export default PromptMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});

const containerStyle = { backgroundColor: "pink" };
