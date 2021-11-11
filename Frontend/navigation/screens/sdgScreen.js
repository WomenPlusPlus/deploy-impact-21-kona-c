import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

const DATA = [
  {
    id: 1,
    title: "1. No poverty",
    photo: "https://i2.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2017/10/E_SDG-goals_Goal-01.png?resize=1024%2C1024&ssl=1", 
    description: "End poverty in all forms ever", 
  },
  {
    id: 2,
    title: "2. Zero hunger",
  },
  {
    id: 3,
    title: "3. Good health and well-being",
  },

  {
    id: 4,
    title: "4. Quality education",
  },
  {
    id: 5,
    title: "5. Gender equality",
  },
  {
    id: 6,
    title: "6. Clean water and sanitation",
  },
  {
    id: 7,
    title: "7. Affordable and clean energy",
  },
  {
    id: 8,
    title: "8. Decent work and economic growth",
  },
  {
    id: 9,
    title: "9. Industry, innovation and infrastructure",
  },
  {
    id: 10,
    title: "10. Reduced inequalities",
  },
  {
    id: 11,
    title: "11. Sustainable cities and communities",
  },
  {
    id: 12,
    title: "12.Responsible consumption and production",
  },
  {
    id: 13,
    title: "13. Climate action",
  },
  {
    id: 14,
    title: "14.Life below water",
  },
  {
    id: 15,
    title: "15. Life on land",
  },
  {
    id: 16,
    title: "16. Peace, justice and strong institutions",
  },
  {
    id: 17,
    title: "17. Partnerships for the goals",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
   
      
      <Text style={[styles.title, textColor]}>{item.title}</Text>
  
    
  </TouchableOpacity>
);

const sdgScreen = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#A169B1" : "#E4C9E5";
    const color = item.id === selectedId ? 'white' : '#921CB1';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  
});

export default sdgScreen;