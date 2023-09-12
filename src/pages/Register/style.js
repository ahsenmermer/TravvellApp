import { StyleSheet,Dimensions } from "react-native";
import colors from "../../constants/color";

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
    backgroundLogin:{
        flex: 1,
        width,
        height,
    },
    btnGoogle: {
        width: width * 0.5,
        borderRadius: 24,
        backgroundColor: colors.lightOrange,
        marginHorizontal: 10,
        height: 50,
        flexDirection:"row"
    },
    btnFacebook: {
        width: 60,
        borderRadius: 26,
        backgroundColor: "rgba(255,255,255,.6)",
        marginHorizontal: 10,
        height: 50,

    },
    btnTwitter: {
        width: 60,
        borderRadius: 26,
        backgroundColor: "rgba(255,255,255,.6)",
        marginHorizontal: 10,
        height: 50,
    },
    image:{
        width:25,
        height:25,
        right:15,
        borderRadius:15
    },
    faceImage:{
        width:30,
        height:30,
        borderRadius:15
    },
    twitterImage:{
        width:40,
        height:40,
        borderRadius:15
    },
    container: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "center",
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        color: colors.antrasit,
        textAlign: "center",
        padding: 20,
        marginTop: 20
    },
    text:{
        fontSize: 18,
        textAlign: "center",
        marginTop: 10,
        color: colors.gray
    },
    btnContainer: {
        alignSelf: "center",
        marginTop: 20,
    },
    inputEmail: {
        width: width * 0.7,
        height: 50,
        borderRadius: 20,
        backgroundColor: colors.white,

    },
    inputPassword: {
        width: width * 0.7,
        height: 50,
        borderRadius: 20,
        backgroundColor: colors.white,
    },
    btnLogin: {
        width: width * 0.7,
        height: 50,
        borderRadius: 20,
        backgroundColor: colors.lightPink,
        marginTop: 30,
    },
    buttonText: {
        fontSize: 18
    },
});

export default styles;