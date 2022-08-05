import React, {useState} from 'react';
import {FlatList, Modal, StyleSheet, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import AppButton from './AppButton'
import AppText from './AppText'
import PickerItem from './PickerItem'
import Screen from './Screen'
import colors from '../config/colors'
import styles from '../config/styles'

function AppPicker({ icon, items, placeholder, ...otherProps }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={style.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={25} color={colors.medium} style={style.icon} />}
                    <AppText style={[styles.text, style.text]} {...otherProps}>
                        { placeholder }
                    </AppText>
                    <MaterialCommunityIcons name="chevron-down" size={25} color={colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <AppButton title="Close" onPress={() => setModalVisible(false)}/>
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({item}) =>
                            <PickerItem
                                label={item.label}
                                onPress={() => alert(item.label)}
                            />
                    } />
                </Screen>
            </Modal>
        </>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    },
    modal: {
        flex: 1,
        backgroundColor: 'cyan',
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 40
    }
})

export default AppPicker;
