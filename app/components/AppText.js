import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

import defaultStyles from '../config/styles';

function AppText({children}) {
    return (
    <Text style={[defaultStyles.text, style]}>{children}</Text>
    );
}
 
// const styles = StyleSheet.create({
//     text: {
//         color:"tomato",
//         ...Platform.select({
//                     ios: {
//                         fontSize: 20,
//                         fontFamily: "Avenir",
//                     },
//                     android: {
//                         fontSize: 15,
//                         fontFamily: "Roboto",
//                     }
//                 })
//            },
// })

export default AppText;