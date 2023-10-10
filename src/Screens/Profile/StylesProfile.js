import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";

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
        alignSelf:'center'
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
        borderBottomWidth: 1,
        borderColor: Colors.grey,
        alignSelf: 'center'
    },
    content: {
        flex: 90,
        flexDirection: 'column',
        justifyContent: 'space-between', 
    }, 
   
  })

  export default styles;