import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar, View } from 'react-native';

import ListItem from '../components/ListItems.js';
import Constants from 'expo-constants';
import Screen from '../components/Screen.js';
import ListItemSeparator from '../components/ListItemSeparator.js';
import ListItemDeleteAction from '../components/ListItemDeleteAction.js';

const initialNotifications = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
          image: require('../assets/background.jpg')
    },
    {
        id: 2, 
        title: 'T2',
        description: 'D2',
        image: require('../assets/background.jpg')
    }
]

function Notifications(props) {
   // Method#1
            // const array = useState(0);
            // const count = array[0];
            // const setCount = array[1];

    // Method#2
    const [notifications, setNotifications] = useState(initialNotifications);
   
    const [refreshing, setRefreshing] = useState(false);
    //Delete Function
     const handleDelete = (Notification) => {
         // Delete the notification
         //Method#1
        // const newNotifications = notifications.filter(n => n.id !== Notification.id)
        // setNotifications(newNotifications);
        //Method#2
        setNotifications(notifications.filter((n) => n.id !== Notification.id));
     }

    return (
        <Screen>
        <FlatList
            data={notifications}
            keyExtractor={notifications => notifications.id.toString()}
            renderItem={({item}) => (
                <ListItem
                     title={item.title} 
                    subTitle={item.description} 
                    image={item.image}
                    onPress={() => console.log("Meesage selected" ,  item)}
                    renderRightActions={() =>
                        <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
                    // renderRightActions={() => (
                    //     <View
                    //         style={{
                    //             backgroundColor: "red",
                    //             width: 70,
                    //         }}
                    //     ></View>
                    // )}
                />
            )}
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => {
                setNotifications([
                    {
                        id: 2, 
                        title: 'T2',
                        description: 'D2',
                        image: require('../assets/background.jpg')
                    },
                ])
            }}
            // ItemSeparatorComponent={() =>
                //  <View style={{width:'100%' ,height:1, backgroundColor: '#000'}}/>}
         />
         </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
        // paddingTop: Constants.statusBarHeight
    }
})
export default Notifications; 