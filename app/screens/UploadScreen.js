import React from 'react';
import {Modal, StyleSheet, View} from "react-native";
import * as Progress from 'react-native-progress';
import AnimatedLottieView from 'lottie-react-native';

import colors from '../config/colors'
import Text from '../components/Text'

function UploadScreen({onDone, progress = 0, visible = false}) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                { progress < 1
                    ? <Progress.Bar color={colors.primary} progress={progress} width={200}/>
                    : <AnimatedLottieView
                        autoPlay={true}
                        loop={false}
                        onAnimationFinish={onDone}
                        source={require('../assets/animations/done.json')}
                        style={styles.animation}
                    />
                }
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    animation: {
        width: 150,
    },
})

export default UploadScreen;
