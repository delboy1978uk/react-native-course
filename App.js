import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import AsyncStorage from "@react-native-async-storage/async-storage";

import AuthContext from "./app/auth/context"
import AppNavigator from "./app/navigation/AppNavigator"
import AuthNavigator from "./app/navigation/AuthNavigator"
import Button from "./app/components/Button"
import OfflineNotice from "./app/components/OfflineNotice"
import Text from "./app/components/Text"
import WelcomeScreen from "./app/screens/WelcomeScreen"
import navigationTheme from "./app/navigation/NavigationTheme"
import Screen from "./app/components/Screen";

export default function App() {
    const [user, setUser] = useState();

    return(
        <AuthContext.Provider value={{user, setUser}}>
            <OfflineNotice />
            <NavigationContainer theme={navigationTheme} >
                { user ? <AppNavigator /> : <AuthNavigator /> }
            </NavigationContainer>
        </AuthContext.Provider>
    )
}
