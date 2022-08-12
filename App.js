import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Switch, TextInput, View} from "react-native";

import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import Screen from './app/components/Screen';

export default function App() {
    const [images, setImages] = useState([]);
    const [image, setImage] = useState(null);

    const handleAdd = uri => setImages([...images, uri]);
    const handleRemove = uri => setImages(images.filter(imageUri => imageUri !== uri));

    return (
        <Screen style={styles.container}>
            <ImageInput onChangeImage={(uri) => setImage(uri)} imageUri={image} />
            <ImageInputList
                imageUris={images}
                onAddImage={ handleAdd }
                onRemoveImage={ handleRemove }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:10,
    },

})
