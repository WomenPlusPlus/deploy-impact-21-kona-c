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
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = 
route.name
;
          if (rn === homeName) {
            iconName = focused ? "home" : "home";
            return <Feather name={iconName} size={size} color={color} />;
          } else if (rn === sdgName) {
            //;
            return (
              <Image
                source={require("../assets/sdg.png")}
                style={{ width: 50, height: 50 }}
              />
            );
          } else if (rn === emergencyName) {
            iconName = focused ? "phone-call" : "phone-call";
            return <Feather name={iconName} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "#921CB1",
        inactiveTintColor: "#A169B1",
        labelStyle: { paddingBottom: 2, fontSize: 15, paddingTop: 3},
        style: { padding: 10, height: 100},
      }} 
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={sdgName} component={SdgScreen} />
      <Tab.Screen name={emergencyName} component={emergencyScreen} />
    </Tab.Navigator>
  );
}

export default MainContainer; 