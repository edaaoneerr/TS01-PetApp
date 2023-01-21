import React from "react";
import { useTheme } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import VetAddress from "../pages/vet-address/VetAddress";
import VetClinic from "../pages/vet-clinic/VetClinic";
import VetMedia from "../pages/vet-media/VetMedia";
import VetComments from "../pages/vet-comments/VetComments";


interface VetInfoTabBarProps {}

const VetInfoTabBar: React.FC<VetInfoTabBarProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator   

    screenOptions={
      {
      tabBarPressColor: 'rgba(0, 0, 0, 0)',
      tabBarStyle: { 
        position: 'absolute', 
        top: 0,
        width: '100%',
        height: 45,
        elevation: 0, //android
        shadowOpacity: 0, //ios
      }, 
      tabBarIndicatorStyle: {
        backgroundColor: '#00C2CB',

      },
      tabBarLabelStyle: {
        
      fontSize: 13,
      left: 2,
      bottom:30,
      fontWeight: 'bold',

    },

  }}>
      <Tab.Screen name="VetAddress" component={VetAddress} options={{
    tabBarIcon: () => null,
    tabBarLabel: 'Adresler'
  }}/>
      <Tab.Screen name="VetClinic" component={VetClinic} options={{
    tabBarIcon: () => null,
    tabBarLabel: ' Klinik'
  }}/>
      <Tab.Screen name="VetComments" component={VetComments} options={{
    tabBarIcon: () => null,
    tabBarLabel: 'Görüşler'
  }}/>
      <Tab.Screen name="VetMedia" component={VetMedia} options={{
    tabBarIcon: () => null,
    tabBarLabel: 'Medya'
  }}/>
    </Tab.Navigator>

  );
};

export default VetInfoTabBar;