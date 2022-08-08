import React from 'react';
import {StyleSheet} from "react-native";
import * as Yup from "yup";

import Screen from '../components/Screen'
import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton
} from '../components/forms'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(0.01).max(10000).test(
        "maxDigitsAfterDecimal",
        "2 digits after decimal or less",
        (number) => /^\d+(\.\d{1,2})?$/.test(number)
    ).label('Price'),
    category: Yup.object().required().label('Category'),
    description: Yup.string().required().min(10).label('Description'),
});

const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },
];


function ListingEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    category: '',
                    description: '',
            }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="title"
                    placeholder="Title"
                    maxLength={150}
                />
                <AppFormField
                    name="price"
                    placeholder="Price"
                    keyboardType="decimal-pad"
                    maxLength={8}
                />
                <AppFormPicker
                    items={categories}
                    name="category"
                    placeholder="Category"
                />
                <AppFormField
                    name="description"
                    maxLength={255}
                    multiline
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton color="primary" title="Add Listing" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})

export default ListingEditScreen;
