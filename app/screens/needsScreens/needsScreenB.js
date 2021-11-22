import React from "react";
import options from "../../assets/jsonFiles/options_map.json";
import NeedsB_to_D from "../../components/needsB_to_D";

const NeedsScreenB = ({ route, navigation }) => {
  const selectedOptionScreenA = route.params["selectedOptionScreenA"];
  const optionsFilteredA = options.filter((option) => {
    return option["First_layer"] === selectedOptionScreenA;
  });

  const handlePress = (selectedOptionScreenB) => {
    const optionsFilteredB = optionsFilteredA.filter((option) => {
      return option["Second_layer"] === selectedOptionScreenB;
    });
    if (optionsFilteredB.length === 1) {
      navigation.navigate("OrganisationsListScreen", {
        selectedRegion: route.params["selectedRegion"],
        selectedInstitutionType: route.params["selectedInstitutionType"],
        selectedForWho: route.params["selectedForWho"],
        selectedGender: route.params["selectedGender"],
        selectedAge: route.params["selectedAge"],
        selectedPersonType: route.params["selectedPersonType"],
        selectedOptionScreenB: selectedOptionScreenB,
        uniqueRegionsArray: route.params["uniqueRegionsArray"],
        SDG_Id: optionsFilteredB[0]["SDG_Id"],
      });
    } else {
      navigation.navigate("NeedsScreenC", {
        selectedRegion: route.params["selectedRegion"],
        selectedInstitutionType: route.params["selectedInstitutionType"],
        selectedForWho: route.params["selectedForWho"],
        selectedGender: route.params["selectedGender"],
        selectedAge: route.params["selectedAge"],
        selectedPersonType: route.params["selectedPersonType"],
        selectedOptionScreenA: selectedOptionScreenA,
        selectedOptionScreenB: selectedOptionScreenB,
        arrayFilteredA: optionsFilteredA,
        optionsFilteredB: optionsFilteredB,
        uniqueRegionsArray: route.params["uniqueRegionsArray"],
      });
    }
  };
  const arr = [
    ...new Set(optionsFilteredA.map((option) => option.Second_layer)),
  ];

  return <NeedsB_to_D arr={arr} handlePress={handlePress} />;
};

export default NeedsScreenB;
