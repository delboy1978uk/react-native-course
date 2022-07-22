import React from 'react';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import {Text, View} from "react-native";

export default function App() {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text style={{
                fontSize: 30,
                fontStyle: "italic",
                fontWeight: "600",
                textTransform: "capitalize",
                textDecorationLine: "underline",
                textAlign: "center",
                lineHeight: 50
            }}>This is fucking awesome! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquam culpa ea nostrum, nulla, odit pariatur quaerat, quis quos repellendus temporibus. Aspernatur at consectetur, dolor magnam repellat sit ut.</Text>
        </View>
    );
}
