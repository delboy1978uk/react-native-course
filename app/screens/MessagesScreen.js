import React from 'react';
import {FlatList, StyleSheet, Text, View} from "react-native";
import Constants from 'expo-constants'

import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg'),
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/gretl.png'),
    },
];

const onPress = () => alert('xxxxx');
const renderItem = ({item}) => <ListItem title={item.title} subtitle={item.description} image={item.image} onPress={onPress}/> ;
const separator = () => <ListItemSeparator /> ;

function MessagesScreen() {
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                ItemSeparatorComponent={separator}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;
