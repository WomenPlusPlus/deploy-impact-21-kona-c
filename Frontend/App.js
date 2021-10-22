// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Counter from './screens/counter/counter';
import PromptMessage from './screens/myFirstApp/myFirstApp';
import  HomeScreen  from './screens/welcomeScreen/welcomeScreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        {/* instead of doing the below styling for the header we can put the code above  with the screenOptions and have the header style same for all the screens */}
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{ title: 'My home on top',
        // headerStyle: {
        //   backgroundColor: '#f4511e',
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //   fontWeight: 'bold',
        // }, 
        }}/>
        <Stack.Screen name='Counter' component={Counter} />
        <Stack.Screen name='PromptMessage' component={PromptMessage} 
        options={{ title: 'My very first prompt message' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;