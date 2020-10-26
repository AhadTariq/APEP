import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert, Dimensions } from 'react-native';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppButton from './app/components/AppButton';
import AppText from './app/components/AppText.js';
export default function App() {
  
  return(
    <View 
    style={{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <AppButton title="Login" onPress={()}></AppButton>
      <AppButton title="Signup"></AppButton>
    </View>
  )
}


 