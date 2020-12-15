import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';
import AppText from './AppText';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function ListItems({title, subTitle, image,ImageComponent, onPress, renderRightActions}) {
    return (
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight 
    underlayColor={colors.secondary}
    onPress={onPress}>
    <View style={styles.container}>
        {ImageComponent}
        {image && <Image style={styles.image} source={image}/>}
        <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLine={1}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle} numberOfLine={2}>{subTitle}</AppText>}
        </View>
        <MaterialCommunityIcons color={colors.Lightgrey} name="chevron-right" size={25}/>
     </View>
    </TouchableHighlight>
    </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center",
    },
    image: {
       width: 70,
       height: 70,
       borderRadius: 35,
    },
    subTitle: {
        color: colors.Lightgrey,
    },
    title: {
        fontWeight: "bold",
    },
});
export default ListItems;    