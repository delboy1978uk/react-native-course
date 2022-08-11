import React, {useEffect} from 'react';
import {StyleSheet, Switch, Text, TextInput, View} from "react-native";
import * as ImagePicker from 'expo-image-picker';

import Screen from './app/components/Screen'

export default function App() {
    const requestPermission = async () => {
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!granted) {
            alert('What?! No! You need to click on allow always!');
        }
    }

    useEffect(() => {
        requestPermission();
    }, []);

    return (
        <Screen></Screen>
    )
}
