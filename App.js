import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {MaterialCommunityIcons} from "@expo/vector-icons";

import Screen from './app/components/Screen'
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert, Dimensions, TextInput, Switch } from 'react-native';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItems';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppButton from './app/components/AppButton';
import AppText from './app/components/AppText.js';
import DashboardScreen from './app/screens/DashboardScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import Notifications from './app/screens/Notifications';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import FacultyDashboardScreen from './app/screens/FacultyDashboardScreen';
import LoginScreen from './app/screens/LoginScreen';
import SignupScreen from './app/screens/SignupScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
export default function App() {
  
  return(
   <ListingEditScreen/>
  )
}


 