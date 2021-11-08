import React from "react";
import { Text, View, ScrollView, Button, Linking } from "react-native";
import data from "../../assets/organisations.json";
import { styles } from "./organisationsListStyles";

const OrganisationsListScreen = ({ route, navigation }) => {
  const SDG_Id = route.params["SDG_Id"].split(",");

  let newData = Object.keys(data).filter((orgId) => {
    for (
      let i = 0;
      i <
      data[orgId]["SDGs"]
        .replace(/[^0-9]/g, " ")
        .split(" ")
        .filter((n) => n).length;
      i++
    ) {
      if (
        data[orgId]["SDGs"]
          .replace(/[^0-9]/g, " ")
          .split(" ")
          .filter((n) => n)[i] === SDG_Id[0] ||
        SDG_Id[1]
      ) {
        return true;
      }
    }
    return false;
  });

  return (
    <ScrollView>
      {newData.map((organisation) => (
        <View
          key={"listview" + organisation}
          style={[styles.container, styles.boxShadow]}
        >
          <Text key={"name" + organisation} style={styles.textBoxName}>
            {data[organisation]["Name of Organisation"]}
          </Text>
          {data[organisation]["Address"] === "" ? null : (
            <Text key={"address" + organisation} style={styles.flexContainer}>
              <Text style={styles.textBoxTitle}>Address: </Text>
              <Text style={styles.textBox}>
                {data[organisation]["Address"]}
              </Text>
            </Text>
          )}
          {data[organisation]["Web Address"] === "" ? null : (
            <Text key={"website" + organisation} style={styles.flexContainer}>
              <Text style={styles.textBoxTitle}>Website: </Text>
              <Text
                style={styles.textBoxWebsite}
                onPress={() =>
                  Linking.openURL(data[organisation]["Web Address"])
                }
              >
                {data[organisation]["Web Address"]}
              </Text>
            </Text>
          )}
          {data[organisation]["Phone Number"] === "" ? null : (
            <Text key={"phone" + organisation} style={styles.flexContainer}>
              <Text style={styles.textBoxTitle}>Phone: </Text>
              <Text style={styles.textBox}>
                {data[organisation]["Phone Number"]}
              </Text>
            </Text>
          )}
          <Button
            title="More info"
            onPress={() => {
              navigation.navigate("OrganisationDetailsScreen", {
                org: organisation,
              });
            }}
          ></Button>
        </View>
      ))}
    </ScrollView>
  );
};

export default OrganisationsListScreen;
