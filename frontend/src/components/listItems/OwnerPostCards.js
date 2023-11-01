import React from "react";
import { Card } from "@rneui/themed";
import { Text } from "@rneui/base";
const OwnerPostCards = ({ data }) => {
  return (
    <Card>
      <Text>{data.name}</Text>
    </Card>
  );
};

export default OwnerPostCards;
