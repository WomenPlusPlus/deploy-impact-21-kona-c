import React from "react";
import { Text, ScrollView, Linking } from "react-native";
import data from "../../assets/organisations.json";
import { StyleSheet } from "react-native";

const OrganisationDetailsScreen = ({ route, navigation }) => {
  const organisationId = parseInt(Object.values(route.params));

  return (
    <ScrollView style={[styles.container, styles.boxShadow]}>
      <Text style={styles.textBoxName}>
        {data[organisationId]["Name of Organisation"]}
      </Text>
      <Text key={"objective" + organisationId} style={styles.flexContainer}>
        <Text style={styles.textBoxTitle}>{"\n"}Objective: </Text>
        <Text style={styles.textBox}>{data[organisationId]["Objective"]}</Text>
      </Text>
      <Text key={"services" + organisationId} style={styles.flexContainer}>
        <Text style={styles.textBoxTitle}>Services: </Text>
        <Text style={styles.textBox}>{data[organisationId]["Services"]}</Text>
      </Text>
      {data[organisationId]["Focus 1"] === "" ? null : (
        <Text key={"focus1" + organisationId} style={styles.flexContainer}>
          <Text style={styles.textBoxTitle}>Focus 1: </Text>
          <Text style={styles.textBox}>{data[organisationId]["Focus 1"]}</Text>
        </Text>
      )}
      {data[organisationId]["Focus 2"] === "" ? null : (
        <Text key={"focus2" + organisationId} style={styles.flexContainer}>
          <Text style={styles.textBoxTitle}>Focus 2: </Text>
          <Text style={styles.textBox}>{data[organisationId]["Focus 2"]}</Text>
        </Text>
      )}
      {data[organisationId]["Focus 3"] === "" ? null : (
        <Text key={"focus3" + organisationId} style={styles.flexContainer}>
          <Text style={styles.textBoxTitle}>Focus 3: </Text>
          <Text style={styles.textBox}>{data[organisationId]["Focus 3"]}</Text>
        </Text>
      )}
      {data[organisationId]["Focus 4"] === "" ? null : (
        <Text key={"focus4" + organisationId} style={styles.flexContainer}>
          <Text style={styles.textBoxTitle}>Focus 4: </Text>
          <Text style={styles.textBox}>{data[organisationId]["Focus 4"]}</Text>
        </Text>
      )}
      {data[organisationId]["Focus 5"] === "" ? null : (
        <Text key={"focus5" + organisationId} style={styles.flexContainer}>
          <Text style={styles.textBoxTitle}>Focus 5: </Text>
          <Text style={styles.textBox}>{data[organisationId]["Focus 5"]}</Text>
        </Text>
      )}
      {data[organisationId]["Focus 6"] === "" ? null : (
        <Text key={"focus6" + organisationId} style={styles.flexContainer}>
          <Text style={styles.textBoxTitle}>Focus 6: </Text>
          <Text style={styles.textBox}>{data[organisationId]["Focus 6"]}</Text>
        </Text>
      )}
      {data[organisationId]["Focus 7"] === "" ? null : (
        <Text key={"focus7" + organisationId} style={styles.flexContainer}>
          <Text style={styles.textBoxTitle}>Focus 7: </Text>
          <Text style={styles.textBox}>{data[organisationId]["Focus 7"]}</Text>
        </Text>
      )}
      {data[organisationId]["Focus 8"] === "" ? null : (
        <Text key={"focus8" + organisationId} style={styles.flexContainer}>
          <Text style={styles.textBoxTitle}>Focus 8: </Text>
          <Text style={styles.textBox}>{data[organisationId]["Focus 8"]}</Text>
        </Text>
      )}
      {data[organisationId]["Focus 9"] === "" ? null : (
        <Text key={"focus9" + organisationId} style={styles.flexContainer}>
          <Text style={styles.textBoxTitle}>Focus 9: </Text>
          <Text style={styles.textBox}>{data[organisationId]["Focus 9"]}</Text>
        </Text>
      )}
      {data[organisationId]["Focus 10"] === "" ? null : (
        <Text key={"focus10" + organisationId} style={styles.flexContainer}>
          <Text style={styles.textBoxTitle}>Focus 10: </Text>
          <Text style={styles.textBox}>{data[organisationId]["Focus 10"]}</Text>
        </Text>
      )}
      {data[organisationId]["Target Group"] === "" ? null : (
        <Text key={"targetGroup" + organisationId} style={styles.flexContainer}>
          <Text style={styles.textBoxTitle}>Target Groups{"\n"}</Text>
          <Text style={styles.textBox}>
            {data[organisationId]["Target Group"]}
          </Text>
        </Text>
      )}
      {data[organisationId]["Web Address"] === "" ? null : (
        <Text key={"website" + organisationId} style={styles.flexContainer}>
          <Text style={styles.textBoxTitle}>Website: </Text>
          <Text style={styles.textBoxWebsite}  onPress={() => Linking.openURL(data[organisationId]["Web Address"])}>
            {data[organisationId]["Web Address"]}
          </Text>
        </Text>
      )}
      {data[organisationId]["Phone Number"] === "" ? null : (
        <Text key={"phone" + organisationId} style={styles.flexContainer}>
          <Text style={styles.textBoxTitle}>Phone: </Text>
          <Text style={styles.textBox}>
            {data[organisationId]["Phone Number"]}
          </Text>
        </Text>
      )}
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
    color: "black",
    fontSize: 26,
    padding: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  
  textBoxTitle: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  
  textBoxSubTitle: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  textBox: {
    color: "black",
    fontSize: 16,
    marginRight: 10,
  },
  textBoxWebsite: {
    color: "black",
    fontSize: 16,
    marginRight: 10,
    textDecorationLine: 'underline',
  },
  flexContainer: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingBottom: 10,
  },
});

export default OrganisationDetailsScreen;
