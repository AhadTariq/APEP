import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert, Dimensions, TextInput, Switch } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import Screen from '../components/Screen';

const [imageUri, setImageUri] = useState();


  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if(!granted) 
      alert('You need to anable permission to access the library');
  }

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async() => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if(!result.cancelled)
      setImageUri(result.uri);
    } catch (error) {
      console.log('Error reading an image', error);
    }
  }


function ImageWorkingTemp(props) {
    return (
    <Screen>
     <Button title="Select Image" onPress={selectImage}/>
     <Image source ={{ uri: imageUri}} style={{ width: 200, height:200 }}/>
   </Screen>
    );
}

export default ImageWorkingTemp;