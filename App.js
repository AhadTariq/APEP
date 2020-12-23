import { StatusBar } from 'expo-status-bar';
import  { useEffect, useState } from 'react';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import React, {Component} from 'react';


import Screen from './app/components/Screen'
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert, Dimensions, TextInput, Switch } from 'react-native';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItems';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

const Link = () => {
const navigation = useNavigation();

  return(
  <Button 
    title="Click"
    onPress={() => navigation.navigate('FacultyDetails')}
  />
)
}
const Faculty = ({navigation }) => (
  <Screen>
    <Text>Faculty</Text>
    <Button
      title="View Faculty"
      onPress={()=> navigation.navigate("FacultyDetails", {id: 1})}
    />
  </Screen>
);

const FacultyDetails = ({route}) => (
  <Screen>
    <Text>FacultyDetails {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator 
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >  
    <Stack.Screen name="Faculty" component={Faculty} options={{
      headerStyle: { backgroundColor: 'tomato' },
      headerTintColor: "white",
      headerShown: false,
    }} />
    <Stack.Screen name="FacultyDetails" component={FacultyDetails}
      options={({route})=>({title:route.params.id})}
    />
  </Stack.Navigator>
);

const Account = () => <Screen><Text>Account</Text></Screen>

const Tab = createBottomTabNavigator()
const TabNavigator = () => (
  <Tab.Navigator 
      tabBarOptions={{
        activeBackgroundColor: "tomato",
        activeTintColor: "white",
        inactiveBackgroundColor: '#eee',
        inactiveTintColor: 'black'
      }}>
    <Tab.Screen name="Feed" component={StackNavigator} 
    // options={{
    //   tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color}/>
    // }}
    />
    <Tab.Screen name="Account" component={Account}/>
  </Tab.Navigator>
)

export default function App() {
 
  return(
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
  )
}