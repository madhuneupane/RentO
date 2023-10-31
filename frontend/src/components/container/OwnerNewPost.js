import React from "react";
import { Card, Text } from "@rneui/themed";
export const OwnerNewPost = ({ navigation, route }) => {
  const data = route.params;
  console.log(data);
  return (
    <Card>
      <Text>{console.log("owner new post :::" + JSON.stringify(data))}</Text>
      <Text>Title:{data.title}</Text>
      <Text>Type:{data.type}</Text>
      <Text>Amenities:{data.type}</Text>
      <Text>Pet:{data.amenities.pet}</Text>
    </Card>
  );
};
