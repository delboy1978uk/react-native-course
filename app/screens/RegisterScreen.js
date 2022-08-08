import React from 'react';
import {Image, StyleSheet, View} from "react-native";
import * as Yup from 'yup'

import {AppFormField, AppForm, SubmitButton} from '../components/forms'
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).label('Email'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')} />

            <AppForm
                initialValues={{name: '', email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="name"
                    icon="account"
                    placeholder="Name"
                />
                <AppFormField
                    name="email"
                    icon="email"
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
                <AppFormField
                    name="password"
                    autoCaptitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton color="primary" title="Register" />
            </AppForm>
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

export default RegisterScreen;
