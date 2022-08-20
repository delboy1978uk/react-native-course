import React, {useEffect, useState} from 'react';

import Card from '../components/Card'
import Screen from '../components/Screen'
import {FlatList, StyleSheet, TouchableWithoutFeedback} from "react-native";

import listingsApi from '../api/listings'
import colors from '../config/colors'
import routes from '../navigation/routes'

function ListingsScreen({navigation}) {

    const [listings, setListings] = useState([]);

    useEffect(() => {
        loadListings();
    }, []);

    const loadListings = async () => {
        const response = await listingsApi.getListings();
        setListings(response.data);
    }

    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id}
                renderItem={ ({item}) =>
                    <Card
                        title={item.title}
                        subtitle={"€" + item.price}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 10,
        backgroundColor: colors.light
    }
})

export default ListingsScreen;
