import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Switch, TextInput, View} from "react-native";
import * as ImagePicker from 'expo-image-picker';

import Button from './app/components/Button'
import Screen from './app/components/Screen'
import Text from './app/components/Text'

export default function App() {
    const [imageUri, setImageUri] = useState()

    const requestPermission = async () => {
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!granted) {
            alert('What?! No! You need to click on allow always!');
        }
    }

    useEffect(() => {
        requestPermission();
    }, []);

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync();

            if (!result.cancelled) {
                setImageUri(result.uri);
            }
        } catch (error) {
            alert('Error reading image');
        }
    };

    return (
        <Screen>
            <Button title="Select Image" onPress={selectImage} />
            <Image source={{uri:imageUri }} style={{width: 200, height: 200}} />
        </Screen>
    )
}
