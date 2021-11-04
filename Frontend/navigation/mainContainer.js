import * as React from "react";
//import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens 
import homeScreen from "../navigation/screens/homeScreen";
import searchScreen from "../navigation/screens/searchScreen";
import sdgScreen from "../navigation/screens/sdgScreen";
import emergencyScreen from "../navigation/screens/emergencyScreen";


// Screen name 
const homeName ="Home"; 
const searchName ="Search";
const sdgName ="SDG";
const emergencyName ="Emergency";   

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
                    iconName = focused ? 'home' : 'home-outline';

                    } else if (rn === searchName) {
                    iconName = focused ? 'search' : 'search-outline';

                    } else if (rn === sdgName) {
                    iconName = focused ? 'sdg' : 'sdg-outline';
                    
                    } else if (rn === emergencyName) {
                    iconName = focused ? 'emergency' : 'emergency-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                })}
                tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'grey',
                labelStyle: { paddingBottom: 10, fontSize: 10 },
                style: { padding: 10, height: 70}
                }}>

                <Tab.Screen name={homeName} component={homeScreen} />
                <Tab.Screen name={searchName} component={searchScreen} />
                <Tab.Screen name={sdgName} component={sdgScreen} />
                <Tab.Screen name={emergencyName} component={emergencyScreen} />

            </Tab.Navigator>
    ); 
}

export default MainContainer; 
