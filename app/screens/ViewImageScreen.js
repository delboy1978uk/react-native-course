import React from "react";
import {Image, View} from "react-native";

import colors from '../config/colors'

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image style={styles.image} source={require('../assets/chair.jpg')} />
        </View>
    );
}

const styles = {
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 40,
        left: 30
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 40,
        right: 30
    },
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    image: {
        resizeMode: "contain",
        width: "100%",
        height: "100%"
    }
};

export default ViewImageScreen;
