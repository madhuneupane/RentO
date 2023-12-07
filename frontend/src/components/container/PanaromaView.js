import React, { useState } from "react";
import { View, Text } from "react-native";

import { WebView } from "react-native-webview";
const PanaromaView = ({ navigation, route }) => {
  console.log("PanaromaView::::" + route.params.id);

  const url = `http://localhost:8080/#/`;

  const injectedJavaScript = `
    window.idFromReactNative = ${JSON.stringify(id)};
  `;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: url }}
        style={{ flex: 1 }}
        injectedJavaScript={injectedJavaScript}
      />
    </View>
  );
};

export default PanaromaView;
