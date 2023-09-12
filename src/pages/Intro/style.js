import { StyleSheet,Dimensions } from "react-native";
import colors from "../../constants/color";

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
    backgroundImage:{
        flex:1,
        width,
        height,
        paddingTop:120,
        alignItems:"center"
    },
    title:{
        color:"white",
        fontSize:40,
        width:"66.5%",
        alignSelf:"center",
        textAlign:"center",
    },
    titleColor:{
        fontSize:40,
        color:colors.lightOrange,
        
    },
    button:{
        width:70,
        height:40,
        backgroundColor:colors.white,
        borderRadius:20,
        position:"absolute",
        bottom:50,
    },
    buttonText:{
        color:colors.black,
        fontSize:26,
        lineHeight:22,
    }
});

export default styles;