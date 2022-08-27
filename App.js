import React, {useEffect, useState} from 'react';
import {StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';

import AppNavigator from "./app/navigation/AppNavigator"
import Button from "./app/components/Button"
import WelcomeScreen from "./app/screens/WelcomeScreen"
import navigationTheme from "./app/navigation/NavigationTheme"

export default function App() {
    const netInfo = useNetInfo();

    return <Button disabled={netInfo.isInternetReachable} title={netInfo.isInternetReachable ? 'TRUE' : 'FALSE'}/>

    // return(
    //     <NavigationContainer theme={navigationTheme}>
    //         <AppNavigator />
    //     </NavigationContainer>
    // )
}
