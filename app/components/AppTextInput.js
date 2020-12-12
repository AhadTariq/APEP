import React from 'react';
import { View, StyleSheet, Platform, TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';
import defaultStyles from '../config/styles';

function AppTextInput({ icon, ...otherProps }) {
    return (
       <View style={styles.container}>
          {/* Using conditional redering */}
           {icon && <MaterialCommunityIcons name={icon} size={30} color={colors.secondary} style={styles.icon}/>}
           <TextInput style={defaultStyles.text} {...otherProps}/> 
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.Silver,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight:10,
    },
})
export default AppTextInput;