import React from "react";
import companies_options from "../../assets/jsonFiles/companies_options_map.json";
import NeedsB_to_D from "../../components/needsB_to_D";

const NeedsScreenD = ({ route, navigation }) => {
  const handlePress = (selectedOptionD) => {
    navigation.navigate("CompaniesOrganisationsList", {
      uniqueRegionsArray: route.params["uniqueRegionsArray"],
      selectedRegion: route.params["selectedRegion"],
      selectedOptionD: selectedOptionD,
    });
  };
  const arr = companies_options.map((option) => option.First_layer);

  return <NeedsB_to_D arr={arr} handlePress={handlePress} />;
};

export default NeedsScreenD;
