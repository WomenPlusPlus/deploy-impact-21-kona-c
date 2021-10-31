import { StyleSheet, Dimensions, PixelRatio} from 'react-native';
import normalize from 'react-native-normalize';

const { width, height } = Dimensions.get('window');

let partialHeight = 0.14*height

let bubbleWidth = 0.33*width
let bubbleSize = Math.round((bubbleWidth + partialHeight)/2)



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',

  },
  bubbleBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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

