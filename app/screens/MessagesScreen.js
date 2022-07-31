import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from "react-native";
import Constants from 'expo-constants'

import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
    {
        id: 1,
        title: 'Choufke',
        description: 'Derek McLean',
        image: require('../assets/delboy.jpg'),
    },
    {
        id: 2,
        title: 'Honey Bunny Bee',
        description: 'Gretl Michielsen',
        image: require('../assets/gretl.png'),
    },
    {
        id: 3,
        title: 'Teddicus Maximus',
        description: 'Teddy',
        image: require('../assets/teddy.png'),
    },
];



function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages);
    const handleDelete = message => {
        // delete call to server, then upon success:
        setMessages(messages.filter(m => m.id !== message.id));
    }
    const renderItem = ({item}) =>
        <ListItem title={item.title}
                  subtitle={item.description}
                  image={item.image}
                  onPress={() => alert('wtf')}
                  renderRightActions={() => (<ListItemDeleteAction onPress={() => handleDelete(item)}/>)}
        /> ;

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <ListItemSeparator />}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;
