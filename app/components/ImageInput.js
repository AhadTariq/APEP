import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import colors from '../config/colors';

import * as ImagePicker from 'expo-image-picker';

import {MaterialCommunityIcons} from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';

function ImageInput({ imageUri, onChangeImage }) {
    useEffect(() => {
        requestPermission();
    } ,[])

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
        if(!granted) 
          alert('You need to anable permission to access the library');
      }
    
    const handlePress= () => {
        if(!imageUri) selectImage();
        else Alert.alert('Delete', 'Are you sure you want to delete this image',[
            { text: 'Yes', onPress: () => onChangeImage(null) },
            {text: "No"},
        ])
        
    }
    const selectImage = async() => {
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Image,
              quality:0.5
          });
          if(!result.cancelled)
          onChangeImage(result.uri);
        } catch (error) {
          console.log('Error reading an image', error);
        }
      }
    
    return (
       <TouchableWithoutFeedback onPress={handlePress}> 
       <View style={styles.container}>
           {!imageUri && <MaterialCommunityIcons name="camera" color={colors.Lightgrey} size={40}/>}
       
        { imageUri && <Image source={ {uri: imageUri}} style={styles.image}/> }
       </View>
       </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.Silver,
        borderRadius: 15,
        justifyContent: "center",
        alignItems:'center',
        height: 100,
        width: 100,
        overflow: "hidden",
    },
    image: {
        height: '100%',
        width: '100%',
    }
})
export default ImageInput;