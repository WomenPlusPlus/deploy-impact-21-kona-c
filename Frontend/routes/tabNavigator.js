import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
//Screens
import SdgScreen from "../navigation/screens/sdgScreen";
import EmergencyScreen from "../screens/emergencyScreen/emergencyScreen";
import HotlineScreen from "../screens/hotlineScreen/hotlineScreen"
import HomeScreen from "../screens/welcomeScreen/welcomeScreen";
import {Text, View, Pressable, Alert} from 'react-native';
import OrganisationsListScreen from "../screens/organisationsListScreen/organisationsListScreen";
import OrganisationDetailsScreen from "../screens/organisationDetailsScreen/organisationDetailsScreen";
import InfoAge from "../screens/personalInfo/4_ageScreen";
import PersonType from "../screens/personalInfo/5_personTypeScreen";
import InfoGender from "../screens/personalInfo/3_genderScreen";
import InstitutionType from "../screens/personalInfo/1_institutionTypeScreen";
import HelpForWho from "../screens/personalInfo/2_helpForWhoScreen";
import LocationScreen from "../screens/locationScreen/locationScreen";
import NextButton from "../components/nextButton";
import NeedsScreenA from "../screens/needsScreens/needsScreenA";
import NeedsScreenB from "../screens/needsScreens/needsScreenB";
import NeedsScreenC from "../screens/needsScreens/needsScreenC";
import { Entypo } from '@expo/vector-icons';
import SdgOrganisationsList from "../screens/sdgOrganisationsListScreen/sdgOrganisationsList";
import NeedsScreenD from "../screens/needsScreens/needsScreenD";
import CompaniesOrganisationsList from "../screens/companiesOrganisationsList/companiesOrganisationsList";
import OtherGender from "../screens/personalInfo/3.1_otherGenderScreen"

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const handlePress = () => {
 Alert.alert(
'Please select an option, it will help us searching for help for you'
    );
 }

function StackNavigation () {

  return(
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#8A449D",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        > 
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: "Dots." }}
          />
          <Stack.Group
          screenOptions={{
            // headerShown: false
            title: 'Select an option', 
            headerRight: () =>{
              return(
                <View>
                  <Pressable onPress={() => {
                          Alert.alert('Please select an option. It will help us searching for help for you.');
                          }}>
                  <Entypo name="help-with-circle" size={24} color="white" />
                  </Pressable>
                </View>
              )} 
              }}>
            <Stack.Screen name="LocationScreen" component={LocationScreen} />
            <Stack.Screen name="InstitutionType" component={InstitutionType} />
            <Stack.Screen name="HelpForWho" component={HelpForWho} />
            <Stack.Screen name="InfoGender" component={InfoGender} />
            <Stack.Screen name="OtherGender" component={OtherGender} />
            <Stack.Screen name="InfoAge" component={InfoAge} />
            <Stack.Screen name="PersonType" component={PersonType} />
          </Stack.Group>

          <Stack.Screen name="NextButton" component={NextButton} />
          <Stack.Screen
            name="OrganisationsListScreen"
            component={OrganisationsListScreen}
          />
            <Stack.Screen
            name="SdgOrganisationsList"
            component={SdgOrganisationsList}
          />
          <Stack.Screen name="NeedsScreenA" component={NeedsScreenA} />
          <Stack.Screen name="NeedsScreenB" component={NeedsScreenB} />
          <Stack.Screen name="NeedsScreenC" component={NeedsScreenC} />
          <Stack.Screen name="NeedsScreenD" component={NeedsScreenD} />
          <Stack.Screen
            name="OrganisationDetailsScreen"
            component={OrganisationDetailsScreen}
          />
                  <Stack.Screen
          name="CompaniesOrganisationsList"
          component={CompaniesOrganisationsList}
        />
        </Stack.Navigator>
    
    )
  };

function TabNavigatorBottom() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="HomeScreenTab"
      activeColor="#921CB1"
      //inactiveColor="#A169B1"
      //color = "#3F51B5"
      //barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="HomeScreenTab"
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