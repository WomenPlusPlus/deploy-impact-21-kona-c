import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', },
        
    textTitle: {
      fontFamily: "Arial",
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

      backgroundColor: "#E4C9E5",
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
    },
    roundS:{
      width: 100,
      height:  100,
      borderRadius: 50,
      padding: 15, 
      backgroundColor: "#E4C9E5",
      elevation: 3,
    },
    roundM:{
      width: 150,
      height:  150,
      borderRadius: 75,
      padding: 25, 
      marginTop:20,
      alignSelf: 'flex-end', 

      backgroundColor: "#A169B1",
      elevation: 3,
    },
    roundXL:{
      width: 250,
      height:  250,
      borderRadius: 125,
      padding: 15, 
      marginTop:2,
      backgroundColor: "#921CB1",
      elevation: 3,
      // alignSelf:'flex-end',
    },
    bubblesContainer:{
      alignItems: 'stretch',
    }      

     

});

