import React from 'react';
import {FlatList, Image, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({imageUris = [], onAddImage, onRemoveImage}) {

    return <View style={styles.container}>
        { imageUris.map( uri => (
            <View key={uri} style={styles.image}>
                <ImageInput imageUri={uri} onChangeImage={ () => onRemoveImage(uri)} />
            </View>
        )) }
        <ImageInput onChangeImage={ uri => onAddImage(uri) } />
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image: {
        marginRight: 5
    },
    list: {
        backgroundColor: 'yellow'
    }
})

export default ImageInputList;
