import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';


import ListItems from '../components/ListItems';
import colors from '../config/colors';
import Screen from '../components/Screen';
import Icon from '../components/Icon';
import ListItemSeparatorComponent from '../components/ListItemSeparator';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const menuItems = [
    {
        title: "View Course",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.secondary
        }
    },
    {
        title: "Course Marks",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    },
    {
        title: "Course Folder",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    },
    {
        title: "Give Suggestions",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    },
    {
        title: "Reports",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    },
    {
        title: "Frequently Used Links",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    },
]
 
function AccountScreen(props) {
    return (
        
            <Screen style={styles.screen}>
                <View style={styles.container}>        
                <ListItems
                title="Yasir Faheem"
                subTitle="Data Structures"
                image={require("../assets/Yasir.jpeg")}/>
                </View>
                <View style={styles.container}>
                    <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparatorComponent}
                    renderItem={({ item }) => 
                        <ListItems
                            title={item.title}
                            ImageComponent={
                                <Icon
                                    name={item.icon.title}
                                    backgroundColor={item.icon.backgroundColor}/>
                            }/>}/>
                </View>
                <ListItems
                    title="Log Out"
                    ImageComponent={
                        <Icon
                            name="logout"
                            backgroundColor={colors.yellow}/>
                    }/>
            </Screen>
       
        
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.Lightgrey,
    }
})
export default AccountScreen;