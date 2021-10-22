import React from "react";
import { View, Text,Image } from 'react-native';
import { styles } from "./searchNGOstyles";

const Search = () => {

    return (
        <View style={styles.container}>
            <View>
            <Text style={styles.title}>FIND HELP NEAR YOU</Text>
            
            <Image 
            style={styles.image}
            source={{ 
                uri: 'https://picsum.photos/200/300'}}/>

            
            </View>
        </View>
    );
};

export default Search;