import {Platform, StyleSheet} from "react-native";

import colors from '../../config/colors'

const styles = StyleSheet.create({
    text: {
        fontWeight: "600",
        textTransform: "uppercase",
        textAlign: "center",
        lineHeight: 50,
        color: colors.white,
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir",
            },
            android: {
                fontSize: 18,
                fontFamily: "Robooto",
            },
        })
    }
})

export default styles;
