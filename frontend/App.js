import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import AppStack from './src/components/stack/AppStack';
import Filter from './src/components/container/Filter';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import LoginRentor from './src/components/container/LoginRentor';

export default function App() {
  return (
  <SafeAreaProvider>
    <View style={styles.container}>
      <AppStack/>
      {/* <LoginRentor/> */}
    </View>
   </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30

  },
});
