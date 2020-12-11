import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

import colors from '../config/colors';


function AppTextInput({ icon, ...otherProps }) {
    return (
       <View style={styles.container}>
          {/* Using conditional redering */}
           {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.danger} style={styles.icon}/>}
           <TextInput style={styles.textInput} {...otherProps}/> 
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.Lightgrey,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight:10,
    },
    textInput: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    }
})
export default AppTextInput;