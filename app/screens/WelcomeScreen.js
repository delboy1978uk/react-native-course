import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

import Button from '../components/Button'

function WelcomeScreen(props) {
    const navigation = useNavigation();

    return (
        <ImageBackground blurRadius={10} style={styles.background} source={require('../assets/background.jpg')} >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.tagline}>Sell your shit</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="login" color="primary" onPress={() => navigation.navigate('LoginScreen')}></Button>
                <Button title="register" color="secondary" onPress={() => navigation.navigate('RegisterScreen')}></Button>
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
