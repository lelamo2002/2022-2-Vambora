import React from "react";
import { StatusBar } from "react-native";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-400": Inter_400Regular,
    "Inter-500": Inter_500Medium,
    "Inter-600": Inter_600SemiBold,
    "Inter-700": Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor="#38A69D" barStyle="light-content" />
        <Routes />
      </NavigationContainer>
    );
  }
}
