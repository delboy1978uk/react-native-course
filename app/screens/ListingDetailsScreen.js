import React, {useEffect} from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from "react-native";
import {Image} from 'react-native-expo-image-cache';
import * as Notifications from "expo-notifications";
import * as Yup from "yup";

import colors from '../config/colors'
import {
    Form,
    FormField,
    SubmitButton
} from '../components/forms'
import ListItem from '../components/ListItem'
import Text from '../components/Text'
import listingsApi from "../api/listings";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

const validationSchema = Yup.object().shape({
    message: Yup.string().required().min(2).label('Message seller')
});

function ListingDetailsScreen({ route }) {
    const sendNotification = async ({message}) => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "SELL that SHIT 😎",
                body: message,
                data: { data: 'goes here' },
            },
            trigger: { seconds: 2 },
        });
    }

    const handleSubmit = async (message, { resetForm }) => {
        sendNotification(message);
        resetForm();
    }

    const listing = route.params;

    return (
        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
        >
            <Image style={styles.image} tint="light" preview={{uri: listing.images[0].thumbnailUrl}} uri={listing.images[0].url } />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{listing.title}</Text>
                <Text style={styles.price}>${listing.price}</Text>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require('../assets/gretl.png')}
                        title="Gretl Michielsen"
                        subtitle="5 listings"
                    />
                </View>
                <Form
                    initialValues={{
                        message: '',
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <FormField
                        name="message"
                        maxLength={255}
                        placeholder="Message"
                    />
                    <SubmitButton color="primary" title="Contact Seller" />
                </Form>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: '100%',
        height: 250
    },
    detailsContainer: {
        padding: 20,
    },
    userContainer: {
        marginVertical: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.secondary,
        marginVertical: 10
    }
});

export default ListingDetailsScreen;
