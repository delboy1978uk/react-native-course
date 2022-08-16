import React, {useEffect, useState} from 'react';
import {StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";

// import HomeScreenNavigator from "./app/navigation/HomeScreenNavigator"
import AppNavigator from "./app/navigation/AppNavigator"
import navigationTheme from "./app/navigation/NavigationTheme"

export default function App() {
    return (
        <NavigationContainer theme={navigationTheme}>
            <AppNavigator />
        </NavigationContainer>
    )
}
