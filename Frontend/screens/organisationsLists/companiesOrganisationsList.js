import React, { useState } from "react";
import data from "../../assets/jsonFiles/organisations.json";
import companies_options from "../../assets/jsonFiles/companies_options_map.json";
import OrganisationsLists from "../../components/organisationsLists";

const CompaniesOrganisationsList = ({ route, navigation }) => {
  const selectedOptionD = route.params["selectedOptionD"];
  const [selectedRegion, setSelectedRegion] = useState(
    route.params["selectedRegion"]
  );
  const uniqueRegionsArray = route.params["uniqueRegionsArray"];

  const newData = Object.keys(data).filter((orgId) => {
    if (data[orgId]["Can individuals contact them?"] === "FALSE") {
      for (let i = 0; i < companies_options.length; i++) {
        if (companies_options[i]["First_layer"] === selectedOptionD) {
          if (
            data[orgId]["Target Group"]
              .toLowerCase()
              .includes(companies_options[i]["Searching_key1"]) ||
            data[orgId]["Target Group"]
              .toLowerCase()
              .includes(companies_options[i]["Searching_key2"])
          ) {
            if (
              selectedRegion === "Worldwide" ||
              data[orgId]["Code_region"] === selectedRegion
            ) {
              return true;
            } else {
              return false;
            }
          }
        }
      }
    }
  });

  return (
    <OrganisationsLists
      uniqueRegionsArray={uniqueRegionsArray}
      selectedRegion={selectedRegion}
      newData={newData}
      navigation={navigation}
    />
  );
};

export default CompaniesOrganisationsList;
