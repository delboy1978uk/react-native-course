import React from 'react';
import {Text, StyleSheet} from "react-native";

import defaultStyles from '../config/styles'
import colors from "../config/colors";

function AppText({children, style, ...otherProps}) {
    return (
        <Text style={[defaultStyles.text, style]} {...otherProps} >
            {children}
        </Text>
    )
}

export default AppText;
