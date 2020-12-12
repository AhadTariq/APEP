import React, { useState } from 'react';
import { Image, StyleSheet, Text } from 'react-native'
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import { Formik } from 'formik';


import Screen from '../components/Screen';

function LoginScreen(props) {
   
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
   
    return (
      <Screen style={styles.container}>
            <Image 
                style={styles.logo}
                source={require("../assets/logo.jpg")}/>
            <Text style={styles.tagline}>Academic Program Evaluation Portal</Text>
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
                >
                   {({handleChange, handleSubmit}) => (
                       <>
                       </>
                   )} 
                </Formik>
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
            <AppButton title="Login" onPress={() => console.log(email, password)} color="secondary"/>
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