import React from 'react';

import Card from '../components/Card'
import Screen from '../components/Screen'
import {FlatList, StyleSheet} from "react-native";

import colors from '../config/colors'

const listings = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 60,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 450,
        image: require('../assets/couch.jpg')
    },
    {
        id: 3,
        title: 'Hot honey bunny ❤️',
        price: '100,000,000',
        image: require('../assets/bunny.jpg')
    },
];

function ListingsScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id}
                renderItem={ ({item}) =>
                    <Card
                        title={item.title}
                        subtitle={"€" + item.price}
                        image={item.image}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})

export default ListingsScreen;
