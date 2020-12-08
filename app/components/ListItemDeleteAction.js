import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ListItemDeleteAction({ onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons 
                    name="trash-can"
                    size={35}
                    color={colors.white}>
                    
                </MaterialCommunityIcons>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        width: 400,
        height: 100,
        justifyContent: "center",
        alignItems:"flex-end",
        paddingRight:20,
    }
})

export default ListItemDeleteAction;