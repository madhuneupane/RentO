import React, { useState } from "react";
import { View, Text } from "react-native";
import interestedTenant from "../hooks/interestedTenant";
import addInterested from "../hooks/addInterested";
import { Card } from "@rneui/base";
const UserShownInterest = ({ navigation, route }) => {
  const { propertyId, interestedId, type, location } = route.params;
  const [tenants, setTenants] = useState();
  console.log("propertyId:" + propertyId);
  console.log("interestedId:" + interestedId);
  addInterested(propertyId, interestedId, setTenants);
  console.log("tenants:::" + JSON.stringify(tenants));
  return (
    <View>
      <Text>Interested</Text>
    </View>
  );
};

export default UserShownInterest;
