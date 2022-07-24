import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";

import AppButton from '../components/AppButton'

function WelcomeScreen(props) {
    return (
        <ImageBackground blurRadius={10} style={styles.background} source={require('../assets/background.jpg')} >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.tagline}>Sell your shit</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="login" color="primary" onPress={() => alert('login')}></AppButton>
                <AppButton title="register" color="secondary" onPress={() => alert('register')}></AppButton>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: "center"
    },
    buttonContainer: {
        width: "100%",
        padding: 20
    },
    tagline: {
        fontSize: 40,
        paddingTop: 10
    },
});

export default WelcomeScreen;
