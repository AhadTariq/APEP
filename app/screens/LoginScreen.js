import React from 'react';
import { Image, StyleSheet, Text } from 'react-native'
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ErrorMessage from '../components/ErrorMessage';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function LoginScreen(props) {
   
    return (
      <Screen style={styles.container}>
            <Image 
                style={styles.logo}
                source={require("../assets/logo.jpg")}/>
            <Text style={styles.tagline}>Academic Program Evaluation Portal</Text>
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
                >
                   {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                       <>
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            name="email"
                            // onBlur={() => setFieldTouched("email")}
                            // onChangeText={handleChange("email")}
                            placeholder="Email"
                            textContentType="emailAddress"
                            />
                        {/* <AppText style={{ color: 'red' }}>{errors.email}</AppText> */}
                        {/* {<ErrorMessage error={errors.email} visible={touched.email}/>} */}
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            name="password"
                            // onBlur={() => setFieldTouched("password")}
                            // onChangeText={handleChange("password")}
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                        />
                        {/* <AppText style={{ color: 'tomato' }}>{errors.password }</AppText> */}
                        {/* {<ErrorMessage error={errors.password} visible={touched.password}/>} */}
                        <SubmitButton title="Login"/>
                        {/* <AppButton title="Login" 
                        onPress={handleSubmit} color="secondary"/> */}
                       </>
                   )} 
                </Formik>
           
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