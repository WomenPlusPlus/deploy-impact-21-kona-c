import React from "react";
import {Text, View, Pressable, Alert} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Development from "../screens/development/developmentScreen";
import HomeScreen from "../screens/welcomeScreen/welcomeScreen";
import OrganisationsListScreen from "../screens/organisationsListScreen/organisationsListScreen";
import OrganisationDetailsScreen from "../screens/organisationDetailsScreen/organisationDetailsScreen";
import InfoAge from "../screens/personalInfo/4_ageScreen";
import PersonType from "../screens/personalInfo/5_personTypeScreen";
import InfoGender from "../screens/personalInfo/3_genderScreen";
import InstitutionType from "../screens/personalInfo/1_institutionTypeScreen";
import HelpForWho from "../screens/personalInfo/2_helpForWhoScreen";
import LocationScreen from "../screens/locationScreen/locationScreen";
import NextButton from "../components/nextButton";
import NeedsScreenA from "../screens/needsScreens/needsScreenA";
import NeedsScreenB from "../screens/needsScreens/needsScreenB";
import NeedsScreenC from "../screens/needsScreens/needsScreenC";
import { Entypo } from '@expo/vector-icons';
import SdgOrganisationsList from "../screens/sdgOrganisationsListScreen/sdgOrganisationsList";
import NeedsScreenD from "../screens/needsScreens/needsScreenD";
import CompaniesOrganisationsList from "../screens/companiesOrganisationsList/companiesOrganisationsList";
import TabNavigatorBottom from "./tabNavigator";
import OtherGender from "../screens/personalInfo/3.1_otherGenderScreen"

const Stack = createNativeStackNavigator();

const handlePress = () => {
 Alert.alert(
'Please select an option, it will help us searching for help for you'
    );
 }

function StackNavigation () {

  return(
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#8A449D",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >

          {/* <Stack.Screen name="Development" component={Development} /> */}
    
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: "Dots." }}
          />
          <Stack.Group
          screenOptions={{
            // headerShown: false
            title: 'Select an option', 
            headerRight: () =>{
              return(
                <View>
                  <Pressable onPress={() => {
                          Alert.alert('Please select an option. It will help us searching for help for you.');
                          }}>
                  <Entypo name="help-with-circle" size={24} color="white" />
                  </Pressable>
                </View>
              )} 
              }}>
            <Stack.Screen name="LocationScreen" component={LocationScreen} />
            <Stack.Screen name="InstitutionType" component={InstitutionType} />
            <Stack.Screen name="HelpForWho" component={HelpForWho} />
            <Stack.Screen name="InfoGender" component={InfoGender} />
            <Stack.Screen name="OtherGender" component={OtherGender} />
            <Stack.Screen name="InfoAge" component={InfoAge} />
            <Stack.Screen name="PersonType" component={PersonType} />
          </Stack.Group>

          <Stack.Screen name="NextButton" component={NextButton} />
          <Stack.Screen
            name="OrganisationsListScreen"
            component={OrganisationsListScreen}
          />
            <Stack.Screen
            name="SdgOrganisationsList"
            component={SdgOrganisationsList}
          />
          <Stack.Screen name="NeedsScreenA" component={NeedsScreenA} />
          <Stack.Screen name="NeedsScreenB" component={NeedsScreenB} />
          <Stack.Screen name="NeedsScreenC" component={NeedsScreenC} />
          <Stack.Screen name="NeedsScreenD" component={NeedsScreenD} />
          <Stack.Screen
            name="OrganisationDetailsScreen"
            component={OrganisationDetailsScreen}
          />
                  <Stack.Screen
          name="CompaniesOrganisationsList"
          component={CompaniesOrganisationsList}
        />

        </Stack.Navigator>
    
  )
        };

export default StackNavigation;
