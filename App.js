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
            }}>

            </View>
        </View>
    );
}
