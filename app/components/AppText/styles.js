import {Platform, StyleSheet} from "react-native";

import colors from '../../config/colors'

const styles = StyleSheet.create({
    text: {
        fontWeight: "600",
        color: colors.black,
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir",
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto",
            },
        })
    }
})

export default styles;
