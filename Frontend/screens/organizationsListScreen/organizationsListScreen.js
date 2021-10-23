import React from "react";
import { View } from "react-native";
import DataTable, { COL_TYPES } from "react-native-datatable-component";
import data from "../../assets/organizations-data.json";

const JsonViewComponent = () => {
  return (
    <DataTable
      data={data}
      colNames={[
        "Name of Organisation",
        "Objective",
        "Services",
        "SDG(s)",
        "Focus 1",
        "Focus 2",
        "Focus 3",
        "Focus 4",
        "Focus 5",
        "Focus 6",
        "Focus 7",
        "Focus 8",
        "Focus 9",
        "Focus 10",
        "Target Group",
        "Can individuals contact them?",
        "Phone Number",
        "Email",
        "Web Address",
        "Address",
        "Region",
        "Notes",
      ]}
      colSettings={[
        { name: "Name of Organisation", type: COL_TYPES.STRING },
        { name: "Objective", type: COL_TYPES.STRING },
        { name: "Services", type: COL_TYPES.STRING },
        { name: "SDG(s)", type: COL_TYPES.STRING },
        { name: "Services", type: COL_TYPES.STRING },
        { name: "Focus 1", type: COL_TYPES.STRING },
        { name: "Focus 2", type: COL_TYPES.STRING },
        { name: "Focus 3", type: COL_TYPES.STRING },
        { name: "Focus 4", type: COL_TYPES.STRING },
        { name: "Focus 5", type: COL_TYPES.STRING },
        { name: "Focus 6", type: COL_TYPES.STRING },
        { name: "Focus 7", type: COL_TYPES.STRING },
        { name: "Focus 8", type: COL_TYPES.STRING },
        { name: "Focus 9", type: COL_TYPES.STRING },
        { name: "Focus 10", type: COL_TYPES.STRING },
        { name: "Target Group", type: COL_TYPES.STRING },
        { name: "Can individuals contact them?", type: COL_TYPES.STRING },
        { name: "Phone Number", type: COL_TYPES.STRING },
        { name: "Email", type: COL_TYPES.STRING },
        { name: "Web Address", type: COL_TYPES.STRING },
        { name: "Address", type: COL_TYPES.STRING },
        { name: "Region", type: COL_TYPES.STRING },
        { name: "Notes", type: COL_TYPES.STRING },
      ]}
      noOfPages={1} //number
    />
  );
};

const OrganizationsListScreen = () => {
  return (
    <View>
      <JsonViewComponent />
    </View>
  );
};


export default OrganizationsListScreen;
