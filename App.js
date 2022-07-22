import React from 'react';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import {View} from "react-native";

export default function App() {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <View style={{
                backgroundColor: "dodgerblue",
                height: 100,
                width: 100,
                shadowColor: "grey",
                shadowOffset: {
                    width: 10,
                    height: 10,
                },
                shadowOpacity: 1,
                elevation: 20,
                padding: 20,
                paddingHorizontal: 10,
                paddingLeft: 30,
            }}>
                <View style={{
                    backgroundColor: "gold",
                    width: 50,
                    height: 50,
                }}></View>
            </View>
            <View style={{
                backgroundColor: "tomato",
                width: 100,
                height: 100,
                margin: 20,
            }} ></View>
        </View>
    );
}
