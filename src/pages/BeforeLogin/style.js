import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/color";

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
    background:{
        flex:1,
        width,
        height,
        justifyContent:"center",
        alignItems:"center",
        
    },
    title:{
        fontSize:28,
        color:colors.black,
        fontWeight:"bold",
        alignSelf:"center",
        textAlign:"center",    
    },
    container:{
        position:"absolute",
        bottom:180,
        padding:10,
        margin:10,
        alignItems:"center"
    },
    btn:{
        backgroundColor:colors.lightPink,
        width:width*0.5,
        borderRadius:18,
        height:45
    },
    innerBtn:{
        backgroundColor:"rgba(145,125,215,1)",
        borderRadius:18,
        width:width*0.5,
        height:45
    },
    innerContainer:{
        marginTop:20,
       
    },
    buttonText:{
        fontSize:18,
        textAlignVertical:"center",
        textAlign:"center",
    }
});

export default styles;