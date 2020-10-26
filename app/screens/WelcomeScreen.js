import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import AppButton from '../components/AppButton.js';

import AppText from '../components/AppText.js';
function WelcomeScreen(props) {
    return (
       <ImageBackground 
       style={styles.Background}
       source={require("../assets/background.jpg")}>
           <View style={styles.logoContainer}>
            <Image resizeMode="contain" style={styles.logo} source={require("../assets/logo.jpg")}></Image>
            <AppText>Academic Program Evaluation Portal</AppText>
           </View>
           <AppButton title="Login"></AppButton>
           <View style={styles.registerButton}><Text>Register</Text></View>
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    Background: {
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center",
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
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: '#4ecdc4',
    }
})
export default WelcomeScreen;