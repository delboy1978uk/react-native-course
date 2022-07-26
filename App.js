import React from 'react';
import {Text, View} from "react-native";

import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {
    return (
        <ListingDetailsScreen title="Vibrator (model not included)"
                  subtitle="$100"
                  image={require("./app/assets/bunny.jpg")} />
    );
}
