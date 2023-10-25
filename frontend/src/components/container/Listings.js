import React, { useState } from 'react'
import { View, Text, TouchableOpacity,SafeAreaView } from 'react-native'
import data from '../hooks/data'
import DataList from '../list/DataList'
import { StatusBar } from "expo-status-bar";
import WebView from "react-native-webview";
import { useNavigation } from "@react-navigation/native";
const Listings = ({ navigation }) => {
  const LOCAL = "http://127.0.0.1:5500/map_list_view/index.html";

  const navigation1 = useNavigation();

  const handleWebViewMessage = (event) => {
    const message = event.nativeEvent.data;
    console.log("Received message from WebView:", event.nativeEvent.data);
    console.log("clicked");
    console.log(message);
    // Navigate to Screen2 with the data
    navigation1.navigate("Screen2", { message });
  };

  showFilter = () => {
      navigation.navigate('rentor')
  }
<<<<<<< Updated upstream
  function onMessage(data) {
    console.log("data:"+data)
    alert(data.nativeEvent.data);
  }
=======
  showlistingDets = () => {
    navigation.navigate('listing_details')
}
>>>>>>> Stashed changes
  const [listData, setListData] = useState()
  data(setListData)
  return (
    <>
    <View>
      <TouchableOpacity onPress={showFilter}>
        <Text>Filter</Text>
        </TouchableOpacity>
<<<<<<< Updated upstream
        {/* {listData && <DataList data={listData} />}    */}
=======
        {listData && <DataList navigation={navigation} data={listData} />}   
>>>>>>> Stashed changes
    </View>
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Screen1</Text>
      </View>
      <StatusBar style="auto" />

      <WebView
        style={{ flex: 1 }}
        source={{ uri: LOCAL }}
        scrollEnabled={false}
        javaScriptEnabled={true} // Enable JavaScript execution
          allowsWebContentsDebugging={true}
          onMessage={onMessage}
        mixedContentMode="compatibility"

      />
      <View>
        <Text>Some Description</Text>
      </View>
      </SafeAreaView>
      </>
  )
}

export default Listings


