import React from 'react';
import {Image, TouchableHighlight, View} from "react-native";
import * as ImagePicker from "expo-image-picker";

import colors from '../config/colors';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Screen from '../components/Screen';
import Text from '../components/Text';

function ImageInput({imageUri, onChangeImage}) {

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync();

            if (!result.cancelled) {
                onChangeImage({uri: result.uri});
            }
        } catch (error) {
            alert('Error reading image');
        }
    };

    return (
        <TouchableHighlight onPress={selectImage}>
            <Icon size={100} name={'camera'} borderRadius={15} iconColor={colors.dark} backgroundColor={colors.light} />
        </TouchableHighlight>
    );
}

export default ImageInput;
