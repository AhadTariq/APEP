import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';

function DashboardScreen(props) {
    return (
        <View>
            <Text style={styles.heading}>Faculty Dashboard</Text>
            <Text style={styles.text}>Frequently Used Links</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    heading:{
        fontSize:30,
        fontWeight:"bold",
        alignItems:"flex-start",
    },
    text:{
        fontSize:20,
        alignItems: "center",
    }
})

export default DashboardScreen;