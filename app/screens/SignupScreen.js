import React from 'react';
import { Image, StyleSheet, Text } from 'react-native'
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import ErrorMessage from '../components/ErrorMessage';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
    firstname: Yup.string().required().max(10, 'Must be 10 characters or less').label("FirstName"),
    lastname: Yup.string().required().max(15, 'Must be 12 characters or less').label("LastName"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function SignupScreen(props) {
   
    return (
      <Screen style={styles.container}>
            <Image 
                style={styles.logo}
                source={require("../assets/logo.jpg")}/>
            <Text style={styles.tagline}>Academic Program Evaluation Portal</Text>
            <Formik
                initialValues={{firstname: '', lastname: '', email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
                >
                    {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                        <>
                            <AppFormField
                                autoCapitalize="words"
                                autoCorrect={true}
                                icon="account"
                                keyboardType="default"
                                name="firstname"
                                // onBlur={() => setFieldTouched("firstname")}
                                // onChangeText={handleChange("firstname")}
                                placeholder="First Name"
                                textContentType="name"
                            />
                            {/* {<ErrorMessage error={errors.firstname} visible={touched}/>} */}
                            <AppFormField
                                autoCapitalize="words"
                                autoCorrect={true}
                                icon="account"
                                keyboardType="default"
                                name="lastname"
                                // onBlur={() => setFieldTouched("lastname")}
                                // onChangeText={handleChange("lastname")}
                                onChangeText={text => setLastname(text)}
                                placeholder="Last Name"
                                textContentType="name"
                            />
                            {/* {<ErrorMessage error={errors.lastname} visible={touched}/>} */}
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
                            {/* {<ErrorMessage error={errors.email} visible={touched}/>} */}
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
                            {/* {<ErrorMessage error={errors.password} visible={touched}/>} */}
                            <SubmitButton title="Sign up"/>
                            {/* <AppButton title="Sign Up" 
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
        marginTop:20,
        marginBottom: 20,
    },
    tagline: {
        fontSize: 22,
        fontWeight: "600",
        textAlign: "center",
    },
})

export default SignupScreen;