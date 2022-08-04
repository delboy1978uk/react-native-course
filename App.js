import React, {useState} from 'react';
import {Text, TextInput, View} from "react-native";

import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';

export default function App() {
    const [firstname, setFirstname] = useState('');

    return (
        <Screen>
            <AppTextInput icon="email" placeholder="Email address"/>
        </Screen>
    );
}
