import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../../constants/color";

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
    avustralyaImage: {
        marginTop: 30,
    },
    image: {
        width: width *.9,
        height: 200,
        borderRadius: 20,
    },
    avustralyaTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5
    },
    text: {
        fontSize: 22,
        fontWeight: "bold",
        color: colors.black,
        marginLeft: 4
    },
    like: {
        fontWeight: "800",
        color: colors.black,
        marginRight: 4
    },
    location: {
        fontSize: 16,
        marginLeft: 4,
        fontWeight: "700",
        color: colors.darkgray
    }
});
export default styles;