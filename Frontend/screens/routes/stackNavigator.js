import React from "react";
import {Text, View, Pressable, Alert} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Development from "../development/developmentScreen";
import HomeScreen from "../welcomeScreen/welcomeScreen";
import OrganisationsListScreen from "../organisationsListScreen/organisationsListScreen";
import OrganisationDetailsScreen from "../organisationDetailsScreen/organisationDetailsScreen";
import InfoAge from "../personalInfo/4_ageScreen";
import PersonType from "../personalInfo/5_personTypeScreen";
import InfoGender from "../personalInfo/3_genderScreen";
import InstitutionType from "../personalInfo/1_institutionTypeScreen";
import HelpForWho from "../personalInfo/2_helpForWhoScreen";
import LocationScreen from "../locationScreen/locationScreen";
import NextButton from "../../components/nextButton";
import NeedsScreenA from "../needsScreens/needsScreenA";
import NeedsScreenB from "../needsScreens/needsScreenB";
import NeedsScreenC from "../needsScreens/needsScreenC";
import MainContainer from "../../navigation/mainContainer";
import { Entypo } from '@expo/vector-icons';
import SdgOrganisationsList from "../sdgOrganisationsListScreen/sdgOrganisationsList";
import NeedsScreenD from "../needsScreens/needsScreenD";
import CompaniesOrganisationsList from "../companiesOrganisationsList/companiesOrganisationsList";

const Stack = createNativeStackNavigator();
const handlePress = () => {
 Alert.alert(
'Please select an option, it will help us searching for help for you'
    );
 }

const StackNavigation = () => (


<NavigationContainer>
      {/* <MainContainer /> */}
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
        {/* instead of doing the below styling for the header we can put the code above  with the screenOptions and have the header style same for all the screens */}
        <Stack.Screen name="Development" component={Development} />
   
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Dots." }}
        />
        <Stack.Group
        
        screenOptions={{
          // headerShown: false
          headerRight: () =>{
            return(
              <View>
                <Pressable onPress={() => {
                        Alert.alert(
                        'Please select an option, it will help us searching for help for you'
                            );
                        }}>
                <Entypo name="help-with-circle" size={24} color="white" />
</Pressable>
              </View>
            )
          }
          
        }}>
          <Stack.Screen name="InstitutionType" component={InstitutionType} />
          <Stack.Screen name="HelpForWho" component={HelpForWho} options={{ title: 'who?' }}/>
          <Stack.Screen name="InfoGender" component={InfoGender} options={{ title: 'Gender' }}/>
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
        <Stack.Screen name="LocationScreen" component={LocationScreen} />
        <Stack.Screen name="NeedsScreenA" component={NeedsScreenA} />
        <Stack.Screen name="NeedsScreenB" component={NeedsScreenB} />
        <Stack.Screen name="NeedsScreenC" component={NeedsScreenC} />
        <Stack.Screen name="NeedsScreenD" component={NeedsScreenD} />
        <Stack.Screen
          name="MainContainer"
          component={MainContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrganisationDetailsScreen"
          component={OrganisationDetailsScreen}
        />
                <Stack.Screen
        name="CompaniesOrganisationsList"
        component={CompaniesOrganisationsList}
      />
      </Stack.Navigator>
   
      </NavigationContainer>
);

export default StackNavigation;
