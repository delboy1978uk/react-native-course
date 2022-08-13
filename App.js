import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Switch, TextInput, View} from "react-native";

import * as Form from './app/components/forms';
import ImageInputList from './app/components/ImageInputList';
import Screen from './app/components/Screen';

export default function App() {
    const [images, setImages] = useState([]);

    const handleAdd = uri => setImages([...images, uri]);
    const handleRemove = uri => setImages(images.filter(imageUri => imageUri !== uri));

    return (
        <Screen style={styles.container}>
            <Form.Form initialValues={{ images: images }} >
                <Form.FormImagePicker name={'images'} />
            </Form.Form>

        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:10,
    },

})
