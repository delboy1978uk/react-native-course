import React from 'react';
import {Text, StyleSheet} from "react-native";

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
        fontSize: 18,
        fortFamily: "Roboto",
    }
})

export default AppText;
