import {StatusBar} from 'expo-status-bar';
import {
    Alert,
    StyleSheet,
    Text,
    SafeAreaView,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TouchableHighlight,
    Button,
    Platform
} from 'react-native';

export default function App() {
    const handlePress = () => alert('you clicked on shit!');
    const handleImagePress = () => alert('you clicked on shit!');

    return (
        <SafeAreaView style={[styles.container, customStyle]}>
            <Text numberOfLines={2} onPress={handlePress}>AYE! how fucking awesome is this?! This is a long long long
                piece of text, many many many many many many many many many many many many many hunners infinite
                broomsticks long.</Text>
            <Image source={require('./assets/favicon.png')}/>
            <TouchableHighlight  onPress={handleImagePress} >
                <Image source={{
                    uri: 'https://picsum.photos/200/300',
                    width: 200,
                    height: 300
                }}/>
            </TouchableHighlight>
            <Button
                color="orange"
                title={"Click Me!"}
                onPress={() => Alert.alert('Incredible news', 'button tapped! Would you like to learn more?', [
                    {text: 'yes', onPress: () => Alert.prompt('We want your details', 'we probably wont sell them', text => alert(text))},
                    {text: 'no', onPress: () => alert('Naw')}
                ])}
            />
        </SafeAreaView>
    );
}

const customStyle = {backgroundColor: '#eee'};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
});
