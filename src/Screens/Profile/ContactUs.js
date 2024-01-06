import { ScrollView, View } from 'react-native';
import styles from './Profile.Styles';
import { ButtonWithIcon } from './ButtonProfile';

const ContactUs = (props) => {
    const contactUs = [
        { id: "service",iconSource: require('../../../assets/Icons/headphones.png'), label: "Customer Service" },
        { id: "whatsApp",iconSource: require('../../../assets/Icons/whatsapp.png'), label: "WhatsApp" },
        { id: "website",iconSource: require('../../../assets/Icons/world-wide-web.png'), label: "Website" },
        { id: "facebook",iconSource: require('../../../assets/Icons/facebook.png'), label: "Facebook" },
        { id: "twitter",iconSource: require('../../../assets/Icons/twitter.png'), label: "Twitter" },
        { id: "instagram",iconSource: require('../../../assets/Icons/instagram.png'), label: "Instagram" },
       
      ];
    return(
        <ScrollView showsVerticalScrollIndicator ={false} style = {styles.page}>
            {/* <View style = {styles.page}> */}
            {/* <View>
                <Text>{props.navigation.route.title}</Text>
            </View> */}
            {contactUs.map((item) => (
                <ButtonWithIcon
                    key={item.id}
                    id={item.id}
                    iconSource={item.iconSource}
                    label={item.label}
                    onPress={null}
                />
            ))}
            {/* </View> */}
         </ScrollView>
    )

}
export default ContactUs;