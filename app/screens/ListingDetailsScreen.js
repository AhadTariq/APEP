import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import AppText from '../components/AppText.js';
import ListItem from '../components/ListItems.js';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
    return (
       <View>
           <Image style={styles.image} source={require('../assets/background.jpg')}></Image>
           <View style={styles.detailsContainer}> 
                <AppText style={styles.title}>Yasir Faheem</AppText>
                <AppText style={styles.price}>Data Structures Mentor</AppText>
                <View style={styles.userContainer}>
                <ListItem
                    image={require("../assets/background.jpg")}
                    title="Ahad Tariq"
                    subTitle="5 Listings"
                    
                />
                </View>
           </View>
       </View>
    );
}

const styles = StyleSheet.create({
   image: {
    width: '100%',
    height: 300,
   },
   detailsContainer: {
    padding: 20,
   },
   price: {
       color: colors.secondary,
   },
   title: {
       fontSize: 24,
       fontWeight: "500",
   },
   userContainer: {
    marginVertical: 40,
   },
});
export default ListingDetailsScreen;