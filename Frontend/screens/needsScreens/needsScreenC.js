import React from "react";
import NeedsB_to_D from "../../components/needsB_to_D";

const NeedsScreenC = ({ route, navigation }) => {
  const optionsFilteredB = route.params["optionsFilteredB"];

  const handlePress = (selectedOptionScreenC) => {
    for (let i = 0; i < optionsFilteredB.length; i++) {
      if (selectedOptionScreenC === optionsFilteredB[i]["Third_layer"]) {
        navigation.navigate("OrganisationsListScreen", {
          selectedRegion: route.params["selectedRegion"],
          selectedGender: route.params["selectedGender"],
          selectedAge: route.params["selectedAge"],
          selectedPersonType: route.params["selectedPersonType"],
          uniqueRegionsArray: route.params["uniqueRegionsArray"],
          SDG_Id: optionsFilteredB[i]["SDG_Id"],
        });
      }
    }
  };
  const arr = optionsFilteredB.map((option) => option.Third_layer);

  return <NeedsB_to_D arr={arr} handlePress={handlePress} />;
};

export default NeedsScreenC;
