import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' },
        
    textTitle: {
      fontFamily: "Cochin",
      fontSize: 30,
      fontWeight: "bold",
    //   backgroundColor: "linear-gradient(red, yellow, blue)",
      textShadowColor: "black",
      textShadowRadius: 10,
      marginTop: 20,
      marginBottom: 20,
      backgroundColor: "grey",
      
    },  
    button:{
      padding: 15, 
      alignItems: "center", 
      borderRadius: 5,
      backgroundColor: "blue",
      
    },
    textInfo:{
      fontSize: 10,
      fontWeight: "normal",
      marginTop: 60,
    }   

     

});