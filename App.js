import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppNavigator from "./app/navigation/AppNavigator"
import Button from "./app/components/Button"
import OfflineNotice from "./app/components/OfflineNotice"
import Text from "./app/components/Text"
import WelcomeScreen from "./app/screens/WelcomeScreen"
import navigationTheme from "./app/navigation/NavigationTheme"
import Screen from "./app/components/Screen";

export default function App() {

    return(
        <View style={{flex:1}}>
            <OfflineNotice />
            <NavigationContainer theme={navigationTheme}>
                <AppNavigator />
            </NavigationContainer>
        </View>
    )
}
