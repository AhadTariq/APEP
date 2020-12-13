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

function AppPicker({ icon, items, onSelectItem, selectedItem, placeholder, ...otherProps }) {
   
    const [modalVisible, setModalVisible] = useState(false);
     
    return (
        <React.Fragment>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
       <View style={styles.container}>
          {/* Using conditional redering */}
           {icon && (
                <MaterialCommunityIcons 
                    name={icon} 
                    size={20} 
                    color={colors.danger} 
                    style={styles.icon}
                />
            )}
           <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
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
                renderItem={({ item })=>
                    <PickerItem
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
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
     icon: {
        marginRight:10,
    },
    text: {
        flex: 1,
    }
})
export default AppPicker;