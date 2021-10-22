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
      // textShadowColor: "black",
      textShadowRadius: 10,
      marginTop: 20,
      marginBottom: 20,
      // backgroundColor: "grey",
      
    },  
    button:{
      // flexDirection: 'row',
      padding: 15, 
      marginTop:20,
      alignItems: "center", 
      borderRadius: 25,
      backgroundColor: "blue",
      elevation: 3,
      
    },
    textButton:{
    color: 'white',
    fontWeight:'bold'
    },
    textInfo:{
      fontSize: 10,
      fontWeight: "normal",
      marginTop: 60,
      fontStyle: 'italic'
    },
    icon:{
      width: 2,
    height: 2,
    }   

     

});