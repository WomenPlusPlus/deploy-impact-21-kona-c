import * as React from "react";
//import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Image } from "react-native";
//Screens
import SdgScreen from "../navigation/screens/sdgScreen";
import emergencyScreen from "../navigation/screens/emergencyScreen";
import HomeScreen from "../screens/welcomeScreen/welcomeScreen";
// Screen name
const homeName = "Home";
//const searchName = "Search";
const sdgName = "SDG";
const emergencyName = "Emergency";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === homeName) {
            iconName = focused ? "home" : "home";
          } 
           else if (rn === sdgName) {
            //iconName = focused ? "sdg" : "sdg";
            <Image source={require('../assets/sdg.png')} />
          } else if (rn === emergencyName) {
            iconName = focused ? "alert-circle" : "alert-circle";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#921CB1",
        inactiveTintColor: "#A169B1",
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 70 },
      }}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={sdgName} component={SdgScreen} />
      <Tab.Screen name={emergencyName} component={emergencyScreen} />
    </Tab.Navigator>
  );
}

export default MainContainer;

