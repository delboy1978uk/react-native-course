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

export default function App() {
    console.log(Dimensions.get('screen'))

    return (
        <SafeAreaView style={[styles.container, customStyle]}>
            <View style={{
                backgroundColor: 'dodgerblue',
                width: '50%',
                height: 70
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
