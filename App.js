
import React from 'react';
import { 
  ColorPropType, 
  StyleSheet, 
  Text, 
  Button, 
  View, 
  Alert, 
  TouchableHighlight, 
  Dimensions,
  Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const pressMe = () =>{
  Alert.alert("Peligro");
}
// const App = () => {
//   return(
//     <View style={styles.container}>
//       <View style={styles.box1}>
//         <View style={styles.box2}>
//           <Text style={styles.text}>card1 </Text>
//         </View>
//         <View style={styles.box3}>
//           <Button title="Press Me" onPress={pressMe}></Button>
//           </View>  
//       </View>
//       <View style={styles.box4}>
//         <View style={styles.box5}>
//           <TouchableHighlight style={styles.touchButton} onPress={pre}>
//             <Text>Click Me</Text>
//           </TouchableHighlight>
//         </View>
//         <View style={styles.box6}></View>
//       </View>
//       <View style={styles.box7}>
//         <View style={styles.box8}></View>
//         <View style={styles.box9}></View>
//       </View>
//    </View>  
//   );

// }
const App =() =>{
  return(
    <View style={styles.container}>
      <View style={styles.box10}>
        <Image source={require('./assets/cita.png')}></Image>
        <Text style={{fontSize:20, color:"white", fontWeight:"bold"}}>AGENDA DE CITAS MEDICAS</Text>
      </View>
      <View style={styles.box11}></View>
      <View style={styles.box12}></View>
    </View>
  );
}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "column"
  }, 
  box1:{
    flex: 1,
    flexDirection: "row"
  },
  box2:{
    flex: 1,
    backgroundColor: "brown",
    margin: 20,
    borderRadius:15,
    alignItems:"center",
    justifyContent: "center"
  },
  box3:{
    flex: 1,
    backgroundColor: "purple",
    margin: 20,
    borderRadius:15,
    alignItems:"center",
    justifyContent: "center"
    
  },
  box4: {
    flex: 1,
    flexDirection: "row"
  },
  box5:{
    flex: 1,
    backgroundColor: "blue",
    margin: 20,
    borderRadius:15,
    borderWidth: 2,
    alignItems:"center",
    justifyContent: "center"
  },
  box6:{
    flex: 1,
    backgroundColor: "yellow",
    margin: 20,
    borderRadius:15
 },
 box7:{
  flex: 1,
  flexDirection: "row"
},
box8:{
  flex: 1,
  backgroundColor: "black",
  margin: 20,
  borderRadius:15
},
box9:{
  flex: 1,
  backgroundColor: "green",
  margin: 20,
  borderRadius:15
},
text:{
  color:"white",
  fontSize: 20
},
touchButton:{
  padding:20,
  backgroundColor:"#3f51b5",
  flexDirection:"row",
  borderRadius: 10
},
box10:{
  flex: 1,
  backgroundColor: "#03a9f4",
  alignItems:"center",
  justifyContent: "center"
},
box11:{
  flex: 1,
  backgroundColor: "white"
},
box12:{
  width: Dimensions.get("screen").width*0.9,
  height: Dimensions.get("screen").height*0.5,
  backgroundColor: "white",
  position:"absolute",
  left: Dimensions.get("screen").width*0.05,
  right: Dimensions.get("screen").width*0.05,
  top: Dimensions.get("screen").height*0.35,
  borderRadius: 10,
}
 
})

export default App;