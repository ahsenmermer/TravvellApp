import { StyleSheet } from "react-native";
import colors from "../../constants/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.white
    },
    imageContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
    },
    inContainer: {
        flexDirection: "row"
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: colors.black
    },
    categories: {
        marginTop: 20
    },

});
export default styles;