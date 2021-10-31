import { StyleSheet, Dimensions, PixelRatio} from 'react-native';
import normalize from 'react-native-normalize';

const { width, height } = Dimensions.get('window');

let partialHeight = 0.25*height

let bubbleXLwidth = 0.75*width
let bubbleXL = Math.round((bubbleXLwidth + partialHeight)/2)

let bubbleMwidth = 0.45*width
let bubbleM = Math.round((bubbleMwidth + partialHeight)/2)

let bubbleSwidth = 0.25*width
let bubbleS= Math.round((bubbleSwidth + partialHeight)/2)


let sizeS = bubbleS
let sizeM = bubbleM
let sizeXL = bubbleXL


export const styles = StyleSheet.create({

    container: { 
        justifyContent: 'center',
        // alignItems: 'stretch',
        backgroundColor: 'white',
        flex: 1,
      },
        
    textTitle: {
      fontFamily: "Arial",
      fontSize: normalize(14),
      fontWeight: "bold",
      textShadowRadius: 10,
      alignSelf: 'center',
      color: 'white',   
    },  

    textButton:{
    color: 'white',
    fontWeight:'bold',
    textAlign: 'center',
    fontSize: normalize(20),
    },
    textInfo:{
      fontSize: 100 / PixelRatio.getFontScale(),
      fontWeight: "normal",
      marginTop: 60,
      fontStyle: 'italic',
    },
    roundS:{
      width: sizeS,
      height:  sizeS,
      borderRadius: sizeS/2,
      // padding: 15, 
      backgroundColor: "#E4C9E5",
      marginTop: -(0.7*partialHeight),
      marginLeft: (0.02*width),
      marginRight: ((1-bubbleS-0.02)*width),
      justifyContent: 'center',

    },
    roundM:{
      width: sizeM,
      height:  sizeM,
      borderRadius: sizeM/2,
      backgroundColor: "#A169B1",
      alignSelf: 'flex-end', 
      justifyContent: 'center',
      marginLeft: ((1-bubbleM-0.02)*width),
      marginRight: (0.02*width),
    },
    roundXL:{
      width: sizeXL,
      height:  sizeXL,
      borderRadius: sizeXL/2,
      // padding: 15, 
      backgroundColor: "#921CB1",
      elevation: 3,
      marginTop: (0.07*height),
      marginLeft: (width-bubbleXLwidth),
      marginRight: (0.05*width),
      marginBottom: (0.015*height),
      justifyContent: 'center'
    },     

});

