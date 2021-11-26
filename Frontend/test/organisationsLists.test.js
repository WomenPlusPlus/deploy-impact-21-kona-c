import React from "react";
import renderer from "react-test-renderer";
import { dataFunc } from "../screens/organisationsLists/organisationsListScreen";
import data from "../assets/jsonFiles/organisations.json";
import LocationScreen from "../screens/locationScreen/locationScreen";
import OtherGender from "../screens/personalInfo/3.1_otherGenderScreen";

// Unit Test
describe("<OrganisationsListScreen />", () => {
  it("has 2 children", () => {
    const organisationsArray = data.filter((org) => {
      if (data.indexOf(org) === 0 || data.indexOf(org) === 2) {
        return true;
      } else {
        return false;
      }
    });
    const results = dataFunc(organisationsArray, "Dakar", "F", "C", "1");
    expect(results).toEqual(["1"]);
  });
});

describe("<OrganisationsListScreen />", () => {
  it("has 2 children", () => {
    const organisationsArray = data.filter((org) => {
      if (data.indexOf(org) === 1 || data.indexOf(org) === 2) {
        return true;
      } else {
        return false;
      }
    });
    const results = dataFunc(organisationsArray, "Saint-Louis", "M", "A", "9");
    expect(results).toEqual([]);
  });
});
