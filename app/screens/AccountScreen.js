import React, {useContext} from 'react';

import {FlatList, StyleSheet, View} from "react-native";
import ListItem from '../components/ListItem'
import Icon from '../components/Icon'
import Screen from '../components/Screen'
import colors from '../config/colors'
import ListItemSeparator from "../components/ListItemSeparator";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        },
        targetScreen: 'Listings'
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: 'Messages'
    },
];

function AccountScreen({ navigation }) {
    const { user, setUser } = useContext(AuthContext);
    const hanndleLogout = () => {
        setUser(null);
        authStorage.removeToken();
    };

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={user.name}
                    subtitle={user.email}
                    image={require('../assets/delboy.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    ItemSeparatorComponent={() => <ListItemSeparator />}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={ ({item}) =>
                        <ListItem
                            title={item.title}
                            IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
                            onPress={() => navigation.navigate(item.targetScreen) }
                        />
                    }
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={
                    <Icon name="logout" backgroundColor="#ffe66d" />
                }
                onPress={hanndleLogout}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
        marginVertical: 20
    }
});

export default AccountScreen;
