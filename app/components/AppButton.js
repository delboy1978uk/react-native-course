import React from 'react';
import {View, StyleSheet, Text, Platform, TouchableOpacity, TouchableHighlight} from "react-native";

import AppText from '../components/AppText'
import colors from '../config/colors'

function AppButton({title, onPress, color, textColor}) {
    return (
        <TouchableHighlight style={[styles.roundbutton, {
            backgroundColor: color ? colors[color]: styles.roundbutton.color,
        }]} onPress={onPress}>
            <AppText style={[styles.text, {
                color: textColor ? colors[textColor] : styles.text.color}]
            }>{title}</AppText>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    roundbutton: {
        width: '100%',
        height: 70,
        borderRadius: 35,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        color: colors.black
    },
    text: {
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Courier',
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
});

export default AppButton;
