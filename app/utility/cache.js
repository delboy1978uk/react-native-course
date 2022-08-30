import AsyncStorage from "@react-native-async-storage/async-storage";

const prefix = 'cache';

const store = async (key, valuse) => {
    try {
        const item = {
            value,
            timeatamp: Date.now()
        };
        await  AsyncStorage.setItem(prefix + key, JSON.stringify(item));
    } catch (error) {
        console.log(error);
    }
}

const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(prefix + key);
        const item  = JSON.parse(value);

        if (!item) {
            return null;
        }

        
    } catch (error) {
        console.log(error);
    }

};

export default {
    get,
    store
}
