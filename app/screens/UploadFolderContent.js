import React from 'react';
import { Image, StyleSheet, Text } from 'react-native'
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import { Formik } from 'formik';
import * as Yup from 'yup';

import defaultStyles from '../config/styles';
import Screen from '../components/Screen';

import {ErrorMessage, AppFormField, SubmitButton} from '../components/forms/index';
import AppPicker from '../components/AppPicker';
import AppText from '../components/AppText';
import ImageInputList from '../components/ImageInputList';


const validationSchema = Yup.object().shape({
    firstname: Yup.string().required().max(10, 'Must be 10 characters or less').label("FirstName"),
    lastname: Yup.string().required().max(15, 'Must be 12 characters or less').label("LastName"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function UploadFolderContent(props) {
   
    return (
      <Screen style={styles.container}>
            <Text style={styles.tagline}>Upload Folder Contents</Text>
            <Formik
                initialValues={{coursename: '', type: '', number: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
                >
                    {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                        <>
                            <AppPicker
                                style={styles.tagline}
                                autoCapitalize="words"
                                autoCorrect={true}
                                icon="apps"
                                keyboardType="default"
                                name="coursename"
                                // onBlur={() => setFieldTouched("firstname")}
                                // onChangeText={handleChange("firstname")}
                                placeholder="Select Course"
                                textContentType="name"
                            />
                            {/* {<ErrorMessage error={errors.firstname} visible={touched}/>} */}
                            <AppPicker
                                style={defaultStyles.text}
                                autoCapitalize="words"
                                autoCorrect={true}
                                icon="apps"
                                keyboardType="default"
                                name="type"
                                // onBlur={() => setFieldTouched("lastname")}
                                // onChangeText={handleChange("lastname")}
                                onChangeText={text => setLastname(text)}
                                placeholder="Select Type"
                                textContentType="name"
                            />
                            {/* {<ErrorMessage error={errors.lastname} visible={touched}/>} */}
                            <AppPicker
                                autoCapitalize="words"
                                autoCorrect={false}
                                icon="apps"
                                keyboardType="number"
                                name="number"
                                // onBlur={() => setFieldTouched("email")}
                                // onChangeText={handleChange("email")}
                                placeholder="number"
                                textContentType="name"
                                />
                            {/* {<ErrorMessage error={errors.email} visible={touched}/>} */}
                            {/* <AppFormField
                                autoCapitalize="none"
                                autoCorrect={false}
                                icon="lock"
                                name="password"
                                // onBlur={() => setFieldTouched("password")}
                                // onChangeText={handleChange("password")}
                                placeholder="Password"
                                secureTextEntry
                                textContentType="password"
                            /> */}
                            {/* {<ErrorMessage error={errors.password} visible={touched}/>} */}
                            {/* <SubmitButton title="Sign up"/> */}
                            {/* <AppButton title="Sign Up" 
                            onPress={handleSubmit} color="secondary"/> */}
                            <AppText>Upload Model Description:</AppText>
                            <ImageInputList/>
                            <AppText>Upload Model Solution:</AppText>
                            <ImageInputList/>
                            <AppText>Upload Best Solution:</AppText>
                            <ImageInputList/>
                            <AppText>Upload Average Solution:</AppText>
                            <ImageInputList/>
                            <AppText>Upload Worst Solution:</AppText>
                            <ImageInputList/>
                            <AppButton title="Upload" 
                            onPress={handleSubmit} color="secondary"/> 
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

export default UploadFolderContent;