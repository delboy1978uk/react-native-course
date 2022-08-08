import React from 'react';
import {Image, StyleSheet, View} from "react-native";
import {Formik} from 'formik'

import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import Screen from '../components/Screen'

function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')} />

            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <AppTextInput
                            icon="email"
                            autoCapitalize="none"
                            keyboardType="email-address"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
                        <AppTextInput
                            autoCaptitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
                        <AppButton color="primary" title="Login" onPress={handleSubmit}/>
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
