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
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: "center",
            alignContent: "center"
        }}>
            <View style={{
                backgroundColor: 'green',
                width: 400,
                height: 100,
                flexShrink: 1
            }}/>
            <View style={{
                backgroundColor: 'tomato',
                width: 100,
                height: 100
            }}/>
            <View style={{
                backgroundColor: 'lime',
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
