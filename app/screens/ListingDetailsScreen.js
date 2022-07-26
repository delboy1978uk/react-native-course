import React from 'react';
import {Image, StyleSheet, View} from "react-native";

import AppText from '../components/AppText'
import colors from '../config/colors'

import ListItem from '../components/ListItem'

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/bunny.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Hot honey bunny   ♾💎🧹</AppText>
                <AppText style={styles.price}>£1,000,000,000</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require('../assets/gretl.png')}
                        title="Gretl Michielsen" subtitle="5 listings"/>
                </View>
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
    userContainer: {
        marginVertical: 30,
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
