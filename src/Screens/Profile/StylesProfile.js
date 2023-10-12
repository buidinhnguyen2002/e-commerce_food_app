import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { FontSize } from "../../utils/Constant";

const  styles = StyleSheet.create({
    page:{
        paddingTop: 20,
        backgroundColor: 'white',
        flex: 100,
        paddingHorizontal: 20
    },
    icon:{
        width:20,
        height:20,
        alignItems: 'center',
        resizeMode: 'contain',
        alignSelf:'center',
        
    },
    header:{
        flex: 5,
        flexDirection: 'row',
        height: 30,
        justifyContent: 'flex-start'
    },
    avatar: {
        flex: 15,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',backgroundColor:'red'
    },
    content: {
        flex: 90,
        flexDirection: 'column',
        justifyContent: 'space-between', 
    }, 
    editbutton:{
        flex: 1,flexDirection:'row', justifyContent: 'flex-end', alignSelf: 'center'
    },
    buttonContainer: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    label: {
        fontSize: 15,
        fontWeight: "normal",
        paddingLeft: 20
    },
    profileIconButton: {
        width:15, height: 15, alignSelf:'center', resizeMode:'contain'
    },
    contentProfileDetail: {
        flex: 95,
        flexDirection: 'column',
        justifyContent: 'space-between', 
        backgroundColor: 'green'
    }, 
    avatarEdit:{
        flex: 15,
        width:80,
        flexDirection:'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        alignSelf: 'center',
        backgroundColor:'red'
    }
  })

  export default styles;