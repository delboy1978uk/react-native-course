import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from 'expo-splash-screen';

import AuthContext from "../auth/context"
import authStorage from "../auth/storage"
import AppNavigator from "../navigation/AppNavigator"
import AuthNavigator from "../navigation/AuthNavigator"
import Button from "../components/Button"
import OfflineNotice from "../components/OfflineNotice"
import navigation from "../navigation/rootNavigation"
import Text from "../components/Text"
import WelcomeScreen from "../screens/WelcomeScreen"
import navigationTheme from "../navigation/NavigationTheme"
import Screen from "../components/Screen";

SplashScreen.preventAutoHideAsync();

export default function AppEntryScreen() {
    const [user, setUser] = useState();
    const [isReady, setIsReady] = useState(false);

    const restoreUser = async () => {
        const user = await authStorage.getUser();

        if (user) {
            setUser(user);
        }
    };

    useEffect(() => {
        async function prepare() {
            try {
                await restoreUser();
            } catch (e) {
                console.warn(e);
            } finally {
                setIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (isReady) {
            await SplashScreen.hideAsync();
        }
    }, [isReady]);

    if (!isReady) {
        return null;
    }

    return (
        <View style={{height: '100%'}} onLayout={onLayoutRootView}>
            <AuthContext.Provider value={{user, setUser}}>
                <OfflineNotice/>
                <NavigationContainer ref={navigation.navigationRef} theme={navigationTheme}>
                    {user ? <AppNavigator/> : <AuthNavigator/>}
                </NavigationContainer>
            </AuthContext.Provider>
        </View>
    )
}
