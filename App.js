import React, {useEffect, useState} from 'react';
import {StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import NetInfo from '@react-native-community/netinfo';

import AppNavigator from "./app/navigation/AppNavigator"
import WelcomeScreen from "./app/screens/WelcomeScreen"
import navigationTheme from "./app/navigation/NavigationTheme"

export default function App() {
    NetInfo.fetch().then(netInfo => console.log(netInfo));

    return(
        <NavigationContainer theme={navigationTheme}>
            <AppNavigator />
        </NavigationContainer>
    )
}
