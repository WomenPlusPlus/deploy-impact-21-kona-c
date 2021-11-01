// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Development from "./screens/development/developmentScreen";
import HomeScreen from "./screens/welcomeScreen/welcomeScreen";
import Search from "./screens/searchNGOscreen/searchNGO";
import OrganisationsListScreen from "./screens/organisationsListScreen/organisationsListScreen";
import OrganisationDetailsScreen from "./screens/organisationDetailsScreen/organisationDetailsScreen";
import InfoAge from "./screens/personalInfo/4_ageScreen";
import PersonType from "./screens/personalInfo/5_personTypeScreen";
import ResultInfoScreen from "./screens/personalInfo/resultPersonalInfoScreen";
import InfoGender from './screens/personalInfo/3_genderScreen';
import InstitutionType from './screens/personalInfo/1_institutionTypeScreen';
import HelpForWho from "./screens/personalInfo/2_helpForWhoScreen";
import NewScreen from "./screens/personalInfo/newScreen";
import LocationScreen from "./screens/locationScreen/locationScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#8A449D',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        {/* instead of doing the below styling for the header we can put the code above  with the screenOptions and have the header style same for all the screens */}
        <Stack.Screen name='Development' component={Development} />       
        <Stack.Screen name="HomeScreen" component={HomeScreen} 
        options={{ title: 'Dots.',

        }}/>
      
        <Stack.Screen name='Search' component={Search} />

        <Stack.Group>
        <Stack.Screen name='InstitutionType' component={InstitutionType} />
        <Stack.Screen name='HelpForWho' component={HelpForWho} />
        <Stack.Screen name='InfoGender' component={InfoGender} />
        <Stack.Screen name='InfoAge' component={InfoAge} 
        options={{ title: 'Dots Bubbles and why not logo' }} />
        <Stack.Screen name='PersonType' component={PersonType} />
        <Stack.Screen name='ResultInfoScreen' component={ResultInfoScreen} />
        </Stack.Group>

        <Stack.Screen name='NewScreen' component={NewScreen} />

        <Stack.Screen
          name="OrganisationsListScreen"
          component={OrganisationsListScreen}
        />
           <Stack.Screen
          name="LocationScreen"
          component={LocationScreen}
        />
        {/* <Stack.Screen
          name="OrganisationDetailsScreen"
          component={OrganisationDetailsScreen}
        /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
