
//    import React, {useState} from 'react';
//    import {Text,View} from 'react-native';
   
//    import { NavigationContainer } from '@react-navigation/native';
//    import { createStackNavigator } from '@react-navigation/stack';
//    import HomePage from './pages/home-page/home-page';
//    import ContactPage from './pages/contact-page/contact-page';
//    import AboutPage from './pages/about-page/about-page';

//  const Stack = createStackNavigator();

//  function App() {
//   return(


//     <NavigationContainer>
//        <Stack.Navigator>
//        <Stack.Screen name="Home" component={HomePage}/>
//        <Stack.Screen name="Contact" component={ContactPage}/>
//        <Stack.Screen name="About" component={AboutPage}/>
//        </Stack.Navigator>
//     </NavigationContainer>
//   );  
// }
// export default App;
// 
//*********************** Inicio de aplicacion movilñ React Native ..........  */
import React from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  Button, 
  Alert, 
  TouchableHighlight, 
  Dimensions,
  Image} from 'react-native';

const pressMe = () =>{
  Alert.alert("peligro");
}

const App =() =>{
  return(
    <View style  ={styles.container}>
        <View style={styles.box1}>
          <Image source={require('./assets/cita.png')} style={{width:150}}></Image>
          <Text style={{fontSize:20, color:"black"}}> Agenda de Citas Medicas </Text>
        </View>
        <View style={styles.box2}>
       
        </View>
        <View style={styles.box3}>
        <Text>Agenda de Citas Medicas</Text>
        </View>
        

    </View>
   
  );
}
const styles = StyleSheet.create({
  container : {
    flex: 1,
    flexDirection: "column",
  },
  box1:{
    flex: 1,
    backgroundColor: "#29b6f6",
    justifyContent: "center",
    alignItems: "center"
  },
  box2:{
    flex: 1,
    backgroundColor: "#29b6f6",
    },
  box3:{
    width: Dimensions.get("screen").width*0.9,
    height: Dimensions.get("screen").height*0.4,
    backgroundColor: "#b3e5fc",
    position: "absolute",
    left: Dimensions.get("screen").width*0.05,
    right: Dimensions.get("screen").width*0.05,
    top: Dimensions.get("screen").width*1,
    borderRadius: 10,
  }

});
export default App;