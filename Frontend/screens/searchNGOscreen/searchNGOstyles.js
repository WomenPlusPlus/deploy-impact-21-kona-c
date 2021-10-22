import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        backgroundColor: 'white', 
    },
    title:{
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 20,
        alignSelf: 'center',
        },
    image:{
        width: 250,
        height: 150, 
        alignSelf: 'center',   
    },
    search:{
        padding: 15, 
        marginTop:20,
        alignItems: "center", 
        borderRadius: 25,
        borderColor: 'whitesmoke',
        borderStyle: 'solid',
        borderWidth: 2,
        width: '70%',

    }    
    });