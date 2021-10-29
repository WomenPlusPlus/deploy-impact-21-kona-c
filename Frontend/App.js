// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Development from "./screens/development/developmentScreen";
import HomeScreen from "./screens/welcomeScreen/welcomeScreen";
import Search from "./screens/searchNGOscreen/searchNGO";
import OrganisationsListScreen from "./screens/organisationsListScreen/organisationsListScreen";
import OrganisationDetailsScreen from "./screens/organisationDetailsScreen/organisationDetailsScreen";
import InfoAge from "./screens/personalInfo/age/ageScreen";
import InfoPersonType from "./screens/personalInfo/personType/personTypeScreen";

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
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{ title: 'Dots.',
        // headerStyle: {
        //   backgroundColor: '#f4511e',
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //   fontWeight: 'bold',
        // }, 
        }}/>
        <Stack.Screen name='Development' component={Development} />
        <Stack.Screen name='Search' component={Search} />
        <Stack.Group>
        <Stack.Screen name='InfoAge' component={InfoAge} 
        options={{ title: 'Dots Bubbles and why not logo' }} />
        <Stack.Screen name='InfoPersonType' component={InfoPersonType} />
        </Stack.Group>

        <Stack.Screen
          name="OrganisationsListScreen"
          component={OrganisationsListScreen}
        />
        <Stack.Screen
          name="OrganisationDetailsScreen"
          component={OrganisationDetailsScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
