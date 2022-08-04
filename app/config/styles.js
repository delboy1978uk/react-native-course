
import colors from "./colors";
import {Platform} from "react-native";

export default {
    text: {
        color: colors.dark,
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir",
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto",
            },
        })
    }

}
