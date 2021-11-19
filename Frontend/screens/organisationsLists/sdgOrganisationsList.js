import React, { useState } from "react";
import data from "../../assets/jsonFiles/organisations.json";
import OrganisationsLists from "../../components/organisationsLists";

const SdgOrganisationsList = ({ route, navigation }) => {
  let regionsArray = [];
  const sdgId = route.params["sdgId"];
  const [selectedRegion, setSelectedRegion] = useState("Worldwide");

  for (let i = 0; i < data.length; i++) {
    regionsArray.push(data[i]["Code_region"]);
  }

  let uniqueRegionsArray = [...new Set(regionsArray)];

  const newData = Object.keys(data).filter((orgId) => {
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
        parseInt(
          data[orgId]["SDGs"]
            .replace(/[^0-9]/g, " ")
            .split(" ")
            .filter((n) => n)[i]
        ) === sdgId
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
  });

  return (
    <OrganisationsLists
      uniqueRegionsArray={uniqueRegionsArray}
      selectedRegion={selectedRegion}
      SDG_Id={[sdgId]}
      newData={newData}
      navigation={navigation}
    />
  );
};

export default SdgOrganisationsList;
