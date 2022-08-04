import React from 'react';
import {StyleSheet, TextInput, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import colors from '../config/colors'
import styles from '../config/styles'

function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={style.container}>
            {icon && <MaterialCommunityIcons name={icon} size={25} color={colors.medium} style={style.icon} />}
            <TextInput style={styles.text} {...otherProps}/>
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
    }
})

export default AppTextInput;
