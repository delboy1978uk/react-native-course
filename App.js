import React, {useEffect, useState} from 'react';
import {StyleSheet} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import Screen from './app/components/Screen';
import Text from "./app/components/Text";
import Button from "./app/components/Button";

export default function App() {

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

    const Stack = createStackNavigator();
    const StackNavigator = () => (
        <Stack.Navigator initialRouteName={'Tweets'} >
            <Stack.Screen
                name={'TweetDetails'}
                component={TweetDetails}
                options={ ({route}) => ({
                    title: route.params.id,
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
