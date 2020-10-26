import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import AppButton from '../components/AppButton.js';

function WelcomeScreen(props) {
    return (
       <ImageBackground 
       blurRadius={10}
       style={styles.background}
       source={require("../assets/background.jpg")}>
           <View style={styles.logoContainer}>
            <Image resizeMode="contain" style={styles.logo} source={require("../assets/logo.jpg")}></Image>
            <Text style={styles.tagline}>Academic Program Evaluation Portal</Text>
           </View>
           <View style={styles.buttonsContainer}>
           <AppButton title="Login" color="secondary"/>
           <AppButton title="Register" color="secondary"/>
           </View>
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonsContainer: {
        padding: 20,
        width: "100%",

    },
    logo:{
        width:100,
        height: 100,
    },
    logoContainer:{
        position: "absolute",
        top: 70,
        alignItems:"center",
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical:20,
        textAlign: "center",
    },
})
export default WelcomeScreen;