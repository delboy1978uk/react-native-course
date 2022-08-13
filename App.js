import React, {useEffect, useState} from 'react';
import {StyleSheet} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Screen from './app/components/Screen';
import Text from "./app/components/Text";
import Button from "./app/components/Button";

const Link = () => {
    const navigation = useNavigation();

    return (
        <Button title={'click'} onPress={() => navigation.navigate('TweetDetails', { id : 1 } )} />
    );
};

const TweetDetails = ({ route }) => (
    <Screen>
        <Text>~Details {route.params.id}</Text>
    </Screen>
);

const Tweets = ({ navigation }) => (
    <Screen>
        <Text>Tweets</Text>
        <Link />
    </Screen>
);

const Account = () => (
    <Screen>
        <Text>Account</Text>
    </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: 'dodgerb@lue'},
            headerTintColor: 'white',
        }}
        initialRouteName={'Tweets'} >
        <Stack.Screen
            name={'TweetDetails'}
            component={TweetDetails}
            options={ ({route}) => ({
                title: 'Tweet id ' + route.params.id,
                headerStyle: {
                    backgroundColor: 'tomato',
                },
                headerTintColor: 'white',
                headerShown: true,
            })}
        />
        <Stack.Screen name={'Tweets'} component={Tweets} />
    </Stack.Navigator>
)

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name={'Feed'} component={Tweets} />
        <Tab.Screen name={'Account'} component={Account} />
    </Tab.Navigator>
)

export default function App() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:10,
    },

})
