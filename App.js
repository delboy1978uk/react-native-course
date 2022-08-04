import React, {useState} from 'react';
import {Switch, Text, TextInput, View} from "react-native";

import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';

export default function App() {
    const [isNew, setIsNew] = useState(false);

    return (
        <Screen>
            <Switch value={isNew} onValueChange={ newValue => setIsNew(newValue) } />
        </Screen>
    );
}
