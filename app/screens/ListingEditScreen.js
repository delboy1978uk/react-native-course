import React from 'react';
import {StyleSheet} from "react-native";
import * as Yup from "yup";

import CategoryPickerItem from '../components/CategoryPickerItem'
import PickerItem from '../components/PickerItem'
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
    { label: "Books", value: 1, backgroundColor: 'pink', icon: 'book-open-page-variant'  },
    { label: "Cameras", value: 2, backgroundColor: 'turquoise', icon: 'camera'  },
    { label: "Cars", value: 3, backgroundColor: 'dodgerblue', icon: 'car'  },
    { label: "Clothing", value: 4, backgroundColor: 'darkblue',  icon: 'shoe-heel'},
    { label: "Electrical", value: 5, backgroundColor: 'red', icon: 'laptop'  },
    { label: "Furniture", value: 6, backgroundColor: 'tomato', icon: 'lamp' },
    { label: "Games", value: 7, backgroundColor: 'darkturquoise', icon: 'cards'  },
    { label: "Movies", value: 8, backgroundColor: 'purple', icon: 'movie-open-outline'  },
    { label: "Music", value: 9, backgroundColor: 'orange', icon: 'headphones'  },
    { label: "Sports", value: 10, backgroundColor: 'green', icon: 'basketball'  },
    { label: "Tools", value: 11, backgroundColor: 'lightblue', icon: 'wrench'  },
    { label: "Other", value: 12, backgroundColor: 'green', icon: 'apps'  },
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
                    width={120}
                />
                <AppFormPicker
                    items={categories}
                    name="category"
                    numColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width={300}
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
