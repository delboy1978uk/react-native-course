import React, {useEffect, useState} from 'react';
import {StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";

import AuthNavigator from "./app/components/navigation/AuthNavigator"

export default function App() {
    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    )
}

