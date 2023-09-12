import { StyleSheet,Dimensions } from "react-native";
import colors from "../../constants/color";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.white
    },
    imageContainer:{
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: colors.black
    },
});

export default styles;