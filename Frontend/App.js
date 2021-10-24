// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Counter from './screens/counter';
import PromptMessage from './screens/myFirstApp';
import LogoTitle from './components/header';



function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='go to Details'
      onPress={()=>navigation.navigate('Details')} />

      <Button title='go to Counter'
      onPress={()=>navigation.navigate('Counter')} />

      <Button title='go to My Prompt Message'
      onPress={()=>navigation.navigate('PromptMessage')} />
      <View style={{backgroundColor:'blue',}}>
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated!' })}
      />
      </View>
    </View>
 
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title='go to the Details...again'
      onPress={()=> navigation.push('Details')}/>
       <Button title="Go to Home" onPress={() => navigation.push('Home')} />
       {/* navigation.popToTop(), which goes back to the first screen in the stack */}
    </View>
  );
}

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

        <Stack.Screen name='Details' component={DetailsScreen} 
        options={{ headerTitle: (props)=> <LogoTitle{...props}/>}}
        />
        <Stack.Screen name='Counter' component={Counter} />
        <Stack.Screen name='PromptMessage' component={PromptMessage} 
        options={{ title: 'My very first prompt message' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;