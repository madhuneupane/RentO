
import React, { useState } from "react";
import {
    View,
    Text,
  
  } from "react-native";

  import {WebView} from 'react-native-webview'
const PanaromaView=({navigation,route})=>{
    console.log("PanaromaView::::"+route.params.id)

    const url = `http://localhost:8080/#/`;
    return(
        <View style={{ flex: 1}}>
            <WebView source={{ uri: url }} style={{ flex: 1 }}  />
        </View>
    )

}

export default PanaromaView