import React from 'react';
import {View} from "react-native";

import AppPicker from '../AppPicker'
import PickerItemComponent from '../PickerItemComponent'
import ErrorMessage from "./ErrorMessage";
import {useFormikContext} from "formik";

function AppFormPicker({items, name, PickerItemComponent, placeholder, width, numColumns, ...otherProps}) {
    const {setFieldValue, touched, values, errors} = useFormikContext()

    return (
        <View>
            <AppPicker
                items={items}
                numColumns={numColumns}
                onSelectItem={(value) => {
                    setFieldValue(name, value);
                    console.log(name, value);
                }}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]} {...otherProps}
                width={width}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </View>
    );
}

export default AppFormPicker;
