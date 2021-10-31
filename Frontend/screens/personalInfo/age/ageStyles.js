import { StyleSheet, Dimensions, } from "react-native";

const { width, height } = Dimensions.get('window');

let partialHeight = 0.14*height

let bubbleWidth = 0.4*width
let bubbleSize = Math.round((bubbleWidth + partialHeight)/2)


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'silver',
    },
    box: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    },

    bubble:{
      width: bubbleSize,
      height:  bubbleSize,
      borderRadius: bubbleSize/2,
      backgroundColor: "#8A449D",
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },

});

