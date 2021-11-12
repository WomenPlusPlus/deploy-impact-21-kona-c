import * as React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather } from "@expo/vector-icons";
import { Image } from "react-native";
//Screens
import SdgScreen from "../navigation/screens/sdgScreen";
import emergencyScreen from "../navigation/screens/emergencyScreen";
import HomeScreen from "../screens/welcomeScreen/welcomeScreen";

const Tab = createMaterialBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SDG"
        component={SdgScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => (
            <Image
                source={require("../assets/sdg.png")}
                style={{ width: 50, height: 50 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Emergency"
        component={emergencyScreen}
        options={{
          tabBarLabel: 'Emergency',
          tabBarIcon: ({ color, size }) => (
            <Feather name="phone-call" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MainContainer; 