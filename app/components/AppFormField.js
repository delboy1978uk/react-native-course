import React from 'react';
import {useFormikContext} from "formik";
import {View} from "react-native";

import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({name, ...otherProps}) {
    const {setFieldTouched, handleChange, errors, values, touched} = useFormikContext()

    return (
        <View>
            <AppTextInput
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                value={values[name]}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </View>
    );
}

export default AppFormField;
