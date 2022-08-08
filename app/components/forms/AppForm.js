import React from 'react';
import {Formik} from "formik";
import {View} from "react-native";

function AppForm({initialValues, onSubmit, validationSchema, children}) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => (
                <View>
                    {children}
                </View>
            )}
        </Formik>
    );
}

export default AppForm;
