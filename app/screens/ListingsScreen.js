import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItems from '../components/ListItems';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
const listings = [
    {
        id: 1,
        title: 'jacket',
        price: 100,
        image: require('../assets/profile.jpg')
    },
    {
        id: 2,
        title: 'jacket#2',
        price: 500,
        image: require('../assets/profile.jpg')
    }  
]

function ListingsScreen(props) {
    return (
       <Screen style={styles.screen}>
           <FlatList
            data={listings}
            keyExtractor={listings => listings.id.toString()}
            renderItem={({ item }) => 
                <Card
                    title={item.title}
                    subTitle={"$" + item.price}
                    image={item.image}/>
                    }
            />
       </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.yellow,
    }
})

export default ListingsScreen;