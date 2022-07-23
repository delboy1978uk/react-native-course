import React from 'react';
import {Text, StyleSheet, Platform} from "react-native";

function AppText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontStyle: "italic",
        fontWeight: "600",
        textTransform: "capitalize",
        textDecorationLine: "underline",
        textAlign: "center",
        lineHeight: 50,
        color: "tomato",
        ...Platform.select({
            ios: {
                fontSize: 20,
                fortFamily: "Avenir",
            },
            android: {
                fontSize: 18,
                fortFamily: "Robooto",
            },
        })
    }
})

export default AppText;
