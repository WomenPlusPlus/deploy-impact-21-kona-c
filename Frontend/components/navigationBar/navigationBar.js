import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

function FirstScreen({ navigation }) {
  return (
    <View>
      <Text>First Page</Text>
    </View>
  );
}

function SecondScreen({ navigation }) {
  return (
    <View>
      <Text>Second page</Text>
    </View>
  );
}

function ThirdScreen({ navigation }) {
  return (
    <View>
      <Text>Third page</Text>
    </View>
  );
}

const NavigationBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "FirstPage") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "SecondPage") {
            iconName = focused ? "location-sharp" : "location-sharp";
          } else if (route.name === "ThirdPage") {
            iconName = focused ? "md-list-sharp" : "md-list-sharp";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="FirstPage" component={FirstScreen} />
      <Tab.Screen name="SecondPage" component={SecondScreen} />
      <Tab.Screen name="ThirdPage" component={ThirdScreen} />
    </Tab.Navigator>
  );
};

export default NavigationBar;
