import React, {useState} from "react";
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import { styles } from "./searchNGOstyles";


const Search = () => {

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
      
            <Text style={styles.title}>FIND HELP NEAR YOU</Text>

            <Image 
            style={styles.image}
            source={{ 
                uri: 'https://picsum.photos/200/300'}}/>

            <TextInput 
            placeholder= 'Search...'
            style={styles.search}
            defaultValue={searchTerm}/>
            <Text>Autosuggestion? Please type above the words you search or choose from the below</Text>

            <View style={styles.resultsBox}>
                <View style={styles.box}/>
                <View style={styles.box}/>
                <View style={styles.box}/>
                <View style={styles.box}/>


            </View>      


        </ScrollView>
        </View>
        
    );
};

export default Search;