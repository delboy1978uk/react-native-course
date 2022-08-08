import React from 'react';
import {Image, StyleSheet, View} from "react-native";
import {Formik} from 'formik'
import * as Yup from 'yup'

import AppText from '../components/AppText'
import AppFormField from '../components/AppFormField'
import ErrorMessage from '../components/ErrorMessage'
import Screen from '../components/Screen'
import SubmitButton from '../components/SubmitButton'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')} />

            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                {() => (
                    <View> 
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
                        <SubmitButton color="primary" title="Login" />
                    </View>
                )}
            </Formik>
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
