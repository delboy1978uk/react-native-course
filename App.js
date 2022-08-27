import React, {useEffect, useState} from 'react';
import {StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import NetInfo from '@react-native-community/netinfo';

import AppNavigator from "./app/navigation/AppNavigator"
import WelcomeScreen from "./app/screens/WelcomeScreen"
import navigationTheme from "./app/navigation/NavigationTheme"

export default function App() {
    const unsubscribe = NetInfo.addEventListener(netInfo => console.log(netInfo));
    unsubscribe();


    return(
        <NavigationContainer theme={navigationTheme}>
            <AppNavigator />
        </NavigationContainer>
    )
}
