import React from 'react';
import {StyleSheet, View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';

import AccountNavigator from "../navigation/AccountNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from "../screens/ListingsScreen";
import NewListingButton from "../navigation/NewListingButton";
import FeedNavigator from "../navigation/FeedNavigator";
import Icon from "../components/Icon";
import routes from "../navigation/routes";

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
                options={ ({ navigation }) => ({
                        tabBarButton: props => (<NewListingButton onPress={ () => navigation.navigate('FeedEdit') } />)
                    })
                }
            />
            <Tab.Screen
                name={'Summary'}
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
