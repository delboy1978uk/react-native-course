import React, {useState} from 'react';

import Screen from '../components/Screen'
import {Image, StyleSheet} from "react-native";

import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'

function LoginScreen(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')} />
            <AppTextInput
                autocaptitalize="none"
                autocorrect={false}
                keyboardType="email-address"
                onChange={text => setEmail(text)}
                icon="email"
                placeholder="Email"
            />
            <AppTextInput
                autocaptitalize="none"
                autocorrect={false}
                icon="lock"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
                onChange={text => setPassword(text)}
            />
            <AppButton color="primary" title="Login" onPress={() => console.log(email, password)}/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    }
})

export default LoginScreen;
