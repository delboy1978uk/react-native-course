import {StatusBar} from 'expo-status-bar';
import {
    Alert,
    Dimensions,
    StyleSheet,
    Text,
    SafeAreaView,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TouchableHighlight,
    Button,
    Platform,
    View
} from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks";

export default function App() {
    // use landscape property of useDeviceOrientation()
    const {landscape} = useDeviceOrientation();

    return (
        <SafeAreaView style={[styles.container, customStyle]}>
            <View style={{
                backgroundColor: 'dodgerblue',
                width: '100%',
                height: landscape ? '100%' : '30%'
            }}>

            </View>
        </SafeAreaView>
    );
}

const customStyle = {backgroundColor: '#eee'};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
});
