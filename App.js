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

    return (
        <View style={{
            backgroundColor: '#fff',
            flex: 1
        }}>
            <View style={{
                backgroundColor: 'orange',
                flex: 2
            }}/>
            <View style={{
                backgroundColor: 'white',
                flex: 1
            }}/>
            <View style={{
                backgroundColor: 'green',
                flex: 1
            }}/>
        </View>
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
