import { StyleSheet , Dimensions} from "react-native";
import colors from "../../constants/color";

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.white
    },
    innerContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text: {
        fontSize: 22,
        color: colors.darkPink
    },
    otherText: {
        fontSize: 22,
        color: colors.blue
    },
    title: {
        fontSize: 16
    },
    image: {
        width: 50,
        height: 50
    },
    input: {
        borderRadius: 18,
        backgroundColor: colors.white,
        marginTop:20,
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent:"space-between",
        padding:15,
        marginTop:20
    },
    camping: {
        width: 50,
        height: 50,
    },
    iconItemContainer: {
        backgroundColor: 'white',
        shadowColor: '#000', // Gölge rengi
        shadowOffset:{width:2,
        height: 2,},
        shadowOpacity: 0.25, // Gölge opaklığı
        shadowRadius: 3.84, // Gölge yarıçapı
        elevation: 5, // Elevation (yalnızca Android için),
        padding:7,
        borderRadius:12
    },
    inText:{
       marginTop:8
    },
    inImage:{
        width:width*0.9,
        height:height*0.4,
        marginTop:5,
        borderRadius:18
    },
    titleDisc:{
        fontSize:28,
        fontWeight:"bold",
        color:colors.black
    },
    options:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    titleOptions:{
        fontSize:16,
        fontWeight:"400"
    },
    titleTrend:{
        fontWeight:"800",
        fontSize:16,
        color:colors.lightPink
    },
});

export default styles;