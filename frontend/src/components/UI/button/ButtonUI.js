import React from 'react'
import { Button } from '@rneui/themed'
import { TouchableOpacity,Text } from 'react-native'
import { StyleSheet } from 'react-native'
const ButtonUI = ({item,selectedItems,style,type}) => {
    return (
        <TouchableOpacity onPress={()=>selectedItems(item.value,type)}>
        <Text style={styles.text}>
            {" "+item.value+" "}
            </Text>
    </TouchableOpacity>
  )
}

export default ButtonUI

const styles = StyleSheet.create({
  
  text: {
    color: 'grey',
    borderWidth:1,
    borderRadius: 6,
    borderColor:'#20232a',
    margin: 10,
    textAlign:'auto',
    fontWeight:'bold'
  }
})