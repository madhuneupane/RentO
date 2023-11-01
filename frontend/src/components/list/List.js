import React from "react";
import { FlatList, Text } from "react-native";
import ButtonUI from "../UI/button/ButtonUI";
const List = ({
  items,
  selectedItems,
  numColumns,
  style,
  type,
  check,
  touchProps,
  customStyle,
  isPress,
}) => {
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
          touchProps={touchProps}
          customStyle={customStyle}
          isPress={isPress}
        />
      )}
      numColumns={numColumns}
    />
  );
};

export default List;
