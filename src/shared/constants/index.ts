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
  REGISTER: "RegisterScreen",
  VET_REGISTER: "VetRegisterScreen",
  VET_SERVICES: "VetServicesScreen",

  CLINIC_SERVICES: "ClinicServices",
  EMERGENCY_SERVICES: "EmergencyServices",
  HOME_SERVICES: "HomeServices",
};

export function navigateToScreen(screenName: string) {
  if (NavigationService.navigationRef.isReady()) {
    NavigationService.navigationRef.navigate(screenName);
  }
}

export const textValues = ['Köpek', 'Kedi', 'Hamster', 'Tavşan', 'Büyükbaş', 'Küçükbaş', 'Kuş'];
