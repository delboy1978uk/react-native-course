import React, {useEffect, useState} from 'react';
import {StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";

import AppNavigator from "./app/navigation/AppNavigator"
import AuthNavigator from "./app/navigation/AuthNavigator"
import navigationTheme from "./app/navigation/NavigationTheme"

export default function App() {
    return(

        <NavigationContainer theme={navigationTheme}>
            <AuthNavigator />
        </NavigationContainer>
    )
}
