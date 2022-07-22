import React from 'react';
import {Text, StyleSheet, Platform} from "react-native";

function AppText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "600",
        textTransform: "capitalize",
        textDecorationLine: "underline",
        textAlign: "center",
        lineHeight: 50,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
})

export default AppText;
