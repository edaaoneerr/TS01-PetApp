import * as NavigationService from 'react-navigation-helpers';

// ? Screens
export const SCREENS = {
  HOME: "HomeScreen",
  SEARCH: "SearchScreen",
  NOTIFICATION: "NotificationScreen",
  PROFILE: "Profile",
  VET: "VetScreen",
  VETINFO: 'VetInfoScreen',
  LOGIN: "LoginScreen",
  REGISTER: "RegisterScreen"
};

export function navigateToScreen(screenName: string) {
  if (NavigationService.navigationRef.isReady()) {
    NavigationService.navigationRef.navigate(screenName);
  }
}