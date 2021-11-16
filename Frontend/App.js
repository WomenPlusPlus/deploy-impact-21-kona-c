import React from "react";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import TabNavigatorBottom from './routes/tabNavigator'

export default function App() {

  let [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
  
  if (!fontsLoaded) {
    return (
      <AppLoading />
    );
  }
  
  return (

    <TabNavigatorBottom />

   
  );
}
