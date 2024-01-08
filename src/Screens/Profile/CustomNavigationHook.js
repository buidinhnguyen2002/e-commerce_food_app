// CustomNavigationHooks.js
import { useNavigation } from '@react-navigation/native';
import { Routers } from '../../utils/Constant';

export const useNavigateToProfileDetail = () => {
  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate(Routers.ProfileDetail);
  };

  return { navigate };
};

export const useNavigateToSpecialOffer = () => {
    const navigation = useNavigation();
  
    const navigate = () => {
      navigation.navigate(Routers.SpecialOffers);
    };
    return { navigate };
};
export const useNavigateToPayment = () => {
    const navigation = useNavigation();
  
    const navigate = () => {
      navigation.navigate(Routers.PayMethod);
    };
    return { navigate };
};
export const useNavigateToMyFavoriteRestaurants = () => {
    const navigation = useNavigation();
  
    const navigate = () => {
      navigation.navigate(Routers.MyFavoriteRestaurants);
    };
    return { navigate };
};
export const useNavigateToAddress = () => {
    const navigation = useNavigation();
  
    const navigate = () => {
      navigation.navigate(Routers.Address);
    };
    return { navigate };
};
export const useNavigateToNotification = () => {
    const navigation = useNavigation();
  
    const navigate = () => {
      navigation.navigate(Routers.Notification);
    };
    return { navigate };
};
export const useNavigateToSecurity = () => {
    const navigation = useNavigation();
  
    const navigate = () => {
      navigation.navigate(Routers.Security);
    };
    return { navigate };
};
export const useNavigateToLanguage = () => {
    const navigation = useNavigation();
  
    const navigate = () => {
      navigation.navigate(Routers.Language);
    };
    return { navigate };
};
export const useNavigateToHelpCenter = () => {
    const navigation = useNavigation();
  
    const navigate = () => {
      navigation.navigate(Routers.HelpCenter);
    };
    return { navigate };
};
export const useNavigateToInviteFriends = () => {
  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate(Routers.InviteFriends);
  };
  return { navigate };
};
export const useNavigateToProfile= () => {
  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate(Routers.Profile);
  };
  return { navigate };
};
export const useNavigateToAddAddress = () => {
  const navigation = useNavigateToAddAddress();
  const navigate = () => {
    navigation.navigate(Routers.AddNewAddress);
  };
  return {navigate};
}
