import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { FontSize } from "../../utils/Constant";
import { Padding } from "../../utils/StyleUtil";

const  styles = StyleSheet.create({
    page:{
        paddingTop: 20,
        flex: 100,
        paddingHorizontal:20,
        backgroundColor: Colors.white
    },
    icon:{
        width:20,
        height:20,
        alignItems: 'center',
        resizeMode: 'contain',
        alignSelf:'center',
        
    },
    topLeftLogo: {
        width: 40,
        height: 40,
        objectFit: 'contain',
    },
    actionTopRight: {
        width: 25,
        height: 25,
        objectFit: 'contain',
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
        alignSelf: 'center',
    },
    content: {
        flex: 95,
        flexDirection: 'column',
        justifyContent: 'space-between',
    }, 
    editbutton:{
        flex: 1,flexDirection:'row', justifyContent: 'flex-end', alignSelf: 'center'
    },
    buttonContainer: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent:'center',
        alignSelf:'center',
        // shadowColor: 'black',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.3,
        // shadowRadius: 3,
    },
    label: {
        fontSize: 15,
        fontWeight: "normal",
        paddingLeft: 20
    },
    profileIconButton: {
        width:20, height: 20, alignSelf:'center', resizeMode:'contain'
    },
    contentProfileDetail: {
        flex: 80,
        flexDirection: 'column',
        justifyContent: 'space-between', 
    }, 
    avatarEdit:{
        flex: 15,
        width:80,
        flexDirection:'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent:'center'
    },
    separator: {
        height: 1,
        backgroundColor: Colors.grey_02,
        marginVertical: 16,
        // marginTop: 5
    },
    //turn on, turn off
    toggleButton: {
        width: 40,
        height: 24,
        borderRadius: 20,
        backgroundColor: Colors.grey,
        alignItems: 'flex-start', // Để hình tròn nằm bên trái
        justifyContent: 'center',
        padding: 2,
      },
    toggledButton: {
        backgroundColor: Colors.green,
      },
      toggleCircle: {
        width: 18,
        height: 18,
        borderRadius: 10, // Để tạo hình tròn
        backgroundColor: Colors.white,
      },
      toggledCircle: {
        marginLeft: 'auto', // Để hình tròn nằm bên phải khi bật
      },
    item:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'space-between',
        paddingVertical: 5,
        
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
      },
    text:{
        fontSize: 18,
        marginRight: 10,
    },
    changingButton:{
        borderRadius:30,
        backgroundColor:Colors.pastelGreen,
        height: 50,
        justifyContent:'space-around',
        alignSelf:'center',
        width: '100%',
        paddingHorizontal:10
    },
    button:{
        borderRadius:30,
        backgroundColor:Colors.green,
        height: 50,
        justifyContent:'space-around',
        alignSelf:'center',
        width: '100%',
        paddingHorizontal:10,
        alignItems:'center'
    },
    iconActive: {
        transform: [{ rotate: '180deg' }],
    },
    buttonContent:{
        backgroundColor: Colors.green,
    }
  })

  export default styles;