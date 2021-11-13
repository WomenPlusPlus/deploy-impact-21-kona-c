import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { Image } from "react-native";
//Screens
import SdgScreen from "../navigation/screens/sdgScreen";
import EmergencyScreen from "../navigation/screens/emergencyScreen";
import HomeScreen from "../screens/welcomeScreen/welcomeScreen";
const Tab = createMaterialBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#921CB1"
      inactiveColor="#A169B1"
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={26} color={"#8A449D"} />
          ),
        }}
      />
      <Tab.Screen
        name="SDG"
        component={SdgScreen}
        options={{
          tabBarLabel: "SDGs",
          tabBarOptions: {
            activeTintColor: "#8A449D",
            inactiveTintColor: "#fff",
          },
          tabBarIcon: () => (
            <Image
              source={require("../assets/sdg.png")}
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
          tabBarIcon: ({ color, size }) => (
            <Feather name="phone-call" size={26} color={"#8A449D"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MainContainer;
