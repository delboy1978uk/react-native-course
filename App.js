import React, {useEffect, useState} from 'react';
import {StyleSheet} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import Screen from './app/components/Screen';
import Text from "./app/components/Text";
import Button from "./app/components/Button"
import {MaterialCommunityIcons} from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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


const StackNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: 'dodgerb@lue'},
            headerTintColor: 'white',
        }}
        initialRouteName={'Tweets'}
    >
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

const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={{
            "tabBarActiveTintColor": "white",
            "tabBarActiveBackgroundColor": "tomato",
            "tabBarInactiveBackgroundColor": "#eee",
            "tabBarInactiveTintColor": "black",
            "tabBarStyle": [
                {
                    "display": "flex"
                },
                null
            ]
        }}
    >
        <Tab.Screen
            name={'Feed'}
            component={Tweets}
            options={{
                tabBarIcon: ({size, color}) => <MaterialCommunityIcons name={'home'} size={size} color={color}/>
            }}
        />
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
