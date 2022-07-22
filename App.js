import React from 'react';
import {Text, View} from "react-native";

import AppText from './app/components/AppText';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <AppText>This is fucking awesome! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquam culpa ea nostrum, nulla, odit pariatur quaerat, quis quos repellendus temporibus. Aspernatur at consectetur, dolor magnam repellat sit ut.</AppText>
        </View>
    );
}
