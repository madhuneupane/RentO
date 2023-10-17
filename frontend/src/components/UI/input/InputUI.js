import { Input, } from '@rneui/themed'
import { TextInput,Text, StyleSheet, View } from 'react-native'
import React from 'react'

export const InputUI = ({placeholder,label,selectedItems,type,coustomStyle}) => {
  return (
    <View style={coustomStyle&&coustomStyle.subContainer}>
      <Text>{label}</Text>
      <TextInput
        style={coustomStyle ? {...styles.textInput,...coustomStyle.textInput} :styles.textInput}
        placeholder={placeholder}
        onChangeText={(value)=>selectedItems(value,type)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'column',
    // justifyContent:'space-evenly'
  },
  textInput: {
    borderWidth:1
  }
})
