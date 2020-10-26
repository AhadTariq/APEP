import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function AppButton({title, onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
           <Text style={styles.text}>{title}</Text>
       </TouchableOpacity>
    );
} 
const styles = StyleSheet.create({
    button: {
        backgroundColor:colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        margin:10,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})
export default AppButton;