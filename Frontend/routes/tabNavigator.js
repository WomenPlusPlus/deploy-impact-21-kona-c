import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather, Entypo } from "@expo/vector-icons";
import { View, Pressable, Alert, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
//Screens
import HomeScreen from "../screens/welcomeScreen/welcomeScreen";
import SdgScreen from "../screens/sdgScreen/sdgScreen";
import EmergencyScreen from "../screens/emergencyScreen/emergencyScreen";
import HotlineScreen from "../screens/hotlineScreen/hotlineScreen";
import LocationScreen from "../screens/locationScreen/locationScreen";
import InfoAge from "../screens/personalInfo/4_ageScreen";
import PersonType from "../screens/personalInfo/5_personTypeScreen";
import InfoGender from "../screens/personalInfo/3_genderScreen";
import OtherGender from "../screens/personalInfo/3.1_otherGenderScreen";
import InstitutionType from "../screens/personalInfo/1_institutionTypeScreen";
import HelpForWho from "../screens/personalInfo/2_helpForWhoScreen";
import NextButton from "../components/nextButton";
import NeedsScreenA from "../screens/needsScreens/needsScreenA";
import NeedsScreenB from "../screens/needsScreens/needsScreenB";
import NeedsScreenC from "../screens/needsScreens/needsScreenC";
import NeedsScreenD from "../screens/needsScreens/needsScreenD";
import SdgOrganisationsList from "../screens/organisationsLists/sdgOrganisationsList";
import CompaniesOrganisationsList from "../screens/organisationsLists/companiesOrganisationsList";
import OrganisationsListScreen from "../screens/organisationsLists/organisationsListScreen";
import OrganisationDetailsScreen from "../screens/organisationDetailsScreen/organisationDetailsScreen";
import OrganisationsLists from "../components/organisationsLists";
import NeedsB_to_D from "../components/needsB_to_D";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const handlePress = (routeName) => {
  let questionnaireMessage = "an option";
  switch (routeName) {
    case "LocationScreen":
      questionnaireMessage = "a Region";
      break;
    case "InfoGender":
      questionnaireMessage = "a Gender";
      break;
    case "InfoAge":
      questionnaireMessage = "an Age Range";
      break;
    case "NeedsScreenA":
      questionnaireMessage = "an Area of interest";
      break;
    case "NeedsScreenB":
      questionnaireMessage = "a Subtopic";
      break;
    case "NeedsScreenC":
      questionnaireMessage = "a Subtopic";
      break;
  }
  let alertMessage = `Please select ${questionnaireMessage}. This will help show only relevant organisations.`;
  switch (routeName) {
    case "OrganisationsListScreen":
      alertMessage =
        "This is the list of organisations identified based on your search. If you can't find the help you need, you can change the Region, Age and Gender options to search again.";
      break;
    case "OrganisationDetailsScreen":
      alertMessage =
        "Here you can find all the details for the organisation selected.";
      break;
    case "CompaniesOrganisationsList":
      alertMessage =
        "This is the list of organisations identified based on your search. If you can't find the help you need, you can change the Region option to search again.";
      break;
  }
  Alert.alert("Info", alertMessage);
};

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#141414",
          opacity: 0.8,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Dots." }}
      />
      <Stack.Group
        screenOptions={({ route }) => ({
          title: "Select an option",
          headerTitleAlign: "center",
          headerRight: () => {
            return (
              <View>
                <Pressable onPress={() => handlePress(route.name)}>
                  <Entypo name="help-with-circle" size={24} color="white" />
                </Pressable>
              </View>
            );
          },
        })}
      >
        <Stack.Screen name="LocationScreen" component={LocationScreen} />
        <Stack.Screen name="InstitutionType" component={InstitutionType} />
        <Stack.Screen name="HelpForWho" component={HelpForWho} />
        <Stack.Screen name="InfoGender" component={InfoGender} />
        <Stack.Screen name="OtherGender" component={OtherGender} />
        <Stack.Screen name="InfoAge" component={InfoAge} />
        <Stack.Screen name="PersonType" component={PersonType} />
        <Stack.Screen name="NextButton" component={NextButton} />
        <Stack.Screen name="NeedsScreenA" component={NeedsScreenA} />
        <Stack.Screen name="NeedsScreenB" component={NeedsScreenB} />
        <Stack.Screen name="NeedsScreenC" component={NeedsScreenC} />
        <Stack.Screen name="NeedsScreenD" component={NeedsScreenD} />
        <Stack.Screen
          name="OrganisationsLists"
          component={OrganisationsLists}
        />
        <Stack.Screen name="NeedsB_to_D" component={NeedsB_to_D} />
        <Stack.Screen
          name="OrganisationsListScreen"
          component={OrganisationsListScreen}
        />
        <Stack.Screen
          name="SdgOrganisationsList"
          component={SdgOrganisationsList}
        />
        <Stack.Screen
          name="CompaniesOrganisationsList"
          component={CompaniesOrganisationsList}
        />
        <Stack.Screen
          name="OrganisationDetailsScreen"
          component={OrganisationDetailsScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

function TabNavigatorBottom() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="HomeScreenTab" activeColor="white">
        <Tab.Screen
          name="HomeScreenTab"
          component={StackNavigation}
          options={{
            tabBarColor: "#141414",
            tabBarLabel: "Home",
            tabBarIcon: () => (
              <Feather
                name="home"
                activeColor="white"
                //inactiveColor="#ffffff"
                size={23}
                color={"white"}
              />
            ),
          }}
        />

        <Tab.Screen
          name="SDG"
          component={SdgScreen}
          options={{
            tabBarLabel: "SDGs",
            tabBarColor: "#00689D",
            tabBarIcon: () => (
              <Image
                source={require("../assets/sdg.png")}
                style={{ width: 25, height: 25, margin: -3 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Emergency"
          component={EmergencyScreen}
          options={{
            tabBarLabel: "Emergency",
            tabBarColor: "#3F7E44",
            tabBarIcon: () => (
              <Feather name="phone" size={23} color={"white"} />
            ),
          }}
        />
        <Tab.Screen
          name="Hotline"
          component={HotlineScreen}
          options={{
            tabBarLabel: "Hotline",
            tabBarColor: "#A21942",
            tabBarIcon: () => (
              <Feather name="headphones" size={23} color={"white"} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default TabNavigatorBottom;
