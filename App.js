import React, {useEffect, useState} from 'react';
import {StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";

import HomeScreenNavigator from "./app/components/navigation/HomeScreenNavigator"



export default function App() {
    return (
        <NavigationContainer>
            <HomeScreenNavigator />
        </NavigationContainer>
    )
}
