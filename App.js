import React, {useState} from 'react';
import {StyleSheet, Switch, Text, TextInput, View} from "react-native";

import LoginScreen from './app/screens/LoginScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
    return (
        <LoginScreen />
        // <WelcomeScreen />
    );
}
