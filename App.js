import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Switch, TextInput, View} from "react-native";

import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
    const [images, setImages] = useState([]);

    const handleAdd = uri => setImages([...images, uri]);
    const handleRemove = uri => setImages(images.filter(imageUri => imageUri !== uri));

    return (
        <ListingEditScreen />
    )
}

const styles = StyleSheet.create({
    container: {
        padding:10,
    },

})
