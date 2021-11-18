import React from "react";
import { Text, ScrollView, Linking } from "react-native";
import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";
import data from "../../assets/jsonFiles/organisations.json";
import { styles } from "../../styles/screensStyles/organisationDetailsStyles";
import { makeCall } from "../../utils/makeCall";

const OrganisationDetailsScreen = ({ route }) => {
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
            return <Text key={foc} style={styles.textBox}>{`\n- ${foc}`}</Text>;
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
                  key={"phone" + num}
                  style={styles.flexContainer}
                  onPress={() => makeCall(num)}
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

export default OrganisationDetailsScreen;
