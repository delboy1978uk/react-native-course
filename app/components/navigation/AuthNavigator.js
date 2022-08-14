import React from 'react';
import {View} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";

import LoginScreen from "../../screens/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen";
import WelcomeScreen from "../../screens/WelcomeScreen";

const Stack = createStackNavigator();

function AuthNavigator(props) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={'WelcomeScreen'}
        >
            <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
            <Stack.Screen name={'RegisterScreen'} component={RegisterScreen} />
            <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;
