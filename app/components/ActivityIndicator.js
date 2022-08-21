import React, {useCallback, useEffect, useRef} from 'react';

import AnimatedLottieView from "lottie-react-native";
import {View} from "react-native";

function ActivityIndicator({ visible = false }) {
    if (!visible) {
        return null;
    }

    // temp ios fix begin
    // @see https://github.com/lottie-react-native/lottie-react-native/issues/832
    const lottieRef = useRef(null);
    useEffect(() => {
        lottieRef.current?.reset();
        setTimeout(() => {
            lottieRef.current?.play();
        }, 100)

    }, []);
    // fix end

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <AnimatedLottieView
                ref={lottieRef}
                source={require('../assets/animations/loader.json')}
                autoPlay
                loop
                style={{height: 100, width: 100}}
                speed={1.5}
            />
        </View>
    );
}

export default ActivityIndicator;
