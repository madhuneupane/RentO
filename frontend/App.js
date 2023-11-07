import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppStack from "./src/components/stack/AppStack";
import OwnerOnBoarding6 from "./src/components/container/OwnerOnBoarding6";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  console.log(process.env.key);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <AppStack />
        {/* <OwnerOnBoarding6 /> */}
        {/* <ImageSelector/> */}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "white",
  },
});
