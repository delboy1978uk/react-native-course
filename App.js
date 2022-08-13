import React, {useEffect, useState} from 'react';
import {StyleSheet} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Screen from './app/components/Screen';
import Text from "./app/components/Text";

export default function App() {
    const Tweets = () => (
        <Screen>
            <Text>Tweets</Text>
        </Screen>
    );

    const TweetDetails = () => (
        <Screen>
            <Text>~Details</Text>
        </Screen>
    );

    const Stack = createStackNavigator();
    const StackNavigator = () => (
        <Stack.Navigator initialRouteName={'Tweets'} >
            <Stack.Screen name={'Details'} component={TweetDetails} />
            <Stack.Screen name={'Tweets'} component={Tweets} />
        </Stack.Navigator>
    )

    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:10,
    },

})
