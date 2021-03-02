import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import color from  '../config/color';

function ImageScreen(props) {
    return (
        <View style={styles.container}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>

        
        <Image style={styles.background} 
        source={require("../assets/chair.jpg")}></Image>
           </View>
    );
}

const styles=StyleSheet.create({
    closeIcon:{
        width:50,
        height:50,
        backgroundColor: color.primary,
        position:"absolute",
        top:40,
        left:30,
    },
    deleteIcon:{
        width:50,
        height:50,
        backgroundColor: color.secondary,
        position:"absolute",
        top:40,
        right:30,
    },
    container:{
        backgroundColor:color.black,
        flex:1,
    },
background:{

position:"absolute",
width:"100%",
height:"70%",
left:0,
top:170,
},

})

export default ImageScreen;