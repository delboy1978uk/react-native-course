import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Switch, TextInput, View} from "react-native";

import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import Screen from './app/components/Screen';

export default function App() {
    const [images, setImages] = useState([]);
    const [image, setImage] = useState(null);

    return (
        <Screen style={styles.container}>
            <ImageInput onChangeImage={(uri) => setImage(uri)} imageUri={image}/>
            <ImageInputList numColumns={3} imageUris={images} onChangeImage={ (uri) => {
                setImages([images, uri])
            } } />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:10,
    },

})
