import React, {useState} from 'react';
import {Switch, Text, TextInput, View} from "react-native";

import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';

const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },
];

export default function App() {
    return (
        <Screen>
            <AppPicker items={categories} placeholder="Category" icon="apps"/>
            <AppTextInput placeholder="Email" icon="email"/>
        </Screen>
    );
}
