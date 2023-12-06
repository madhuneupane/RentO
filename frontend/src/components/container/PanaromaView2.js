import React, { useState } from "react";
import { View, Text } from "react-native";

import { WebView } from "react-native-webview";
const PanaromaView2 = ({ navigation, route }) => {
  console.log("We are not going finish coding");
  const url = `http://localhost:8081/#/`;
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: url }} style={{ flex: 1 }} />
    </View>
  );
};

export default PanaromaView2;
