import React from 'react';
import {View} from "react-native";

import AppPicker from '../AppPicker'
import ErrorMessage from "./ErrorMessage";
import {useFormikContext} from "formik";

function AppFormPicker({items, name, placeholder, width, ...otherProps}) {
    const {setFieldValue, touched, values, errors} = useFormikContext()

    return (
        <View>
            <AppPicker
                items={items}
                placeholder={placeholder}
                onSelectItem={(value) => {
                    setFieldValue(name, value);
                    console.log(name, value);
                }}
                selectedItem={values[name]} {...otherProps}
                width={width}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </View>
    );
}

export default AppFormPicker;
