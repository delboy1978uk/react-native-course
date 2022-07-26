import React from 'react';
import {Image, StyleSheet, View} from "react-native";

import AppText from '../components/AppText'
import colors from '../config/colors'

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/bunny.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Hot honey bunny   ♾💎🧹</AppText>
                <AppText style={styles.price}>£1,000,000,000</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.secondary,
        marginVertical: 10
    }
});

export default ListingDetailsScreen;
