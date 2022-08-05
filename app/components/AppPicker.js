import React from 'react';
import {StyleSheet, TextInput, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import AppText from './AppText'
import colors from '../config/colors'
import styles from '../config/styles'

function AppPicker({ icon, placeholder, ...otherProps }) {
    return (
        <View style={style.container}>
            {icon && <MaterialCommunityIcons name={icon} size={25} color={colors.medium} style={style.icon} />}
            <AppText style={[styles.text, style.text]} {...otherProps}>
                { placeholder }
            </AppText>
            <MaterialCommunityIcons name="chevron-down" size={25} color={colors.medium} />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    }
})

export default AppPicker;
