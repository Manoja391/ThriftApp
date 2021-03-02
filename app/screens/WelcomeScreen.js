import React from 'react';
import {View,ImageBackground,StyleSheet, Image, Text} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require("../assets/background.jpg")}>
<View style={styles.logoContainer}>
<Image source={require("../assets/logo-red.png")} style={styles.logo}/>
<Text style={styles.text}>Sell What You Don't Need</Text>
</View>

<View style={styles.loginButton}></View>
<View style={styles.registerButton}></View>
       
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{flex:1,
    justifyContent:"flex-end",
    alignItems:"center",},
    loginButton:{
      width: "100%",
      height:70,
      backgroundColor: "#fc5c65",  
    },
    registerButton:{
        width: "100%",
        height:70,
        backgroundColor: "#4ecdc4",  
      },
      logo:{
          width:100,
          height:100,
          position:"absolute",
          top:100,
          
      },
      logoContainer:{
        position:"absolute",
        top:70,
        alignItems:"center",
  
      },
      text:{
        top:210,
      },
});
export default WelcomeScreen;
