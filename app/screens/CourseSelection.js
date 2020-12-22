import React from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import colors from '../config/colors';


import { createDrawerNavigator } from '@react-navigation/drawer';
import {FontAwesome5} from '@expo/vector-icons';

export default class Screen extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <SafeAreaView style={{flex: 1}}>
                    <TouchableOpacity style={{alignItems: "flex-end", margin: 16}} onPress={this.props.navigation.openDrawer}>
                        <FontAwesome5 name="'bars" size={24} color="#161924"/>
                    </TouchableOpacity>
                    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                        <Text style={styles.text}>{this.props.name} Screen</Text>
                    </View>
                </SafeAreaView>
            </ScrollView>
        );
    }
}



const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.secondary,
        },
        text: {
            color: colors.black,
            fontSize: 20,
            fontWeight: "500",
        }
});