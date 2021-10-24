// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Counter from './screens/counter/counter';
import OrganisationsListScreen from './screens/organisationsListScreen/organisationsListScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='OrganisationList' component={OrganisationsListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;