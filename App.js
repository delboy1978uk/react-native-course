import React from 'react';
import * as Notifications from 'expo-notifications';

// import AppEntryScreen from './app/screens/AppEntryScreen'
import Button from "./app/components/Button";
import Screen from "./app/components/Screen";
import colors from "./app/config/colors";


Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

export default function App() {
    const showNotification = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Time to ROCK 😎",
                body: 'Welcome to sell that shit!',
                data: { data: 'goes here' },
            },
            trigger: { seconds: 2 },
        });
    }

    return (
        <Screen>
            <Button title={'click me!'} color={'primary'} onPress={showNotification} />
        </Screen>
        // <AppEntryScreen />
    )
}
