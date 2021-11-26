import React, { useState } from "react";
import data from "../../assets/jsonFiles/organisations.json";
import OrganisationsLists from "../../components/organisationsLists";

export const dataFunc = (
  data,
  selectedRegion,
  selectedGender,
  selectedAge,
  SDG_Id
) => {
  return Object.keys(data).filter((orgId) => {
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
        if (
          selectedRegion === "Worldwide" ||
          selectedRegion === data[orgId]["Code_region"]
        ) {
          if (selectedAge === "E" || selectedAge === "A") {
            if (selectedGender === "O" || selectedGender === "N") {
              return data[orgId]["Gender"].includes("M");
            } else {
              return data[orgId]["Gender"].includes(selectedGender);
            }
          } else {
            return true;
          }
        } else {
          return false;
        }
      }
    }
  });
};

const OrganisationsListScreen = ({ route, navigation }) => {
  const uniqueRegionsArray = route.params["uniqueRegionsArray"];
  const [selectedRegion, setSelectedRegion] = useState(
    route.params["selectedRegion"]
  );
  const [selectedGender, setSelectedGender] = useState(
    route.params["selectedGender"]
  );
  const [selectedAge, setSelectedAge] = useState(route.params["selectedAge"]);
  const selectedPersonType = route.params["selectedPersonType"];
  const SDG_Id = route.params["SDG_Id"].split(",");
console.log(route.params)
  const newData = dataFunc(
    data,
    selectedRegion,
    selectedGender,
    selectedAge,
    SDG_Id
  );

  // Make list random
  for (let i = newData.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let newDataElement = newData[i];
    newData[i] = newData[j];
    newData[j] = newDataElement;
  }

  // Filter by "refugge" on Target Group and put those first on the list
  for (let i = 0; i < newData.length; i++) {
    if (
      data[newData[i]]["Target Group"]
        .toLowerCase()
        .includes(selectedPersonType)
    ) {
      let element = newData[i];
      newData.splice(i, 1);
      newData.splice(0, 0, element);
    }
  }

  return (
    <OrganisationsLists
      uniqueRegionsArray={uniqueRegionsArray}
      selectedRegion={selectedRegion}
      SDG_Id={SDG_Id}
      newData={newData}
      navigation={navigation}
      selectedGender={selectedGender}
      selectedAge={selectedAge}
      setSelectedRegion={setSelectedRegion}
      setSelectedGender={setSelectedGender}
      setSelectedAge={setSelectedAge}
    />
  );
};

export default OrganisationsListScreen;
