import React from 'react';
import {Image, StyleSheet, View} from "react-native";

import Text from './Text'
import colors from '../config/colors'

function Card({title, subtitle, image}) {
    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={image}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.title} numberOfLines={1}>
                    {title}
                </Text>
                <Text style={styles.subtitle} numberOfLines={5}>
                    {subtitle}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden"
    },
    image: {
        width: '100%',
        height: 200,
    },
    detailsContainer: {
        padding: 20,
    },
    subtitle: {
        color: 'red'
    }
});

export default Card;
