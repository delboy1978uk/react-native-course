import React, {useEffect} from 'react';
import {StyleSheet, View} from "react-native";
import {Image} from 'react-native-expo-image-cache';

import colors from '../config/colors'
import Text from '../components/Text'
import ListItem from '../components/ListItem'
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

function ListingDetailsScreen({ route }) {
    const sendNotification = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "SELL that SHIT 😎",
                body: 'Someone wants to buy your shit',
                data: { data: 'goes here' },
            },
            trigger: { seconds: 2 },
        });
    }

    const triggerNotification = () => {
        sendNotification()
    }
    
    const listing = route.params;

    return (
        <View>
            <Image style={styles.image} tint="light" preview={{uri: listing.images[0].thumbnailUrl}} uri={listing.images[0].url } />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{listing.title}</Text>
                <Text style={styles.price}>${listing.price}</Text>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require('../assets/gretl.png')}
                        title="Gretl Michielsen"
                        subtitle="5 listings"
                    />
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
