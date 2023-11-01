import React from "react";
import { Card } from "@rneui/themed";
import { Text } from "@rneui/base";
const OwnerCards = ({ data }) => {
  return (
    <Card>
      <Text>{data.name}</Text>
    </Card>
  );
};

export default OwnerCards;
