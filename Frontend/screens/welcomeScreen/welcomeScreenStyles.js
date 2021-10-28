import { StyleSheet } from 'react-native';

let sizeS = 130
let sizeM = 170
let sizeXL = 250

export const styles = StyleSheet.create({

    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', },
        
    textTitle: {
      fontFamily: "Arial",
      fontSize: 25,
      fontWeight: "bold",
      textShadowRadius: 10,
      marginTop: 40,
      marginBottom: 20,
      alignSelf: 'center',
      color: 'white',
    },  
    button:{

      padding: 15, 
      marginTop:120,
      alignItems: "center", 
      backgroundColor: "#E4C9E5",
      elevation: 3,
      
    },
    textButton:{
    color: 'white',
    fontWeight:'bold',
marginTop: 20,
marginLeft: 20,
    
    },
    textInfo:{
      fontSize: 10,
      fontWeight: "normal",
      marginTop: 60,
      fontStyle: 'italic',

    },
    icon:{
      width: 2,
    height: 2,
    },
    roundS:{
      width: sizeS,
      height:  sizeS,
      borderRadius: sizeS/2,
      padding: 15, 
      backgroundColor: "#E4C9E5",
      elevation: 3,
      marginTop: -190,
      flex:1,
    },
    roundM:{
      width: sizeM,
      height:  sizeM,
      borderRadius: sizeM/2,
      padding: 35, 
      marginTop:20,
      alignSelf: 'flex-end', 
      flex:1,
      backgroundColor: "#A169B1",
      elevation: 3,
    },
    roundXL:{
      width: sizeXL,
      height:  sizeXL,
      borderRadius: sizeXL/2,
      padding: 15, 
      marginTop:10,
      backgroundColor: "#921CB1",
      elevation: 3,
      marginLeft: 80,
      flex: 0.2,
      // alignSelf:'flex-end',
    },
    bubblesContainer:{
      alignItems: 'stretch',
      flex:1,
    }      

     

});

