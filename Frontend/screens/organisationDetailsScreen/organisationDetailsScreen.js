import React from "react";
import { Text, ScrollView, Linking } from "react-native";
import data from "../../assets/jsonFiles/organisations.json";
import { StyleSheet, Dimensions, PixelRatio } from "react-native";
import normalize from "react-native-normalize";
import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
let partialHeight = 0.22 * height;
let bubbleWidth = 0.33 * width;
let bubbleSize = Math.round((bubbleWidth + partialHeight) / 2);

const OrganisationDetailsScreen = ({ route, navigation }) => {
  const organisationId = parseInt(Object.values(route.params));
  let focus = [];
  focus.push(data[organisationId]["Focus 1"]);
  focus.push(data[organisationId]["Focus 2"]);
  focus.push(data[organisationId]["Focus 3"]);
  focus.push(data[organisationId]["Focus 4"]);
  focus.push(data[organisationId]["Focus 5"]);
  focus.push(data[organisationId]["Focus 6"]);
  focus.push(data[organisationId]["Focus 7"]);
  focus.push(data[organisationId]["Focus 8"]);
  focus.push(data[organisationId]["Focus 9"]);
  focus.push(data[organisationId]["Focus 10"]);
  focus = focus.filter((focusElement) => {
    return focusElement;
  });

  return (
    <ScrollView style={[styles.container, styles.boxShadow]}>
      <Text style={styles.textBoxName}>
        {data[organisationId]["Name of Organisation"]}
      </Text>
      {data[organisationId]["Focus 1"] === "" ? null : (
        <Text key={"focus1" + organisationId} style={styles.flexContainer}>
          <MaterialIcons style={styles.iconText} name="center-focus-strong" />
          <Text style={styles.textBoxTitle}> Focus Areas:</Text>
          {focus.map((foc) => {
            return <Text style={styles.textBox}>{`\n- ${foc}`}</Text>;
          })}
        </Text>
      )}
      {data[organisationId]["Target Group"] === "" ? null : (
        <Text key={"targetGroup" + organisationId} style={styles.flexContainer}>
          <FontAwesome style={styles.iconText} name="group" />
          <Text style={styles.textBoxTitle}> Target Groups: </Text>
          <Text style={styles.textBox}>
            {`\n${data[organisationId]["Target Group"]}`}
          </Text>
        </Text>
      )}
      <Text key={"objective" + organisationId} style={styles.flexContainer}>
        <Feather style={styles.iconText} name="target" />

        <Text style={styles.textBoxTitle}> Objective: </Text>
        <Text style={styles.textBox}>
          {" "}
          {`\n${data[organisationId]["Objective"]}`}
        </Text>
      </Text>
      <Text key={"services" + organisationId} style={styles.flexContainer}>
        <FontAwesome5 style={styles.iconText} name="hands-helping" />
        <Text style={styles.textBoxTitle}> Services: </Text>
        <Text
          style={styles.textBox}
        >{`\n${data[organisationId]["Services"]}`}</Text>
      </Text>
      {data[organisationId]["Web Address"] === "" ? null : (
        <Text key={"website" + organisationId} style={styles.flexContainer}>
          <MaterialCommunityIcons style={styles.iconText} name="web" />
          <Text style={styles.textBox}>{` `}</Text>
          <Text
            style={styles.textBoxWebsite}
            onPress={() => Linking.openURL(data[organisationId]["Web Address"])}
          >
            {data[organisationId]["Web Address"]}
          </Text>
        </Text>
      )}
      {data[organisationId]["Phone Number"] === ""
        ? null
        : data[organisationId]["Phone Number"]
            .split("/")
            .map((num) => num.trim())
            .map((num) => {
              return (
                <Text
                  key={"phone" + organisationId}
                  style={styles.flexContainer}
                  onPress={() => {
                    if (Platform.OS === "android") {
                      Linking.openURL(`tel:${num.replace(/\D/g, "")}`);
                    } else {
                      Linking.openURL(`telprompt:${num.replace(/\D/g, "")}`);
                    }
                  }}
                >
                  <FontAwesome style={styles.iconText} name="phone" />
                  <Text style={styles.textBox}>{` `}</Text>
                  <Text style={styles.textBoxPhone}>{`${num}`}</Text>
                </Text>
              );
            })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boxShadow:
    Platform.OS === "ios"
      ? {
          shadowColor: "lightgray",
          shadowOffset: { width: 6, height: 6 },
          shadowOpacity: 0.5,
          shadowRadius: 8,
        }
      : {
          elevation: 10,
          shadowColor: "lightgray",
        },
  container: {
    flexGrow: 1,
    backgroundColor: "white",
    margin: 15,
    borderRadius: 5,
    overflow: "hidden",
  },
  textBoxName: {
    color: "#A169B1",
    fontSize: normalize(26),
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  textBox: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: normalize(18),
    marginRight: 10,
  },
  textBoxTitle: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: normalize(22),
    fontWeight: "bold",
  },
  textBoxWebsite: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: normalize(18),
    marginRight: 10,
    textDecorationLine: "underline",
    fontStyle: "italic",
  },
  textBoxPhone: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: normalize(18),
    marginRight: 10,
    textDecorationLine: "underline",
    fontStyle: "italic",
  },
  titleTextStyle: {
    fontFamily: "Roboto-Regular",
    color: "#A169B1",
    fontSize: normalize(25),
    margin: 25,
    textAlign: "center",
  },
  flexContainer: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    textAlign: "justify",
  },
  iconText: {
    color: "#A169B1",
    fontSize: normalize(20),
    fontWeight: "bold",
  },
});

export default OrganisationDetailsScreen;

export const callNumber = (phone) => {
  console.log("callNumber ----> ", phone);
  let phoneNumber = phone;
  if (Platform.OS !== "android") {
    phoneNumber = `telprompt:${phone}`;
  } else {
    phoneNumber = `tel:${phone}`;
  }
  Linking.canOpenURL(phoneNumber)
    .then((supported) => {
      if (!supported) {
        Alert.alert("Phone number is not available");
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch((err) => console.log(err));
};
