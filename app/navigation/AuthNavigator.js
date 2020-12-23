import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name = "Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name = "Login" component={LoginScreen}/>
        <Stack.Screen name = "Signup" component={SignupScreen}/>
        {/* <Stack.Screen name = "Welcome" component={WelcomeScreen}/>
        <Stack.Screen name = "Welcome" component={WelcomeScreen}/>
        <Stack.Screen name = "Welcome" component={WelcomeScreen}/>
        <Stack.Screen name = "Welcome" component={WelcomeScreen}/>
        <Stack.Screen name = "Welcome" component={WelcomeScreen}/> */}
    </Stack.Navigator>
)

export default  AuthNavigator;