import React, {useEffect, useState} from 'react';

import Card from '../components/Card'
import Screen from '../components/Screen'
import {FlatList, StyleSheet, TouchableWithoutFeedback, View} from "react-native";

import listingsApi from '../api/listings'
import colors from '../config/colors'
import ActivityIndicator from '../components/ActivityIndicator'
import Button from '../components/Button'
import Text from '../components/Text'
import routes from '../navigation/routes'
import useApi from '../hooks/useApi'

function ListingsScreen({navigation}) {

    const getListingsApi = useApi(listingsApi.getListings)

    useEffect(() => {
        getListingsApi.request();
    }, []);

    return (
        <Screen style={styles.screen}>
            { getListingsApi.error &&
                <View>
                    <Text>Could not retrieve the listings</Text>
                    <Button textColor={'white'} color={'primary'} title={'retry'} onPress={ () => getListingsApi.request() }/>
                </View>
            }
            <ActivityIndicator visible={getListingsApi.loading} />
            <FlatList
                data={getListingsApi.data}
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
