// import "react-native-gesture-handler";
import React from "react";
import { StatusBar, useColorScheme, LogBox } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { Provider as PaperProvider } from 'react-native-paper';
/**
 * ? Local Imports
 */
import Navigation from "./src/navigation";
import { isAndroid } from "@freakycoder/react-native-helpers";
// import { createNavigationContainerRef } from "@react-navigation/native";
import { NativeBaseProvider } from 'native-base';
import { Provider } from "react-redux";
import Loading from "@shared-components/loading/Loading";
import { Store } from "@services/redux/Store";

LogBox.ignoreAllLogs();

const App = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  React.useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content");
    if (isAndroid) {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }

    setTimeout(() => {
      SplashScreen.hide();
    }, 750);
  }, [scheme, isDarkMode]);

   
  return (
    <Provider store={Store}>
    <PaperProvider>
     <NativeBaseProvider>
      <Navigation />
      </NativeBaseProvider>
      <Loading/>
    </PaperProvider>
    </Provider>

  );
};

export default App;
