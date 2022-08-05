import React from 'react';
import {Modal, StyleSheet, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import AppText from './AppText'
import colors from '../config/colors'
import styles from '../config/styles'

function AppPicker({ icon, placeholder, ...otherProps }) {
    return (
        <React.Fragment>
            <TouchableWithoutFeedback onPress={null}>
                <View style={style.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={25} color={colors.medium} style={style.icon} />}
                    <AppText style={[styles.text, style.text]} {...otherProps}>
                        { placeholder }
                    </AppText>
                    <MaterialCommunityIcons name="chevron-down" size={25} color={colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={false}></Modal>
        </React.Fragment>
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
