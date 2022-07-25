import React from 'react';
import {Text, View} from "react-native";

import Card from './app/components/Card';

export default function App() {
    return (
        <View style={{
            backgroundColor: '#f8f4f4',
            padding: 20,
            paddingTop: 100,
            flex: 1,
        }}>
            <Card title="Vibrator (model not included)"
                  subtitle="$100"
                  image={require("./app/assets/bunny.jpg")} />
        </View>
    );
}
