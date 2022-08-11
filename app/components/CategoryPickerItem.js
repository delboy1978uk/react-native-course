import React from 'react';
import {View, StyleSheet, TouchableOpacity} from "react-native";

import AppText from '../components/AppText'
import Icon from '../components/Icon'

function CategoryPickerItem({item, onPress}) {
    return <TouchableOpacity onPress={onPress} style={styles.container}>
        <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
        <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        paddingTop: 5,
        textAlign: 'center'
    }
})
export default CategoryPickerItem;
