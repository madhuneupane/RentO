import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ImageSelector from "./src/components/container/ImageSelector";
import { useEffect } from "react";
import ImageContainer from "./src/components/list/ImageContainer";
import OwnerOnBoarding5 from "./src/components/container/OwnerOnBoarding5";
import AppStack from "./src/components/stack/AppStack";
export default function App() {
  console.log(process.env.key);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <AppStack />
        {/* <OwnerOnBoarding5 /> */}
        {/* <ImageSelector/> */}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
