import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image}  source={require("../assets/abc.jpeg")}></Image>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={30}></MaterialCommunityIcons>
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={35}></MaterialCommunityIcons>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon:{
        // width: 50,
        // height: 50,
        // backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        left: 30,
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    deleteIcon:{
        // width: 50,
        // height: 50,
        // backgroundColor: colors.secondary,
        position: "absolute",
        top: 40,
        right: 30,
    }, 
    image: {
        width:'100%',
        height: '100%',
    },
})

export default ViewImageScreen;