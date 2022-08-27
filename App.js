import React, {useEffect, useState} from 'react';
import {StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';

import AppNavigator from "./app/navigation/AppNavigator"
import Button from "./app/components/Button"
import WelcomeScreen from "./app/screens/WelcomeScreen"
import navigationTheme from "./app/navigation/NavigationTheme"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
    const demo = async () => {
        try {
            await AsyncStorage.setItem('person', JSON.stringify({id: 1}));
            const value = await AsyncStorage.getItem('person');
            const person = JSON.parse(value);
            console.log(person);
        } catch (error) {
            console.log(error);
        }
    }

    demo();

    return null;

    // return(
    //     <NavigationContainer theme={navigationTheme}>
    //         <AppNavigator />
    //     </NavigationContainer>
    // )
}
