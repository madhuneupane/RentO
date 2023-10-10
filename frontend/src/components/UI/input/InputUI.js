import { Input, } from '@rneui/themed'
import { TextInput,Text, StyleSheet, View } from 'react-native'
import React from 'react'

export const InputUI = ({placeholder,label,selectedItems,type}) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        style={styles.textInput}
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
