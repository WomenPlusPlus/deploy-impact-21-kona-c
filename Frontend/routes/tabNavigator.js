import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
//Screens
// import SdgScreen from "../screens/tabsScreens/sdgScreen/sdgScreen";
import SdgScreen from "../navigation/screens/sdgScreen";
import EmergencyScreen from "../screens/emergencyScreen/emergencyScreen";
import HotlineScreen from "../screens/hotlineScreen/hotlineScreen"
import HomeScreen from "../screens/welcomeScreen/welcomeScreen";
import StackNavigation from "./stackNavigator";


const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigatorBottom() {
  return (
    <NavigationContainer>
                <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: "Dots." }}
          />
 
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor="#921CB1"
      //inactiveColor="#A169B1"
      //color = "#3F51B5"
      //barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={StackNavigation}
        options={{
          tabBarColor: "#ffffff", 
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Feather 
            name="home"
            activeColor="#921CB1"
            //inactiveColor="#ffffff"
            size={23} 
            color={"#8A449D"} 
            />
          ),
        }}
      />
   
      <Tab.Screen
        name="SDG"
        component={SdgScreen}
        options={{
          tabBarLabel: "SDGs",
          tabBarColor: "#b2e1f4", 
          /* tabBarOptions: {
            //activeTintColor: "#8A449D",
            //inactiveTintColor: "#ffffff",
          }, */
          tabBarIcon: () => (
            <Image
              source={require('../assets/sdg.png')}
              style={{ width: 50, height: 50, margin: -12 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Emergency"
        component={EmergencyScreen}
        options={{
          tabBarLabel: "Emergency",
          tabBarColor: "#E35E63", 
          tabBarIcon: ({ color, size }) => (
            <Feather name="phone" size={23} color={"#8A449D"} />
          ),
        }}
      />
      <Tab.Screen
        name="Hotline"
        component={HotlineScreen}
        options={{
          tabBarLabel: "Hotline",
          tabBarColor: "#7FCAC3", 
          tabBarIcon: ({ color, size }) => (
            <Feather name="headphones" size={23} color={"#8A449D"} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
export default TabNavigatorBottom;