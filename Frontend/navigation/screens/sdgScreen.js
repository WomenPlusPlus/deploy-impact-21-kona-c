import * as React from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import { styles } from "../../screens/welcomeScreen/welcomeScreenStyles";



export default function SdgScreen() {
  
  const [goal, setGoal] = useState(
    [ {goal: "No Poverty", key:1}, 
      {goal: "Zero Hunger", key:2}, 
      {goal: "Good health and well being", key:3}, 
      {goal: "Quality education", key:4}, 
      {goal: "Gender equaility", key:5}, 
      {goal: "Clean water and sanitation", key:6}, 
      {goal: "Affordable and clean energy", key:7}, 
      {goal: "Decent work and economic growth", key:8}, 
      {goal: "Industry, innovation and infrastructure", key:9}, 
      {goal: "Reduced inequilities", key:10}, 
      {goal: "Sustainable cities and communities", key:11}, 
      {goal: "Responsible consumption and production", key:12}, 
      {goal: "Climate action", key:13}, 
      {goal: "Life below water", key:14}, 
      {goal: "Life on land", key:15}, 
      {goal: "Peace justice and strong institutions", key:16}, 
      {goal: "Partnership for the goals", key:17},   
    ]
  ); 

  return (
    <View style={stylesSDG.container}>
      
        <ScrollView>
          {
            goal.map(item =>( 
              <View key ={item.key}>
                <Text style ={stylesSDG.item}>{item.goal}</Text>
              </View>
          ))}
        </ScrollView>
    
    </View>
  );
}

const stylesSDG = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop:24,
    padding: 30,
    fontSize: 24,
  }
}); 