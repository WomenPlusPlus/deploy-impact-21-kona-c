import { StyleSheet } from "react-native";

let x = 9;
let sizeS = 60
let sizeM = sizeS+x
let sizeL = sizeM+x
let sizeXL = sizeL+x
let sizeXXL = sizeXL+x

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
justifyContent: 'space-around',
alignItems: 'center',

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  roundS:{
    width: sizeS,
    height:  sizeS,
    borderRadius: sizeS/2,
    backgroundColor: "#E4C9E5",
    justifyContent: 'center',
    alignItems: 'center'
  },
  roundM:{
    width: sizeM,
    height:  sizeM,
    borderRadius: sizeM/2,
    backgroundColor: "#A169B1",
    justifyContent: 'center',
    alignItems: 'center'
  },
  roundL:{
    width: sizeL,
    height:  sizeL,
    borderRadius: sizeL/2,
    backgroundColor: "#921CB1",
    justifyContent: 'center',
    alignItems: 'center'
  },
  roundXL:{
    width: sizeXL,
    height:  sizeXL,
    borderRadius: sizeXL/2,
    backgroundColor: "#921CB1",
    justifyContent: 'center',
    alignItems: 'center'
  },
  roundXXL:{
    width: sizeXXL,
    height:  sizeXXL,
    borderRadius: sizeXXL/2,
    backgroundColor: "#A169B1",
    justifyContent: 'center',
    alignItems: 'center'
  },

});

