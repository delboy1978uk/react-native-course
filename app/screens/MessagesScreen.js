import React from 'react';
import {FlatList, StyleSheet, Text, View} from "react-native";
import Constants from 'expo-constants'

import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const messages = [
    {
        id: 1,
        title: 'Awesome',
        description: 'Derek McLean',
        image: require('../assets/delboy.jpg'),
    },
    {
        id: 2,
        title: 'Sexy',
        description: 'Gretl Michielsen',
        image: require('../assets/gretl.png'),
    },
    {
        id: 3,
        title: 'Cuddly',
        description: 'Teddy',
        image: require('../assets/teddy.png'),
    },
];

const onPress = () => alert('xxxxx');
const renderItem = ({item}) => <ListItem title={item.title} subtitle={item.description} image={item.image} onPress={onPress} renderRightActions={ListItemDeleteAction}/> ;
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
