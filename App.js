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
            flex: 1,
            flexDirection: 'row'
        }}>
            <View style={{
                backgroundColor: 'orange',
                width: 100,
                height: 100
            }}/>
            <View style={{
                backgroundColor: 'white',
                width: 100,
                height: 100
            }}/>
            <View style={{
                backgroundColor: 'green',
                width: 100,
                height: 100
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
