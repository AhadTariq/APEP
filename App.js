import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {MaterialCommunityIcons} from "@expo/vector-icons";


import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert, Dimensions } from 'react-native';
 
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppButton from './app/components/AppButton';
import AppText from './app/components/AppText.js';
import DashboardScreen from './app/screens/DashboardScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import Notifications from './app/screens/Notifications';
export default function App() {
  
  return(
   <Notifications/>
  )
}


 