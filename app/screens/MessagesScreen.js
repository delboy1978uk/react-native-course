import React from 'react';
import {FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text} from "react-native";

import ListItem from '../components/ListItem';

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

const renderItem = ({item}) => (
    <ListItem title={item.title} subtitle={item.description} image={item.image} />
);

function MessagesScreen(props) {

    return (
        <SafeAreaView style={styles.screen}>
            <FlatList
                data={messages}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})

export default MessagesScreen;
