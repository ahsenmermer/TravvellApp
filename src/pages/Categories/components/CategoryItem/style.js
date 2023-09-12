import { StyleSheet } from "react-native";
import colors from "../../../../constants/color";
const styles = StyleSheet.create({
    imageBeach: {
        width: 50,
        height: 50,
        marginRight: 12
    },
    titleBeach: {
        fontSize: 18,
        fontWeight: "bold",
    },
    desc: {
        fontSize: 12,
    },
    beach: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 26,
        marginVertical: 10,
        padding: 20,
        alignItems: "center"
    },

});

export default styles