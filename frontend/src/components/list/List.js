import React from "react";
import { FlatList, Text } from "react-native";
import ButtonUI from "../UI/button/ButtonUI";
const List = ({ items, selectedItems, numColumns, style, type, check }) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <ButtonUI
          item={item}
          selectedItems={selectedItems}
          style={style}
          type={type}
          check={check}
        />
      )}
      numColumns={numColumns}
    />
  );
};

export default List;
