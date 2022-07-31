import React from 'react';
import {Image, StyleSheet, TouchableHighlight, View} from "react-native";

import AppText from '../components/AppText'
import colors from '../config/colors'

function ListItem({title, subtitle, image, onPress}) {
    return (
        <TouchableHighlight underlayColor={colors.light} onPress={onPress} >
            <View style={styles.container}>
                <Image style={styles.image} source={image}></Image>
                <View>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subtitle}>{subtitle}</AppText>
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        fontWeight: "500"
    },
    subtitle: {
        color: colors.medium
    }
});

export default ListItem;
