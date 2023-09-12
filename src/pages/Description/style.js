import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/color";

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
    image: {
        width,
        height: height * .5
    },
    titleContainer: {
        justifyContent: "flex-end",
        width,
        height: height * .5,
    },
    titles: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: width * .5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
        borderTopRightRadius: 20,
        marginBottom: 40
    },
    like: {
        position: "absolute",
        right: 20,
        top: 20,
        backgroundColor: colors.white,
        padding: 7,
        borderRadius: 100
    },
    title: {
        fontSize: 18,
        fontWeight: "700"
    },
    inTitle: {
        fontWeight: "500"
    },
    container: {
        backgroundColor: colors.white,
        borderWidth: 1,
        width,
        height: height * .9,
        borderRadius: 40,
        marginTop: -40
    },
    hotelContainer: {
        width: 60,
        height: 80,
        backgroundColor: colors.lightGray,
        borderRadius: 20,
        alignItems: "center",
        margin: 20,
        justifyContent:"center"
    },
    inImage: {
        width: 45,
        height: 45,
    },
    innerContainer: {
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    text:{
        fontSize:16,
        fontWeight:"500"
    },
    person:{
        flexDirection:"row",
        alignItems:"center",
    },
    men:{
        marginLeft:-25, 
    },
    plus:{
        width:40,
        height:40,
        backgroundColor:colors.lightGray,
        borderRadius:25,
        marginLeft:-22,
        justifyContent:"center",
        alignItems:"center"
    },
    pluss:{
        fontSize:16,
    },
    trip:{
        borderWidth:1.5,
        borderColor:colors.darkgray,
        width:100,
        height:50,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"
    },
    personsRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:20,
        alignItems: 'center',
    },
    plan:{
        fontSize:16,
        fontWeight:"600"
    },
    desc:{
        flexDirection:"row",
        padding:20,
        width:"50%",
        justifyContent:"space-between"
    },
    descTitle:{
        fontSize:18,
        color:colors.lightPink,
        fontWeight:"bold"
    },
    review:{
        fontSize:18,
        color:colors.darkgray
    },
    lorem:{
        fontSize:16
    }
});

export default styles;