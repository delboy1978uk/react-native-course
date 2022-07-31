import React from 'react';
import {Text, View} from "react-native";

import Icon from './app/components/Icon';
import Screen from './app/components/Screen';
import ListItem from './app/components/ListItem';

export default function App() {
    return (
        <Screen>
            <ListItem
                title="XXX"
                ImageComponent={<Icon name="mail"/>}
            />
        </Screen>
    );
}
