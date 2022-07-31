import React from 'react';
import {Text, View} from "react-native";

import Screen from './app/components/Screen';
import Icon from './app/components/Icon';

export default function App() {
    return (
        <Screen>
            <Icon
                name="mail"
                size={60}
                backgroundColor="tomato"
                iconColor="white"
            />
        </Screen>
    );
}
