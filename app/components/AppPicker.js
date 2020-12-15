import React, { useState } from 'react';
import { View, StyleSheet, Platform, TextInput, Modal, Button } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from '../components/Screen';
import { TouchableWithoutFeedback } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PickerItem from './PickerItem';

function AppPicker({ icon, items, numberOfColumns = 1, onSelectItem, PickerItemComponent = PickerItem, selectedItem, placeholder, width="100%" }) {
   
    const [modalVisible, setModalVisible] = useState(false);
     
    return (
        <React.Fragment>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
       <View style={[styles.container, { width }]}>
          {/* Using conditional redering */}
           {icon && (
                <MaterialCommunityIcons 
                    name={icon} 
                    size={20} 
                    color={colors.danger} 
                    style={styles.icon}
                />
            )}

            { selectedItem ? (
                 <AppText style={styles.text}>{selectedItem.label}</AppText>
             ) : (
                 
                <AppText style={styles.placeholder}>{placeholder}</AppText>          
            )} 
           
           <MaterialCommunityIcons 
                    name="chevron-down" 
                    size={20} 
                    color={colors.danger}
                    style={styles.chevron} 
                />
       </View>
       </TouchableWithoutFeedback>
       <Modal 
        visible={modalVisible}
        animationType="slide"
       >
          <Screen> 
           <Button title="Close" onPress={() => setModalVisible(false)}/>
           <FlatList
                data={items}
                keyExtractor={items => items.value.toString()}
                numColumns={numberOfColumns}
                renderItem={({ item })=>
                    <PickerItemComponent
                        item={item}
                        label={item.label}
                        onPress={() => {
                            setModalVisible(false);
                            onSelectItem(item);
                            }}/>}/>
           </Screen>
       </Modal>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    chevron: {
        paddingLeft: 250,
    },
    container: {
        backgroundColor: colors.Lightgrey,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
    },
     icon: {
        marginRight:10,
    },
    placeholder: {
        color:defaultStyles.colors.Lightgrey,
        flex: 1,
    },
    text: {
        flex: 1,
    }
})
export default AppPicker;