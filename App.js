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
                borderWidth: 10,
                borderColor: "royalblue",
                borderRadius:  50
            }}>

            </View>
        </View>
    );
}
