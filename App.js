import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Switch, TextInput, View} from "react-native";

import ImageInput from './app/components/ImageInput';
import Screen from './app/components/Screen';

export default function App() {
    const [imageUri, setImageUri] = useState();

    return (
        <Screen style={styles.container}>
            {imageUri && <Image source={imageUri} style={styles.image}/>}
            <ImageInput imageUri={imageUri} onChangeImage={ (uri) => {
                setImageUri(uri);
            } } />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:10,
        flex: 1,
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15,
        marginHorizontal: 5
    },
})
