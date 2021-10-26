import React from "react";
import { Text, View, ScrollView, Button } from "react-native";
import data from "../../assets/organisations.json";
import { styles } from "./organisationsListStyles";

const OrganisationsListScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("OrganisationDetailsScreen");
  };
  return (
    <ScrollView>
      {Object.keys(data).map((organisationId) => (
        <View
          key={"listview" + organisationId}
          style={[styles.container, styles.boxShadow]}
        >
          <Text key={"name" + organisationId} style={styles.textBoxName}>
            {data[organisationId]["Name of Organisation"]}
          </Text>
          <Text key={"address" + organisationId} style={styles.flexContainer}>
            <Text style={styles.textBoxTitle}>Address: </Text>
            <Text style={styles.textBox}>
              {data[organisationId]["Address"]}
            </Text>
          </Text>
          <Text key={"phone" + organisationId} style={styles.flexContainer}>
            <Text style={styles.textBoxTitle}>Phone: </Text>
            <Text style={styles.textBox}>
              {data[organisationId]["Phone Number"]}
            </Text>
          </Text>
          <Text key={"website" + organisationId} style={styles.flexContainer}>
            <Text style={styles.textBoxTitle}>Website: </Text>
            <Text style={styles.textBox}>
              {data[organisationId]["Web Address"]}
            </Text>
          </Text>
          <Text key={"services" + organisationId} style={styles.flexContainer}>
            <Text style={styles.textBoxTitle}>Services: </Text>
            <Text style={styles.textBox}>
              {data[organisationId]["Services"]}
            </Text>
          </Text>
          <Button title="More info" onPress={handlePress}></Button>
        </View>
      ))}
    </ScrollView>
  );
};

export default OrganisationsListScreen;
