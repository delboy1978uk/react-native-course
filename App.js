import React, {useState} from 'react';
import {Text, TextInput, View} from "react-native";

import Screen from './app/components/Screen';

export default function App() {
    const [firstname, setFirstname] = useState('');

    return (
        <Screen>
            <Text>{firstname}</Text>
            <TextInput
                secureTextEntry
                clearButtonMode="always"
                maxLength={20}
                onChangeText={text => setFirstname(text)}
                placeholder="First Name"
                style={{
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                }}
            />
        </Screen>
    );
}
