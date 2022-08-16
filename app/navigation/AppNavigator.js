import React from 'react';
import {StyleSheet, View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import ListingsScreen from "../screens/ListingsScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from "../navigation/AccountNavigator";
import FeedNavigator from "../navigation/FeedNavigator";

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "tomato",
                tabBarActiveBackgroundColor: "white",
                tabBarInactiveBackgroundColor: "white",
                tabBarInactiveTintColor: "grey",
                tabBarStyle: [
                    {
                        "display": "flex"
                    },
                    null
                ],
                tabBarLabelStyle: {
                    fontSize: 12,
                }
            }}
        >
            <Tab.Screen
                name={'Listings'}
                component={FeedNavigator}
                options={{
                    tabBarIcon: ({size, color}) => <MaterialCommunityIcons name={'home'} size={size} color={color}/>,
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name={'FeedEdit'}
                component={ListingEditScreen}
                options={{
                    tabBarIcon: ({size, color}) => <MaterialCommunityIcons name={'plus'} size={size} color={color}/>
                }}
            />
            <Tab.Screen
                name={'Account'}
                component={AccountNavigator}
                options={{
                    tabBarIcon: ({size, color}) => <MaterialCommunityIcons name={'account'} size={size} color={color}/>,
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

export default AppNavigator;
