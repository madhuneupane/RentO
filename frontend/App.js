import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppStack from "./src/components/stack/AppStack";
import CoverImagePicker from "./src/components/container/CoverImagePicker";
import {
  useFonts,
  Mulish_800ExtraBold,
  Mulish_200ExtraLight,
  Mulish_300Light,
  Mulish_400Regular,
  Mulish_500Medium,
  Mulish_600SemiBold,
  Mulish_700Bold,
  Mulish_900Black,
  Mulish_200ExtraLight_Italic,
  Mulish_300Light_Italic,
  Mulish_400Regular_Italic,
  Mulish_500Medium_Italic,
  Mulish_600SemiBold_Italic,
  Mulish_700Bold_Italic,
  Mulish_800ExtraBold_Italic,
  Mulish_900Black_Italic,
} from "@expo-google-fonts/mulish";
import { LogBox } from "react-native";

export default function App() {
  let [fontsLoaded] = useFonts({
    Mulish_800ExtraBold,
    Mulish_200ExtraLight,
    Mulish_300Light,
    Mulish_400Regular,
    Mulish_500Medium,
    Mulish_600SemiBold,
    Mulish_700Bold,
    Mulish_900Black,
    Mulish_200ExtraLight_Italic,
    Mulish_300Light_Italic,
    Mulish_400Regular_Italic,
    Mulish_500Medium_Italic,
    Mulish_600SemiBold_Italic,
    Mulish_700Bold_Italic,
    Mulish_800ExtraBold_Italic,
    Mulish_900Black_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }
  LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <AppStack />
        {/* <CoverImagePicker /> */}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "white",
    // overflow:"visible"
  },
});
