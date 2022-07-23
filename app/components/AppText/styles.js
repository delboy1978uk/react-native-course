import {Platform, StyleSheet} from "react-native";

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

export default styles;
