import React, {useContext, useState} from 'react';
import {Image, StyleSheet, View} from "react-native";
import jwtDecode from "jwt-decode";
import {useNavigation} from "@react-navigation/native";
import * as Yup from 'yup'

import authApi from '../api/auth';
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';
import {ErrorMessage, FormField, Form, SubmitButton} from '../components/forms'
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen(props) {
    const authContext = useContext(AuthContext);
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({email, password}) => {
        const result = await authApi.login(email, password);

        if (!result.ok) {
            return setLoginFailed(true);
        }

        setLoginFailed(false);
        const user = jwtDecode(result.data);
        authContext.setUser(user);
        authStorage.storeToken(result.data);
    };

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')} />
            <Form
                initialValues={{email: '', password: ''}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error={'Invalid email or password'} visible={loginFailed} />
                <FormField
                    name="email"
                    icon="email"
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
                <FormField
                    name="password"
                    autoCaptitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton color="primary" title="Login" />
            </Form>
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
