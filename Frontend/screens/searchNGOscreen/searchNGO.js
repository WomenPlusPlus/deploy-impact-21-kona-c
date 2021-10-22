import React, {useState} from "react";
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import { styles } from "./searchNGOstyles";

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <ScrollView >
        <View style={styles.container}>
            <Text style={styles.title}>FIND HELP NEAR YOU</Text>

            <Image 
            style={styles.image}
            source={{ 
                uri: 'https://picsum.photos/200/300'}}/>

            <TextInput 
            placeholder= 'Search...'
            style={styles.search}
            defaultValue={searchTerm}/>
  
        </View>
        </ScrollView>
    );
};

export default Search;