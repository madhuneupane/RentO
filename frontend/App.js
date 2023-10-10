import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import Filter from './src/components/container/Filter';

export default function App() {
  return (

    <View style={styles.container}>
     <Filter/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop:100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center',
    // flex: 1,
    width: '100%',
    marginTop:70

  },
});
