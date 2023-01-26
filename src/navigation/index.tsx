import React from "react";
import { useColorScheme } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
/**
 * ? Local & Shared Imports
 */
import { SCREENS } from "@shared-constants";
import { LightTheme, DarkTheme, palette } from "@theme/themes";

// ? Screens
import HomeScreen from "@screens/home/HomeScreen";
import LoginScreen from "@screens/login/LoginScreen";
import VetInfoScreen from "@screens/vet-info/VetInfoScreen";
import ProfileScreen from "@screens/profile/ProfileScreen";
import NotificationScreen from "@screens/notification/NotificationScreen";
import VetScreen from "@screens/vet/VetScreen";
import RegisterScreen from "@screens/register/RegisterScreen";


// ? If you want to use stack or tab or both
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const Navigation = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  const RenderTabIcon = (
    route: any,
    focused: boolean,
    color: string,
    size: number,
  ) => {
    let iconName = "home";
    switch (route.name) {
      case SCREENS.HOME:
        iconName = focused ? "home" : "home";
        break;
      case SCREENS.LOGIN:
        iconName = focused ? "paw" : "paw";
        break;
      case SCREENS.NOTIFICATION:
        iconName = focused ? "shopping-cart" : "shopping-cart";
        break;
      case SCREENS.PROFILE:
        iconName = focused ? "shopping-bag" : "shopping-bag";
        break;
        case SCREENS.VET:
          iconName = focused ? "user-circle" : "user-circle";
          break;
      default:
        iconName = focused ? "home" : "home";
        break;
    }
    return <FontAwesome name={iconName} size={size} color={color} />;
  };
  
const RenderTabNavigation = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) =>
            RenderTabIcon(route, focused, color, size),
          tabBarActiveTintColor: palette.vetblue,
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: isDarkMode ? palette.black : palette.white,
          },
        })}
      >
        <Tab.Screen name={SCREENS.HOME} component={HomeScreen}/>
        <Tab.Screen name={SCREENS.LOGIN} component={LoginScreen} />
        <Tab.Screen name={SCREENS.NOTIFICATION} component={NotificationScreen}/>
        <Tab.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
        <Tab.Screen name={SCREENS.VET} component={VetScreen} />
      </Tab.Navigator>
    );
  };
 
  return (
    <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}
      theme={isDarkMode ? DarkTheme : LightTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.HOME} component={RenderTabNavigation} />
        <Stack.Screen name={SCREENS.VETINFO} component={VetInfoScreen} />
        <Stack.Screen name={SCREENS.REGISTER} component={RegisterScreen} />
       </Stack.Navigator> 
    </NavigationContainer>
  );
};

export default Navigation;
