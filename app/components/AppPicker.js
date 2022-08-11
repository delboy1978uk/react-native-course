import React, {useState} from 'react';
import {FlatList, Modal, StyleSheet, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import AppButton from './AppButton'
import AppText from './AppText'
import PickerItem from './PickerItem'
import PickerItemComponent from './PickerItemComponent'
import Screen from './Screen'
import defaultStyles from '../config/styles'

function AppPicker({
   icon,
   items,
   onSelectItem,
   PickerItemComponent = PickerItem,
   placeholder,
   selectedItem,
   width = '100%',
   numColumns = 1
}) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[style.container, {width: width}]}>
                    {icon && <MaterialCommunityIcons name={icon} size={25} color={defaultStyles.colors.medium} style={style.icon} />}
                    <AppText style={selectedItem ? [defaultStyles.text, style.text] : [defaultStyles.text, style.placeholder] } >
                        { selectedItem ? selectedItem.label : placeholder }
                    </AppText>
                    <MaterialCommunityIcons name="chevron-down" size={25} color={defaultStyles.colors.medium} />
                </View>
            </TouchableWithoutFeedback>

            <Modal visible={modalVisible}  animationType="slide">
                <Screen style={style.modal}>
                    <AppButton title="Close" onPress={() => setModalVisible(false)}/>
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value}
                        numColumns={numColumns}
                        renderItem={({item}) =>
                            <PickerItemComponent
                                item={item}
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                    } />
                </Screen>
            </Modal>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10
    },
    modal: {
        flex: 1,
        padding: 15
    },
    placeholder: {
        flex: 1,
        color: defaultStyles.colors.medium
    },
    text: {
        flex: 1
    }
})

export default AppPicker;
