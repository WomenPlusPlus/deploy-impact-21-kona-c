import {dataFunc} from "../screens/organisationsLists/organisationsListScreen"

// Unit Test
describe("<OrganisationsListScreen />", () => {
  it("has 2 children", () => {
    const organisationsArray = [
      {
        "Name of Organisation": "La Liane",
        Objective: "Better living conditions for women and children.",
        Services: "Food and shelter.",
        SDGs: "(1) No Poverty, (2) No Hunger, (3) Health, (4) Education, (5) Gender Equality, (8) Work / Economic Growth, (11) Sustainable Communities",
        "Focus 1":
          "Victims of violence and domestic violence.\r\nVictims of family break-ups.",
        "Focus 2": "Health / Hygiene.",
        "Focus 3":
          "Schooling / Education (incl. socialisation, integration, cultural and sporting activities).",
        "Focus 4": "Business training (income-generating activities).",
        "Focus 5": "Children living on the street.",
        "Focus 6": "Victims of other forms of exploitation.",
        "Focus 7": "People living with disabilities.",
        "Focus 8": "",
        "Focus 9": "",
        "Focus 10": "",
        "Target Group": "Children \r\nYouth\r\nWomen",
        "Age Category": "C,Y,E,A",
        Gender: "F",
        "Can individuals contact them?": "TRUE",
        "Phone Number": "774345151 / 777833140",
        Email: "c.hallegot@laposte.net",
        "Web Address": "https://laliane.eu",
        Address: "Ndiolofféne Nord",
        Region: "Saint-Louis",
        Code_region: "Saint-Louis",
        Notes: "",
      },

      {
        "Name of Organisation": "Connexion Sans Frontieres",
        Objective:
          "Integration of ICT in development policies, support, advice and process organization.",
        Services:
          "Structured social protection for informal sector workers, as well as support for local communities.",
        SDGs: "(1) No Poverty, (9) Industry / Innovation / Infrastructure",
        "Focus 1": "Informal sector.",
        "Focus 2": "",
        "Focus 3": "",
        "Focus 4": "",
        "Focus 5": "",
        "Focus 6": "",
        "Focus 7": "",
        "Focus 8": "",
        "Focus 9": "",
        "Focus 10": "",
        "Target Group": "Women\r\nChildren\r\nInformal Sector Workers",
        "Age Category": "C,Y,E,A",
        Gender: "F,M",
        "Can individuals contact them?": "TRUE",
        "Phone Number": "776342646",
        Email: "aakcisse@gmail.com",
        "Web Address": "",
        Address: "AVENUE CHEIKH ANTA DIOP",
        Region: "Dakar",
        Code_region: "Dakar",
        Notes: "",
      },
    ];
    const results = dataFunc(organisationsArray, "Dakar", "F", "C", "1")
    expect(results).toEqual(["1"]);
  });
});
