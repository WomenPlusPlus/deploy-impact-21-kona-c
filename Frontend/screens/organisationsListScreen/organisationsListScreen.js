import { Link } from "@react-navigation/native";
import React,{ useState, useEffect } from "react";
import { Text, View, ScrollView, Button, Linking } from "react-native";
import data from "../../assets/organisations.json";
import { styles } from "./organisationsListStyles";

const OrganisationsListScreen = ({ navigation }) => {
  return (
    <ScrollView>
      {Object.keys(data).map((organisationId) =>
         (<View
          key={"listview" + organisationId}
          style={[styles.container, styles.boxShadow]}
        >
          <Text key={"name" + organisationId} style={styles.textBoxName}>
            {data[organisationId]["Name of Organisation"]}
          </Text>
          {data[organisationId]["Address"] === "" ? null : (
            <Text key={"address" + organisationId} style={styles.flexContainer}>
              <Text style={styles.textBoxTitle}>Address: </Text>
              <Text style={styles.textBox}>
                {data[organisationId]["Address"]}
              </Text>
            </Text>
          )}
          {data[organisationId]["Web Address"] === "" ? null : (
            <Text key={"website" + organisationId} style={styles.flexContainer}>
              <Text style={styles.textBoxTitle}>Website: </Text>
              <Text style={styles.textBoxWebsite} onPress={() => Linking.openURL(data[organisationId]["Web Address"])}>
                {data[organisationId]["Web Address"]}
              </Text>
            </Text>
          )}
          {data[organisationId]["Phone Number"] === "" ? null : (
            <Text key={"phone" + organisationId} style={styles.flexContainer}>
              <Text style={styles.textBoxTitle}>Phone: </Text>
              <Text style={styles.textBox} >
              {data[organisationId]["Phone Number"]}
              </Text>
            </Text>
          )}
          <Button
            title="More info"
            onPress={() => {
              navigation.navigate("OrganisationDetailsScreen", {
                orgId: organisationId,
              });
            }}
          ></Button>
        </View>
      ))}
    </ScrollView>
  );
};

export default OrganisationsListScreen;
