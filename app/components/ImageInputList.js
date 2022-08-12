import React from 'react';
import {FlatList, Image, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({imageUris, onAddImage, onRemoveImage, numColumns = 1}) {

    return <View style={styles.container}>
        <FlatList
            data={imageUris}
            keyExtractor={item => item.uri}
            numColumns={numColumns}
            renderItem={({item}) =>
                <TouchableWithoutFeedback onPress={onRemoveImage} >
                    <Image source={item.uri} style={styles.image} />
                </TouchableWithoutFeedback>
            }
            style={styles.list}
        />
        <ImageInput onChangeImage={ onAddImage } />
    </View>;
}

const styles = StyleSheet.create({
    container: {flexDirection: 'row'},
    image: {
        width: 100,
        height: 100,
        borderRadius: 15,
        marginHorizontal: 5
    },
    list: {
        backgroundColor: 'yellow'
    }
})

export default ImageInputList;
