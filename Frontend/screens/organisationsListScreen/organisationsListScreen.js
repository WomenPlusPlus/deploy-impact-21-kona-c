import { blue } from "ansi-colors";
import React from "react";
import { Text, View, ScrollView } from "react-native";
import DataTable, { COL_TYPES } from "react-native-datatable-component";
import data from "../../assets/organisations.json";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const JsonViewComponent = () => {
  return Object.keys(data).map((organisationId) => (
    <View
      key={"listview" + organisationId}
      style={[styles.container, styles.boxShadow]}
    >
      <Text style={styles.textBoxName}>
        {data[organisationId]["Name of Organisation"]}
      </Text>
      <Text style={styles.flexContainer}>
        <Text style={styles.textBoxTitle}>Address: </Text>
        <Text style={styles.textBox}>{data[organisationId]["Address"]}</Text>
      </Text>
      <Text style={styles.flexContainer}>
        <Text style={styles.textBoxTitle}>Phone: </Text>
        <Text style={styles.textBox}>
          {data[organisationId]["Phone Number"]}
        </Text>
      </Text>
      <Text style={styles.flexContainer}>
        <Text style={styles.textBoxTitle}>Website: </Text>
        <Text style={styles.textBox}>
          {data[organisationId]["Web Address"]}
        </Text>
      </Text>
      <Text style={styles.flexContainer}>
        <Text style={styles.textBoxTitle}>Services: </Text>
        <Text style={styles.textBox}>{data[organisationId]["Services"]}</Text>
      </Text>
    </View>
  ));
};

const OrganisationsListScreen = () => {
  return (
    <ScrollView>
      <JsonViewComponent />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boxShadow:
    Platform.OS === "ios"
      ? {
          shadowColor: "gray",
          shadowOffset: { width: 6, height: 6 },
          shadowOpacity: 0.5,
          shadowRadius: 15,
        }
      : {
          elevation: 20,
          shadowColor: "gray",
        },
  container: {
    flexGrow: 1,
    backgroundColor: "white",
    margin: 15,
    borderRadius: 20,
    overflow: "hidden",
  },
  textBoxName: {
    color: "black",
    fontSize: 20,
    padding: 10,
    fontWeight: "bold",
  },
  textBox: {
    color: "black",
    fontSize: 16,
    marginRight: 10,
  },
  textBoxTitle: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },

  flexContainer: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingBottom: 10,
  },
});

export default OrganisationsListScreen;
