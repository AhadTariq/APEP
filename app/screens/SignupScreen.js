import React, { useState } from 'react';
import { Image, StyleSheet, Text } from 'react-native'
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';

import Screen from '../components/Screen';

function LoginScreen(props) {
   

    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
   
    return (
      <Screen style={styles.container}>
            <Image 
                style={styles.logo}
                source={require("../assets/logo.jpg")}/>
            <Text style={styles.tagline}>Academic Program Evaluation Portal</Text>
            <AppTextInput
                autoCapitalize="words"
                autoCorrect={true}
                icon="account"
                keyboardType="default"
                onChangeText={text => setFirstname(text)}
                placeholder="First Name"
                textContentType="name"
            />
            <AppTextInput
                autoCapitalize="words"
                autoCorrect={true}
                icon="account"
                keyboardType="default"
                onChangeText={text => setLastname(text)}
                placeholder="Last Name"
                textContentType="name"
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                onChangeText={text => setEmail(text)}
                placeholder="Email"
                textContentType="emailAddress"
                />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                onChangeText={text => setPassword(text)}
                placeholder="Password"
                secureTextEntry
                textContentType="password"
            />
            <AppButton title="Sign Up" onPress={() => console.log(firstname, lastname, email, password)} color="secondary"/>
      </Screen>  
    );
}

const styles = StyleSheet.create({
    container: {
        padding:10,
    },
    logo: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginTop:50,
        marginBottom: 20,
    },
    tagline: {
        fontSize: 22,
        fontWeight: "600",
        textAlign: "center",
    },
})

export default LoginScreen;