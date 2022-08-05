import React, {useState} from 'react';
import {Switch, Text, TextInput, View} from "react-native";

import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';

export default function App() {
    const [isNew, setIsNew] = useState(false);

    return (
        <Screen>
            <AppPicker placeholder="Category" icon="apps"/>
            <AppTextInput placeholder="Email" icon="email"/>
        </Screen>
    );
}
